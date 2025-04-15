from awpy import Demo
import os

# base path
path = os.getcwd()
fileType = ".dem"
testFile = "testCTDemo"
proPlayFile = "ence-vs-b8-m"
proPlayRound1 = proPlayFile+"1-mirage"
proPlayRound2 = proPlayFile+"2-nuke"
proPlayRound3 = proPlayFile+"3-ancient"

# Create and parse demo
chosen_round = proPlayRound3
chosen_folder = path+chosen_round
chosen_path = path+chosen_round

chosen_dem = Demo(chosen_path+fileType, verbose=True)
chosen_dem.parse()
# Créez un dictionnaire pour stocker les informations de shape pour chaque événement
shapes_info = {}

if not os.path.exists(chosen_folder):
    os.makedirs(chosen_folder)

for event_name, event in chosen_dem.events.items():
    # Créer un nom de fichier basé sur le nom de l'événement
    filename = f"{chosen_round}_{event_name}.csv"
     # Exporter le DataFrame en CSV
    try:
        # Méthode pour Polar DataFrame
        event.write_csv(chosen_folder+"/"+filename)
        print(f"Fichier '{filename}' cree avec succes")
    except AttributeError:
        # Si write_csv n'est pas disponible, essayez une autre méthode
        try:
            event.to_csv(filename)
            print(f"Fichier '{filename}' cree avec succes")
        except AttributeError:
            print(f"Impossible d'exporter '{event_name}' en CSV")
    # Récupérer le nombre de lignes et de colonnes
    nb_rows = event.shape[0]
    nb_columns = event.shape[1]
    
    # Stocker ces valeurs dans le dictionnaire
    shapes_info[event_name] = {"rows": nb_rows, "columns": nb_columns}
    
    # Afficher les informations
    print(f"{event_name}: {nb_rows} rows x {nb_columns} columns")

# Maintenant vous pouvez accéder à ces valeurs plus tard
# Par exemple:
if "weapon_fire" in shapes_info:
    print(f"Nombre de lignes pour weapon_fire: {shapes_info['weapon_fire']['rows']}")
    print(f"Nombre de colonnes pour weapon_fire: {shapes_info['weapon_fire']['columns']}")
    # Pour Polar DataFrame, utilisez cette syntaxe
    df = chosen_dem.events["weapon_fire"]
    header_data = df.columns    
    row_data = df.row(39)

# The dataframes are Polars dataframes