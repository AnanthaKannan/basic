const users = {
    "_id":ObjectId("5e53fe8ba04b23e121971ea7"),
    "email" : "sree@gmail.com",
    "userId" : "AD",
    "userName" : "sree"
}

const userinfo = {
    "_id":ObjectId("5e53fe8ba04b23e121971ea7"),
    "userId" : "AD",
    "phone" : "9042141099"
}

const userrole = {
    "_id":ObjectId("5e53fe8ba04b23e121971ea7"),
    "userId" : "AD",
    "role" : "engineer"
}


db.users.aggregate([
    {
        $lookup:{
            from:"userinfo",
            localField:"_id",
            foreignField:"_id",
            as:"user_info"
        }
    },
    {   $unwind:"$user_info" },
    {
        $lookup:{
            from:"userrole",
            localField:"_id",
            foreignField:"_id",
            as:"user_role"
        }
    },
    {   $unwind:"$user_role" },
    {
        $match:{
            $and:[{"userName" : "sree"}]
        }
    },
    {   
        $project:{
            _id : 1,
            email : 1,
            userName : 1,
            userPhone : "$user_info.phone",
            userRole:"$user_role.role"
        } 
    }
]).pretty()

db.users.aggregate([

    // Join with user_info table
    {
        $lookup:{
            from: "userinfo",       // other table name
            localField: "userId",   // name of users table field
            foreignField: "userId", // name of userinfo table field
            as: "user_info"         // alias for userinfo table
        }
    },
    {   $unwind:"$user_info" },     // $unwind used for getting data in object or for one record only

    // Join with user_role table
    {
        $lookup:{
            from: "userrole", 
            localField: "userId", 
            foreignField: "userId",
            as: "user_role"
        }
    },
    {   $unwind:"$user_role" },

    // define some conditions here 
    {
        $match:{
            $and:[{"userName" : "admin"}]
        }
    },

    // define which fields are you want to fetch
    {   
        $project:{
            _id : 1,
            email : 1,
            userName : 1,
            userPhone : "$user_info.phone",
            role : "$user_role.role",
        } 
    }
]);




