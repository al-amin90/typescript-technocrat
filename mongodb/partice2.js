db.test.aggregate(
    //stage -1
    {$match: {gender: 'Male'}},
    //stage -2
    {$addFields: {course: 'level-2', eduTech: 'programming hero', moner: 'moner issa'}},
      //stage -3
     {$project: {course: 1, eduTech: 1, moner:1}},
         //stage -4
     {$merge: 'courses'}
)

db.test.aggregate(
    //stage -1
    {$group: { _id: "$address.country" ,  count: {$sum: 1}, fullDoc: {$push: "$$ROOT"}}},
    //stage -2
    {
        $project: {
            'fullDoc.name.firstName': 1, 
            'fullDoc.email': 1, 
            'fullDoc.phone':1
            
        }
        
    },
    
    //stage -3

)


db.test.aggregate([
    //stage -1
    {
        $group: { 
            _id: null,  
            totalSalary: {$sum: '$salary'},
            maxSalary: {$max: '$salary'},
            minSalary: {$min: '$salary'},
            avgSalary: {$avg: '$salary'},
            dateOfBirth: {$push: '$birthday'}
        }
    },
    //stage -2
    {
        $unwind: "$dateOfBirth"
    },
    //stage -3
    {
        $project: {
            totalSalary: 1, 
            maxSalary: 1, 
            minSalary:1,
            dateOfBirth:1,
            averageSalary:'$avgSalary',
            rangeMinAndMax: {$subtract: ["$maxSalary", "$minSalary"]},
            // dateDiffarence: {$subtract: [new Date(), "$dateOfBirth"]}
        }
        
    },
    
 
]
)