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
db.airbnb.find({ amenities : {$size: 2 }}, {_id : 1, amenities : 1}).count()
db.airbnb.find({ amenities : {$size: 2 }}, {_id : 1, amenities : 1})
```





