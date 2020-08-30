#### Read

```js
// to find first data
db.movies.findOne()

// to find all data
db.movies.findOne()

// find "Person of Interest" this name in the db
db.movies.find({name: "Person of Interest"})

// find "runtime" in 60
db.movies.find({runtime: 60})

// retrive firstone runtime result
db.movies.findOne({runtime: 60})

```

#### Comparison Operator
```js
// "equal" to 60 || ==60
db.movies.find({runtime:{$eq: 60}})

// "not equal" to 60 || != 60
db.movies.find({runtime:{$ne: 60}})

// "Lower then" 60 || < 60
db.movies.find({runtime:{$lt: 60}})

// "greater then" 60 || > 60
db.movies.find({runtime:{$gt: 60}})

// "Lowerthen or equal" 60 || <= 60
db.movies.find({runtime:{$lte: 60}})

// "Greater then or equal" 60 || >= 60
db.movies.find({runtime:{$gte: 60}})

// equal to 30 or 40
db.movies.find({runtime:{$in: [14, 120]}})

// not equal to 30 or 40
db.movies.find({runtime:{$nin: [60, 30]}})

```

#### Logical operator
```js
// between the rating 5 to 9.3
db.movies.find({
    $or: [{
        "rating.average": { $lt: 5 }
    }, {
        "rating.average": { $gt: 9.3 }
    }]
})

// greater then 5 and greater then 9.3
// directly opposite to OR operator
db.movies.find({
    $nor: [{
        "rating.average": { $lt: 5 }
    }, {
        "rating.average": { $gt: 9.3 }
    }]
})

// AND operator
// rating greater then 9 and genres should be "Drama"
db.movies.find({
    $and:[{
        "rating.average":{$gt:9}
    },{
        genres: "Drama"
    }]
})

db.movies.find({ "rating.average":{$gt:9} ,  genres: "Drama" })
//  above both are same.

// if above both are same, then why this AND operator
db.movies.find({  genres: "Action" ,  genres: "Drama" })
// in the above geners key is repeated with different data. some times all drivers not supported above query because of javascript. the javascript json data not accepted the repeated keys
```

#### Element operator
```js
// exitsts operator
db.movies.find({"rating.average": {$exists: true}})
// if the rating.average key there in list, that only will be retrive

// types operator
db.movies.find({id: {$type: "string"}})
// above query not return any data. because all id written in numbers
// in my data i entered all id as number. some time we can enter number as a string. so the type operator need is to retrive the data by a type
db.movies.find({id: {$type: ["number", "string"]}})
// the id type number or string
```

#### Evaluation operator
```js
//regex operator
db.movies.find({
    summary:{$regex: /musical/}
});

// expr operator
// retrive the data, that volume > target
db.sales.find({
    $expr:{ $gt:["$volume", "$target"] }
})

```


#### Quering embedded fileds & Array
```js
// greater then 7 in the average
//  "rating": { "average": 9 }
db.movies.find({"rating.average":{$gt: 7}})

//  "genres": ["Drama", "Action", "Science-Fiction"]
db.movies.find({genres:"Action"}, {genres:1, _id:0})
// result
{ "genres" : [ "Drama", "Action", "Crime" ] }
{ "genres" : [ "Drama", "Action", "Science-Fiction" ] }
{ "genres" : [ "Action", "Adventure", "Science-Fiction" ] }

// get matches in array
db.movies.find({genres:["Action"]}, {genres:1, id:1})
// result
{
	"_id" : ObjectId("5e3bda5333d4ed4c50bcd6c7"),
	"id" : 122,
	"genres" : [ "Action" ]
}

```

### Array insdie object
```js
// find the array inside object
db.users.find({ "hobbies.title":"sports" })

// size operator
// find the data, which is arrya length should be 2
db.users.find({ hobbies: { $size: 2} })

// all operator
// if "Drama" and "Horror" included in the array, that data will be retrive
db.movies.find({genres: { $all:["Drama", "Horror"] }})

// elemMatch operator
// title should be cooking and frequency gretater or equal to 6
db.users.find({
    hobbies: { $elemMatch: { title:"cooking", frequency: {$gte: 6} }}
})

```
### Projection
```js
// only return the name value
    db.movies.find(
        {runtime:{$eq: 60}}, 
        {
            name:1,
            "schedule.time":1,
            _id:0
        })


// slice
// only two array data return in this application
db.movies.find(
    { "rating.average": { $gt: 9} },
    { genres: { $slice: 2}, name: 1 }
)

// skip first value in arry, return data from two
db.movies.find(
    { "rating.average": { $gt: 9} },
    { genres: { $slice: [1, 2]}, name: 1 }
)

```