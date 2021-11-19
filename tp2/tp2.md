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

**5)** Afficher le nombre de logements à Porto au Portugal, dont les hôtes ne demandent pas un dépôt de garantie et dont le wifi figure comme étant exactement le deuxième équipement listé.
> Attention, en NOSql, il faut prendre en considération TOUS les cas possible.

```
db.airbnb.find({ 
    "address.market" : "Porto",
    "address.country" : "Portugal",
    "amenities.1" : "Wifi", 
    "$or" : [{"security_deposit": 0}, {"security_deposit": {$exists : false}}]
 }).count()
```

**6)** Afficher la liste des logements Airbnb à Sydney avec une restriction du nombre minimum de nuitées réservées égale à 4, et dont le service de nettoyage est gratuit. Pour chaque logement afficher uniquement le type du logement, le nombre de chambres, le prix et la rue.

```
db.airbnb.find({
    "address.market" : "Sydney",
    "minimum_nights" : "4",
    "$or" : [{"cleaning_fee": 0}, {"cleaning_fee": {$exists : false}}]
}, {
    _id: 0,
    property_type : 1, 
    bedrooms : 1, 
    price : 1, 
    "address.street" : 1 
}).count()
```

**BONUS :** Renommer le champ *name* à *ad_title* pour tous les documents. 

````
db.airbnb.updateMany({}, { $rename: { 'name': 'ad_title'} } )
```
