db.test.find(
    { gender: 'Female', 
      age: {$nin : [18, 20, 22, 24, 26, 28, 30]},
      interests: {$all:  ["Cooking", "Gaming"]}
        
    }, 
    {company: 1, gender: 1, age: 1, interests: 1}).
    sort({ age:1 })

    db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065"),},
    { $pullAll: {friends: ["Fahim Ahammed Firoz", "Tanmoy Parvez" ]}})

    db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065"),},
    {$set: {'address.city':  'peyera',
        'address.street': 'elu'
    }}
    )

    db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065"), 'skills.isLearning': false},
    {$set: {
        'skills.$.isLearning':  null,
    }}
    )

    db.test.deleteOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065"), 'skills.isLearning': true}
    )

db.test.find(
    {age: {$gt: 30}}, {name: 1, email: 1}
)


