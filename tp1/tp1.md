- **1)** Créez une base de données que l’on appelle tp1 en utilisant la commande correspondante utilisée
en cours et vérifiez que vous êtes bien connecté à la base tp1.


```sh
use tp1
db # permet de savoir dans quelle base on est 
```

- **2)** Afficher la liste des bases données. Est-ce que la base des données tp1 figure parmi les éléments
de la liste ? Comment pouvez-vous expliquer cela ?

```
show dbs
```

Non la base de données *tp1* n'apparaît pas car il n'y a aucun document dedans.

- **3)** Nous souhaitons créer une collection intitulée « personnes » dans la BD tp1. Comme son nom
l’indique, cette collection renferme des données des personnes. On considère qu’une personne est
caractérisée par son nom, âge, sexe, adresse (décomposée en ville et code postal, et les centres
d’intérêts (une personne peut avoir un ou plusieurs centres d’intérêts).

*Schéma de la colletion personne*
```json
{
    "nom":"",
    "age":"",
    "sexe":"",
    "adresse": {
        "ville":"",
        "code_postal":""
    },
    "centre_interet": [
        "",
        ...
    ]
}
```

- **3.1)** Pour commencer, insérer un document correspondant à madame DUBOIS, qui a 25 ans, habite
au 2éme arrondissement de paris, et aime le cinéma et la musique.

```json
db.personnes.insertOne({
    "nom":"DUBOIS",
    "age":25,
    "sexe":"femme",
    "adresse": {
        "ville":"Paris",
        "code_postal":"75102"
    },
    "centre_interet": [
       "musique",
       "cinéma"
    ]
})
```

- **3.2)** Revérifier l’existence de la base de données tp1 et afficher ses collections
```
show dbs
show collections
```

**3.3)** Afficher le document inséré. Que remarquez-vous ?
```
db.personnes.find()
db.personnes.findOne()
```
On peut remarquer qu'un champ **_id** a été ajouté par défaut avec une valeur pour identifier le document.

**4)** Ajouter avec la même commande, les 4 personnes suivantes.

```json
db.personnes.insertMany([{
    "_id": 1,
    "nom":"THOMAS",
    "age":27,
    "sexe":"homme",
    "adresse": {
        "ville":"Montrouge",
        "code_postal":"92120"
    },
    "centre_interet": [
       "poker",
       "gym"
    ]
},
{
    "nom": "BERNARD",
    "age": 45,
    "sexe": "femme",
    "adresse": {
        "ville":"Paris",
        "code_postal":"75017"
    },
    "centre_interet": [
       "cinéma",
       "voyages"
    ]
},
{
    "nom": "ROBERT",
    "age": 38,
    "sexe": "homme",
    "adresse": {
        "ville":"Nanterre",
        "code_postal":"92000"
    },
    "centre_interet": [
       "yoga",
       "gym"
    ]
},
{
    "nom": "MOREL",
    "age": 25,
    "sexe": "femme",
    "adresse": {
        "ville":"Paris",
        "code_postal":"75016"
    },
    "centre_interet": [
       "cinéma",
       "musique"
    ]
}]
)
```

**5)** Afficher le document correspondant à la personne ayant 38 ans

```json
db.personnes.find({
    "age" : {"$eq" : 38} 
})
```

**6)** Afficher les personnes habitant à Paris

```json
db.personnes.find({
    "adresse.ville" : "Paris"} 
})
```

**7)** Afficher toutes les femmes qui habitent à Paris
```json
db.personnes.find({
    "adresse.ville" : "Paris",
    "sexe" : "femme"
})

db.personnes.find({
    "adresse.ville" : "Paris",
    "centre_interet" : []
})
```

**8)** Afficher les personnes ayant 25 ans et qui s'intéressent à la fois au cinéma et la musique. 
> Documentation MongoDB : Match an array
> 
>https://docs.mongodb.com/manual/tutorial/query-arrays/#match-an-array
```
db.personnes.find({
    "age" : 25,
    "centre_interet": {$all": ["cinéma", "musique"]}
})
```

**9)** Observez la requête suivante (requête à afficher par le professeur)

*La requête*

**9.1)** Que fait la requête ?

**9.2)** Executer la requête et commenter le résultat

**10)** Insérer le document suivant `{"_id" : 1, "nom" : "TOTO"}` dans la collection et expliquez le résultat.

```json
db.personnes.insertOne({
    "_id" : 1, 
    "nom" : "TOTO"
    })
```

> Impossible de l'insérer car la collection possède déjà un document avec qui a l'id 1.





