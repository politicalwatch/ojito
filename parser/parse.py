import csv
import json
# pip install python-slugify
from slugify import slugify


PARTIES = {
        'Gobierno': {'name': 'Gobierno', 'color': '#13143F'},
        'PSOE': {'name': 'Partido Socialista Obrero Español', 'color': '#f31912'},
        'PP': {'name': 'Partido Popular', 'color': '#17589D'},
        'VOX': {'name': 'VOX', 'color': '#7cbd2a'},
        'UP': {'name': 'Unidas Podemos', 'color': '#683064'},
        'Ciudadanos': {'name': 'Ciudadanos', 'color': '#fa5000'},
        'ERC': {'name': 'Esquerra Republicana de Catalunya', 'color': '#fbf651'},
        'EH BILDU': {'name': 'EH BILDU', 'color': '#3aaa35'},
        'Más País': {'name': 'Más País', 'color': '#0fddc4'},
        'Junts': {'name': 'Junts per Catalunya', 'color': '#5DC1B9'},
        'CUP': {'name': "Candidatura d'Unitat Popular", 'color': '#ffed00'},
        'Compromís': {'name': 'Compromís', 'color': '#f60'},
        'PNV': {'name': 'Partido Nacionalista Vasco', 'color': '#008000'},
        'BNG': {'name': 'Bloque Nacionalista Galego', 'color': '#76B2E1'},
        'na+': {'name': 'Navarra Suma', 'color': '#e3001b'},
        'Coalición Canaria': {'name': 'Coalición Canaria', 'color': '#00ade9'},
        'Nueva Canarias': {'name': 'Nueva Canarias', 'color': '#8dbe2e'},
        'PRC': {'name': 'Paertido Regionalista de Cantabria', 'color': '#bfcd16'},
        'Teruel Existe': {'name': 'Teruel Existe', 'color': '#037252'},
        'Foro Asturias': {'name': 'Foro Asturias', 'color': '#1A4A72'},
        }


data = {
        'topics': [],
        'parties': []
        }

commitments = []
with open('commitments.csv') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        commitments.append(row)

def get_commits_by_topic(party='', topic=''):
    filtered_commits = list(filter(
        lambda x: x['Temática'] == 'Pobreza infantil' and x['Partido'] == 'Gobierno',
        commitments))
    return [
            {
                'title': commit['Compromiso'],
                'compliance': commit['Cumplimiento'],
                'pdf': commit['PDFLink'],
                'initiatives': [
                    {'title': commit[f'Acto{i}Titulo'], 'link': commit[f'Acto{i}Link']}
                    for i in range(1, 4)
                    ]
                }
            for commit in filtered_commits
            ]

def get_commits(party='', topics=''):
    return [
            {'id': slugify(topic), 'commits': get_commits_by_topic(party=party, topic=slugify(topic))}
            for topic in topics
            ]

with open('overview.csv') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    keys = []
    for row in csv_reader:
        if line_count == 0:
            keys = [key for key in row.keys() if key != 'Partido']
            data['topics'] = [
                    {'id': slugify(key), 'name': key}
                    for key in keys
                    ]
        data['parties'].append({
            'name': PARTIES[row['Partido']]['name'],
            'shortname': row['Partido'].strip(),
            'color': PARTIES[row['Partido']]['color'],
            'overview': [
                {
                    'id': slugify(key),
                    'score': int(row[key])
                    }
                for key in keys
                ],
            'commitments': get_commits(party=row['Partido'], topics=keys)
            })

        line_count += 1

print(json.dumps(data, indent=4, ensure_ascii=False))
