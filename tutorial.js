db.movieList.count()

db.movieList.find(
    {
        $and:[{
            "rating.average":{$gt:9}
        },{
            genres: "Drama"
        }]
    },
    { id: 1, name: 1, rating: 1 }
).toArray()

db.movieList.find({}, { id: 1, name: 1, runtime: 1 }).toArray()

