// Question 1
db.movies.aggregate([
    {
        $match: {
            "awards.wins": {$gte: 1},
            "imdb.rating": {$gte: 0},
        }
    },
    {
        $group:{
            "_id": null,
            "max": {
                "$max": "$imdb.rating"
            },
            "min": {
                "$min": "$imdb.rating"
            },
            "avg": {
                "$avg": "$imdb.rating"
            },
            "ecart type":{
                "$stdDevPop": "$imdb.rating"
            }
        }
    }

])

// Question 2
db.movies.aggregate([
    {
        $match: {
            "imdb.rating": {$gte: 0},
        }
    },
    {
        $group:{
            "_id": "$imdb.rating",
            "nombre document": {$count: {}}
            
        }
    },
    {
        $sort:{"nombre document": -1}
    }

])

// Question 3
db.movies.aggregate([
    {
        $match: {
            "imdb.rating": {$gte: 7},
            "$and": [
                {"languages": "English"},
                {"languages":"Japanese"}
            ],
            "genres": {
                $nin: ["Crime", "Horror"]
            },
            "rated": {
                $in: ["PG", "G"]
            }
        }
    },
]).itcount()

// Question 4
db.movies.aggregate([
    {
        $project: {
            "_id": 0,
            "title":1,
            "year": 1,
            "espace":{
                "$split": ["$title", " "] 
            }
        }
    },
    {
        $match: {
            "espace":{
                $size: 1
            }
        }      
    }
]).itcount()


// Question 5
db.movies.aggregate([

    {
        "$group":{
            _id: {
                "nombre_directeurs": {
                    "$cond":[
                        {
                            "$isArray": "$directors"
                        },
                        {
                            "$size": "$directors"
                        },
                        0
                    ]
                }
            },
            "avg_metacritic": {
                "$avg": "$metacritic"
            },
            "nombre_film": {$count: {}},
        }
    },
    {
        "$sort":{
            "_id.nombre_directeurs": -1
        }
    }
])

// Question 6
db.movies.aggregate([
    {
        "$match":{
            "tomatoes.viewer.rating":{"$gt": 2},
            "countries": "USA",
            "cast.1": {$exists: true}
        },
    },
    {
        "$addFields":{
            "nbr_favs":{
                "$size": {
                    "$setIntersection" : [
                        ["Sandra Bullock",
                        "Tom Hanks", "Julia Roberts", "Kevin Spacey","George Clooney"], 
                    "$cast"]
                }
            }
        }
    },
    {
        "$sort":{
            "nbr_favs": -1,
            "tomatoes.viewer.rating": -1,
            "title": -1,
        }
    },
    {
        "$project":{
            "nbr_favs": 1,
            "tomatoes.viewer.rating": 1,
            "title": 1,
        }
    },
    {
        $skip: 38
    },
    {
        $limit: 1
    },
])

// Question 7
db.movies.aggregate([
    {
        "$match":{
            "year":{"$gte": 1990},
            "imdb.votes":{"$gte": 1}
        }
    },
    {
        "$group":{
            _id: null,
            "avg_rating":{
                $avg : "$imdb.rating"
            }
        }
    },
])