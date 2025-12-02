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
])


db.test.aggregate([
    //stage -1
    {
        $unwind: "$interests"
    },

    //stage -2
    {
        $group: { 
            _id: '$age', 
            // countFriends: {$sum: 1},
            thatAgeInterest: {$push: '$interests'},
        }
    },
    //stage -3
    {
        $sort: {_id: -1}
}])

db.test.aggregate([
    //stage -1
    {
        $bucket: {
              groupBy: "$age",
              boundaries: [ 20, 40, 60, 80 ],
              default: "80 ar upor ar bura gula",
              output: {
                "count": { $sum: 1 },
                "titles" : { $push: "$name.firstName" }
              }
            }
    },

    //stage -2
    {
        $sort: {count: 1}
    },
    // {
    //     $group: { 
    //         _id: '$age', 
    //         // countFriends: {$sum: 1},
    //         thatAgeInterest: {$push: '$interests'},
    //     }
    // },
    
    {
        $limit: 2
    },
    //stage -3
    {
        $project: {
            count: 1
        },
    },
])

db.test.aggregate([
    {
        $facet: {
            // pipeline -1
            'friendsCount': [
                //stage -1
                {$unwind: "$friends"},
                //stage -2
                { $group: { _id: "$friends", count: {$sum: 1}}}
            ],
            // pipeline -2
            'educationCount': [
                //stage -1
                {$unwind: "$education"},
                //stage -2
                {$group: { _id: "$education.major", count: {$sum: 1}}}
                ],
            // pipeline  -3 
            'interestCount': [
                 //stage -1
                {$unwind: "$interests"},
                //stage -2
                {$group: { _id: "$interests", count: {$sum: 1}}}
            ]
        }
    }
])

db.getCollection("massive-data").find({ $text: {$search: 'dolor'}}).project({about: 1})

db.orders.aggregate([
    {
        $lookup: {
               from: "test",
               localField: "userId",
               foreignField: "_id",
               as: "user"
             }
    }    
])

db.test.find({_id: ObjectId("6406ad63fc13ae5a40000066")}).explain("executionStats")