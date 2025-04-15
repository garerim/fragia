import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file || !file.name.endsWith('.dem')) {
      return NextResponse.json(
        { error: 'Veuillez fournir un fichier .dem valide' },
        { status: 400 }
      );
    }

    // Créer le dossier uploads s'il n'existe pas
    const uploadsDir = path.join(process.cwd(), 'py');
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      // Ignorer l'erreur si le dossier existe déjà
    }

    // Générer un nom de fichier unique
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadsDir, fileName);

    // Convertir le fichier en ArrayBuffer puis en Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Écrire le fichier sur le serveur
    await writeFile(filePath, buffer);

    // Exécuter le script Python init.py avec le nom du fichier
    try {
      const pythonScriptPath = path.join(process.cwd(), 'py', 'init.py');
      const { stdout, stderr } = await execPromise(`python ${pythonScriptPath} -n ${fileName}`);
      
      console.log('Résultat de l\'exécution Python:', stdout);
      if (stderr) {
        console.error('Erreurs Python:', stderr);
      }
      
      return NextResponse.json({ 
        success: true,
        fileName,
        message: 'Fichier uploadé et analysé avec succès',
        pythonOutput: stdout
      });
    } catch (pythonError: any) {
      console.error('Erreur lors de l\'exécution du script Python:', pythonError);
      return NextResponse.json({
        success: true,
        fileName,
        message: 'Fichier uploadé avec succès mais erreur lors de l\'analyse',
        error: pythonError.message
      }, { status: 200 });
    }
  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'upload du fichier' },
      { status: 500 }
    );
  }
} 