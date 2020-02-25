const flightData = [{
        "departureAirport": "MUC",
        "arrivalAirport": "SFO",
        "aircraft": "Airbus A380",
        "distance": 12000,
        "intercontinental": true,
        "status": {
            "description": "on-time",
            "lastUpdated": "1 hour ago",
            "details": {
                "responsible": "max swing"
            }
        }
    },
    {
        "departureAirport": "LHR",
        "arrivalAirport": "TXL",
        "aircraft": "Airbus A320",
        "distance": 950,
        "intercontinental": false,
        "status": {
            "description": "on-time",
            "lastUpdated": "1 hour ago",
            "details": {
                "responsible": "max swing"
            }
        }
    }
]

const passengers = [{
        "name": "ananth",
        "age": 28,
        "hobbies": ["sports", "cooking"]
    },
    {
        "name": "kannan",
        "age": 10,
        "hobbies": ["reading", "cooking"]
    },
    {
        "name": "sree",
        "age": 78
    },
    {
        "name": "bala",
        "age": 13
    },
    {
        "name": "mani",
        "age": 30
    },
    {
        "name": "abi",
        "age": 12
    },
    {
        "name": "rapid",
        "age": 50
    },
    {
        "name": "hai",
        "age": 54
    },
    {
        "name": "hello",
        "age": 29
    }
]


db.chkdata.find({
    "application_form.application_no": "HTE2020-0002"
}, {
    _id: 0,
    "application_form.application_status": 1,
    application_form: {
        $elemMatch: {
            application_no: "HTE2020-0002"
        }
    }
}).pretty()



db.chkdata.find({
    "application_form.application_no": "HTE2020-0002"
}, {
    _id: 0,
    "application_form.attestation_docs": 1
}).pretty()


db.chkdata.find({
    "application_form.application_no": "HTE2020-0003"
}, {
    _id: 0,
    'application_form.$': 1
})








db.persons.aggregate([{
    $group: {
        _id: {
            age: "$dob.age"
        },
        totalPersons: {gender: "$gender"}
    }
}
])


db.persons.aggregate([
    { $match: { gender: 'female'}},
    { $group: { _id: { place: "$location.state" }, 
    totalPersons: {$sum: 1}  } }
  
]) 