# Answers

**1)** 
```
db.restaurants.find();
```

**2)**
```
db.restaurants.find({}, {
    "restaurant_id": 1, 
    "name": 1,
    "borough": 1,
    "cuisine": 1,
});
```

**3)**
```
db.restaurants.find({}, {
    "restaurant_id": 1, 
    "name": 1,
    "borough": 1,
    "cuisine": 1,
    "_id": 0
});
```

**4)**
```
db.restaurants.find({}, {
    "restaurant_id": 1, 
    "name": 1,
    "borough": 1,
    "address.zipcode": 1,
    "_id": 0
});
```

**5)**
```
db.restaurants.find({
    "borough": "Bronx"
});
```

**6)**
```
db.restaurants.find({
    "borough": "Bronx"
}).limit(5);
```

**7)**
```
db.restaurants.find({
    "borough": "Bronx"
}).skip(5).limit(5);
```

**8)**
```
db.restaurants.find({
    "grades": {
        "$elemMatch": {
            "score": {
                "$gt": 90
            }
        }
    }
})
```

**9)**
```
db.restaurants.find({
    "grades": {
        "$elemMatch": {
            "score": {
                "$gt": 80,
                "$lt": 100
            }
        }
    }
})
```

**10)**
```
db.restaurants.find({
    "grades": {
        "$elemMatch": {
            "score": {
                "$gt": 80,
                "$lt": 100
            }
        }
    }
})
```