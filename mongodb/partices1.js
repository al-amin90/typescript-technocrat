db.test.find(
    { gender: 'Female', 
      age: {$nin : [18, 20, 22, 24, 26, 28, 30]},
      interests: {$all:  ["Cooking", "Gaming"]}
        
    }, 
    {company: 1, gender: 1, age: 1, interests: 1}).
    sort({ age:1 })