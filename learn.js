db.flightData.deleteMany({
    intercontinental: false
})

db.flightData.findOneAndDelete({
    _id: ObjectId("5f48a9c794f8d98259ce49ef")
})