<p align="center"><img src="readme/images/eseo_logo.png" width="400"></p>

# TP ESEO MongoDB

Dans le cadre de la matière *Ingénieur Big Data* de notre cursus Ingénieur (Semestre 9), nous avons du réaliser des TD/TP.
Vous pouvez retrouver dans ce repo l'intégralité des livrables.

## Fichiers 
> Attention, les Cours/TD/TP sont la propriété intellectuelles de l'eseo. Il est interdit de les diffuser ou de les commercialiser.

### TP (énoncé)
- [TP1 énoncé](readme/files/TRIMANE-TP1.pdf)
- TP2 énoncé : indisponible pour le moment.

### TP (compte rendu)
- [Mon TP1](tp1/tp1.md)
- [Mon TP2](tp2/tp2.md)

## Installations

### Mise en place du conteneur docker
```sh
docker run --name eseo-bigdata -d mongo #créer le conteneur docker
docker exec -it eseo-bigdata bash #rentrer dans le conteneur docker
mongosh #utiliser le shell mongodb
```

Importer le fichier Airbnb *(cf. tp2)*
```
docker ps

docker cp collectionTP2_Airbnb.json <conteneur_id>:/collectionTP2_Airbnb.json

docker cp readme/files/collectionTP2_Airbnb.json 20aa56300d16:/collectionTP2_Airbnb.json

mongoimport --db tp2 --collection airbnb --file collectionTP2_Airbnb.json
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
db.<nom_collection>.insertMany(<liste de documents>)
```

Insertion d'un seul ou plusieurs documents à la fois
> Méthode non conseillé 
```
db.<nom_collection>.insert(<document ou liste de couments>)
```

Mettre à jour des documents
> il existe aussi updateOne
```
db.<nom_collection>.updateMany(<filtre>, <modification>)
```

Supprimer un document
> il existe aussi deleteMany
```
db.<nom_collection>.deleteOne(<filtre>)
```

### Opérateurs

**Opérateurs de comparaison**
- $eq = equals to
- $gt = greater than
- $gte = greater than or equal
- $ne = not equal to
- $lt = less than
- $lte = less than or equal

Afficher les produits qui pèsent 500g ou moins
```
db.produits.find( {"poids" : {"$lte" : 500} } )
```

**Opérateurs logiques**

- $and = et
- $or = ou
- $not = non
- $nor = non ou
```
{"<operateur>" : [ { <condition1> }, <condition2> ] } 
```

Afficher les personnes dont l'âge est entre 20 et 45

*solution 1*
```
db.personnes.find({"$and" : [{"age" : {"$gt" : 20 }}, {"age" : {"$lt" : 45 }}]})
```

*solution 2*
- a noter .

*solution 3, **la meilleurs***
```
db.personnes.find({"age" : { "$gt" : 20, "$lt" : 45 }})
```

**Opérateur expressif d'interrogation**
> $ sur le champs permet de prendre la valeur et non pas comparé les clés
```
db.trips.find({"$expr" : { "$eq" : [ "$end station id", "$start station id" ]}})
```

### Méthodes

- limit(<n>) : limiter le nombre de résultat à <n>
- skip(<n>) : ne pas afficher les <n> premiers document du curseur
- sort({"champ" : <n>}) : trier les resultats par ordre croissant (<n> = 1) ou décroissant (<n> = -1))
- pretty() : permet de mettre en forme le résultat
- count() : permet d'obtenir le nombre de document

### Indexes

Les indexes permettent d'optimiser le temps d'execution.

> Si on interroge une collecton fréquemment en fonction d'un champ X, il est recommandé de créer un index sur le champ X.

Création d'un index sur l'année de naissance dans un ordre croissant
```
db.<nom_collection>.createIndex({ "birth year" : 1})
```
