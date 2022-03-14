# Indexes

## To create Index
```js
db.collectionName.createIndex({gender:1})
```
* If you are using `1` the it is indexing as a assenting order 
* If you are using `-1`then it is indexing as a descending order
### To drop Index
```js
db.collectionName.dropIndex({gender: 1})
```
### To list the index
```js
db.collectionName.getIndexes()
```

### Compound Index
It is used to create a index for multiple keys
```
db.collectionName.createIndex({ gender: 1, age:1})
```
```js

db.collectionName.find({gender: 10, age: "male"}) // work
db.collectionName.find({ gender: 11}) // work
db.collectionName.find({ age: "male"}) // index will not work
```
It will work form left to right. so if you are try to fetch the data, then *gender* should be there. otherwise it will not work

### Partial Index
```js
db.collectionName.createIndex(
  { "dob.age": 1 },
  { 
      partialFilterExpression: { gender: "male"}
  }
)
```
It will used in the index only for particular query, the query should be the condition that `gender: "male"`

```js
db.collectionName.find({ gender: "male",  "dob.age": 20}) //work
db.collectionName.find({ "dob.age": 20 }) // not work
```
### Configuring Index
```js
db.collectionName.createIndex({email:1}, {unique: true})
```
we can configure the index, this index not only for fetching the data and it will be unique value. Just example it will allow only unique email id.

### Time to live index
```js
db.collectionName.createIndex({email:1}, {expireAfterSeconds: 3600})
```
It will delete the index after 3600 seconds.
It will work only for the single index not in compound index.

## Sorting
Mongo db index not only for indexing the data. it is for sorting the data



# Note
* If you are try to retrieve large amount of data, then it is better to query with out indexing