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


db.studentdetails.find({
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



db.studentdetails.find({
    "application_form.application_no": "HTE2020-0009"
}, {
    _id: 0,
    "application_form.application_date": 1,
    "application_form.application_no": 1
}).pretty()


db.studentdetails.find({
    "application_form.application_no": "HTE2020-0003"
}, {
    _id: 0,
    "application_form.application_date": 1,
    "application_form.application_no": 1
})[0]




db.studentdetails.find({}, {
    application_form: {
        $elemMatch: {
            application_no: "HTE2020-0001"
        }
    },
    _id: 0,
    "application_form.application_date": 1
}).pretty()

db.studentdetails.find({}, {
    application_form: {
        $elemMatch: {
            primary_status: "Approved"
        }
    },
    "application_form.application_date": 1,
    "application_form.application_no": 1
}).pretty()




db.studentdetails.find({
    "application_form.application_no": "HTE2020-0001"
}, {
    "application_form.application_date": 1,
    "application_form.application_no": 1
}).pretty()


db.studentdetails.find({
    "application_form.primary_status": "Approved"
}, {
    "application_form.application_date": 1
}).pretty().count()

db.universitydetails.find({
    query: { email_otp: '123456', email_id: "hello@gmail.com" },
    update: { email_otp: '1234567' },
    new: true
 }).pretty()

db.universitydetails.findAndModify({ email_otp: '123456', email_id: "hello@gmail.com" }).pretty()


db.studentdetails.aggregate(
    {
        $match: {
            "application_form.application_date": {
                $gte: new Date('2019-04-14'),
                $lt: new Date('2021-04-16')
            }
        }
    },
    { $unwind: "$application_form" },
    {
        $match: {
            "application_form.application_date": {
                $gte: new Date('2019-04-14'),
                $lt: new Date('2021-04-16')
            }
        }
    },
    {
        $project: {
            _id: 0,
            "application_form.application_status": 1,
            "application_form.application_no": 1,
            "application_form.applicant_type": 1,
            "application_form.application_date": 1,
            "application_form.primary_status": 1,
            "application_form.final_status": 1,
            "application_form.passport_number": 1,
            "application_form.full_name": 1,
        }
    }
).pretty()


db.persons.aggregate([{
    $group: {
        _id: {
            age: "$dob.age"
        },
        totalPersons: {
            gender: "$gender"
        }
    }
}])


db.persons.aggregate([{
    $match: {
        gender: 'female'
    }
},
{
    $group: {
        _id: {
            place: "$location.state"
        },
        totalPersons: {
            $sum: 1
        }
    }
}

])