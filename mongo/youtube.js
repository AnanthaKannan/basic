db.movieList.find(
    {},
    { runtime: 1, name: 1 }
).toArray()

// 170
db.movieList.find(
    { runtime: { $eq: 60} },
    { runtime: 1, name: 1 }
).count()


db.movieList.find(
    { runtime: { $ne: 60}},
    { runtime: 1, name: 1 }
).toArray()

db.movieList.find(
    { runtime: { $lt: 60 }},
    { runtime: 1, name: 1 }
).toArray()

db.movieList.find(
    { runtime: { $gt: 60 }},
    { runtime: 1, name: 1 }
).toArray()

db.movieList.find(
    { runtime: { $lte: 60 }},
    { runtime: 1, name: 1 }
).toArray()

db.movieList.find(
    { runtime: { $gte: 60 }},
    { runtime: 1, name: 1 }
).toArray()

db.movieList.find(
    { runtime: { $in: [25, 120] }},
    { runtime: 1, name: 1 }
).toArray()

db.movieList.find(
    { runtime: { $nin: [60, 30] }},
    { runtime: 1, name: 1 }
).toArray()