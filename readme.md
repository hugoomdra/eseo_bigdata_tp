<p align="center"><img src="readme/images/eseo_logo.png" width="400"></p>

# TP ESEO MongoDB

Dans le cadre de la matière *Ingénieur Big Data* de notre cursus Ingénieur (Semestre 9), nous avons du réaliser des TD/TP.
Vous pouvez retrouver dans ce repo l'intégralité des livrables.

## Fichiers 
> Attention, les Cours/TD/TP sont la propriété intellectuelles de l'eseo. Il est interdit de les diffuser ou de les commercialiser.

- pas de fichier pour le moment.


## Installations

### Mise en place du conteneur docker
```sh
docker run --name eseo-bigdata #créer le conteneur docker
docker exec -it eseo-bigdata bash #rentrer dans le conteneur docker
mongo #utiliser le shell mongodb
```

## Utiles

### Quelques commandes

Afficher la liste de toutes les bases de données
```
show dbs
```

Changer de base de données
```
use <nom_base_de_données>
```

Vérifier si on est bien dans une base de données
```
db <nom_base_de_données>
```

Afficher toutes les collections d'une base de données
```
show collections
```

Afficher tous les documents d'une collection
```
db.<nom_collection>.find()
db.getCollection("<nom_collection>").find()
```

La méthode **pretty** permet de mettre en forme le résultat
```
db.<nom_collection>.find().pretty()
db.getCollection("<nom_collection>").find().pretty()
```

Afficher le premier élément d'une collection
```
db.<nom_collection>.findOne()
```

Compter le nombre de documents
```
db.<nom_collection>.count()
```

Insertion d'un document
```
db.<nom_collection>.insertOne(<document>)
```

Insertion de plusieurs documents
```
db.<nom_collection>.insertMany(<liste de couments>)
```

Insertion d'un seul ou plusieurs documents à la fois
> Méthode non conseillé 
```
db.<nom_collection>.insert(<document ou liste de couments>)
```

