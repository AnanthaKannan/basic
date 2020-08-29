db.movieList.count()

db.movieList.find({}, { id: 1, name: 1, runtime: 1 }).toArray()

db.movieList.find(
    { runtime: { $eq: 60 } },
    { id: 1, name: 1, runtime: 1 }
).count()

db.movieList.find(
    { runtime: { $ne: 60 } },
    { id: 1, name: 1, runtime: 1 }
).toArray()

db.movieList.find(
    { runtime: { $lt: 60 } },
    { id: 1, name: 1, runtime: 1 }
).toArray()