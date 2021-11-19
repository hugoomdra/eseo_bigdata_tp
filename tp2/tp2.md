# TP2 - Compte rendu

- **1)** Maintenant que nous avons créé la collection airbnb, supprimer la collection personnes

```
use tp1
db.personnes.drop()
use tp2
```

- **2)** Afficher le nombre de logements proposant uniquement 2 équipements. Afficher pour chaque logement son identifiant et ses équipements.

> Documentation MongoDB : La taille d'un champ liste
>
> https://docs.mongodb.com/manual/reference/operator/query/size/#-size

```
db.airbnb.find({ amenities : {$size: 2 }}).count()
db.airbnb.find({ amenities : {$size: 2 }}, {_id : 1, amenities : 1})
```

- **3)** Afficher le nombre de logements en Espagne pouvant loger 4 personnes et dont l'identité du locataire est vérifiée

```
db.airbnb.find({ 
    "host.host_identity_verified" : true,
    "address.country" : "Spain",
    "accommodates" : {$gte : 4} 
 }).count()
```

**4)** Afficher le nombre de logements en Turquie ayant un ascenseur

```
db.airbnb.find({
    "address.country" : "Turkey",
    "amenities" : 'Elevator'
 }).count()
```

**5)** 




