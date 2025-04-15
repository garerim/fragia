from awpy import Demo
import os
import argparse
import glob

# base path
path = os.getcwd()
fileType = ".dem"

def main():
    parser = argparse.ArgumentParser(description="Parser de démos CS:GO/CS2") 
    parser.add_argument("--path", type=str, default=path, help="Chemin vers le dossier contenant les démos")
    parser.add_argument("--pattern", type=str, default=fileType, help="Pattern pour sélectionner les fichiers demo")
    parser.add_argument("-n", "--name",type=str, help="Nom du démo à parser", required=True)

    args = parser.parse_args()

    #Nom + . 
    full_filename= args.name+args.pattern
    # Path + nom du fichier pour le dossier
    folder_name = os.path.join(args.path, args.name)
    # Fichier pointé
    concerned_file = os.path.join(args.path, full_filename)
    print(concerned_file)
    if not os.path.exists(concerned_file):
        print(f"Aucun fichier demo trouvé avec le pattern '{args.pattern}' dans '{args.path}'")
        return
    
    # Create and parse demo
    chosen_file = concerned_file
    chosen_folder = folder_name


    if not os.path.exists(chosen_folder):
        os.makedirs(chosen_folder)
    print(f"Chosen Folder {chosen_folder}")
    # chosen_dem = Demo(chosen_path+fileType, verbose=True)
    chosen_dem = Demo(chosen_file, verbose=True)
    chosen_dem.parse()
    # Créez un dictionnaire pour stocker les informations de shape pour chaque événement
    # shapes_info = {}


    for event_name, event in chosen_dem.events.items():
        # Créer un nom de fichier basé sur le nom de l'événement
        filename = f"{full_filename}_{event_name}.csv"
        # Exporter le DataFrame en CSV
        try:
            # Méthode pour Polar DataFrame
            event.write_csv(os.path.join(chosen_folder,filename))
            print(f"Fichier '{filename}' cree avec succes")
        except AttributeError:
            # Si write_csv n'est pas disponible, essayez une autre méthode
            try:
                event.to_csv(filename)
                print(f"Fichier '{filename}' cree avec succes")
            except AttributeError:
                print(f"Impossible d'exporter '{event_name}' en CSV")

    #     # Récupérer le nombre de lignes et de colonnes
    #     nb_rows = event.shape[0]
    #     nb_columns = event.shape[1]
        
    #     # Stocker ces valeurs dans le dictionnaire
    #     shapes_info[event_name] = {"rows": nb_rows, "columns": nb_columns}
        
    #     # Afficher les informations
    #     print(f"{event_name}: {nb_rows} rows x {nb_columns} columns")

    # # Maintenant vous pouvez accéder à ces valeurs plus tard
    # # Par exemple:
    # if "weapon_fire" in shapes_info:
    #     print(f"Nombre de lignes pour weapon_fire: {shapes_info['weapon_fire']['rows']}")
    #     print(f"Nombre de colonnes pour weapon_fire: {shapes_info['weapon_fire']['columns']}")
    #     # Pour Polar DataFrame, utilisez cette syntaxe
    #     df = chosen_dem.events["weapon_fire"]
    #     header_data = df.columns    
    #     row_data = df.row(39)

if __name__ == "__main__":
    main()