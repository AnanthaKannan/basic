#### show list of db
    show dbs
    show collections	

#### show list of collections
    show collections
#### create database 
    use flights
if you are not already create db, you can use it.

#### delete database
    db.dropDatabase()

### delete collection
    db.myCollection.drop()

#### check about db or details about db
    db.states


#### import the data into the collection
    mongoimport jsonfile.json -d dbname -c collectionName --jsonArray
    mongoimport person.json -d analytics -c persons --jsonArray
    
#### create collection
```js
// create single collection

    db.flightData.insertOne({
        "departureAirport": "MUC",
        "arrivalAirport": "SFO",
        "aircraft": "Airbus A380",
        "distance": 12000,
        "intercontinental": true
    })

// create multiple collection

    db.flightData.insertMany([{
            "departureAirport": "MUC",
            "arrivalAirport": "SFO",
            "aircraft": "Airbus A380",
            "distance": 12000,
            "intercontinental": true
        },
        {
            "departureAirport": "LHR",
            "arrivalAirport": "TXL",
            "aircraft": "Airbus A320",
            "distance": 950,
            "intercontinental": false
        }
    ])
```
#### get all the data

    db.flightData.find().pretty()