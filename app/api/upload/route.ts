import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';

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
    const uploadsDir = path.join(process.cwd(), 'uploads');
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

    // Simuler un traitement d'analyse (dans un cas réel, vous pourriez démarrer un job de traitement ici)
    // Pour l'instant, nous retournons simplement une réponse de succès
    
    return NextResponse.json({ 
      success: true,
      fileName,
      message: 'Fichier uploadé avec succès',
      // Dans une implémentation réelle, vous pourriez retourner un ID de job ou d'autres informations
    });
  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'upload du fichier' },
      { status: 500 }
    );
  }
} 