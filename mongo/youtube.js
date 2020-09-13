db.studentdetails.aggregate([
    { $unwind: "$application_form" },
    { $sort: { 'application_form.application_date': -1 }},
    {
        $project: {
            'application_form.appointment_date':1,
            'application_form.application_no':1,
            'application_form.full_name':1,
            'application_form.application_date':1,
            'application_form.primary_status':1,
            'application_form.ssc_status':1,
            'application_form.final_status':1
        }
    }
]).pretty()


// {
//     $group: {
//         _id: { 
//             application_date: "$application_form.application_date",
//             application_no: "$application_form.application_no"
//          }
//     }
// },