db.users.find({age: {$gt: 30, $lt: 50}}).projection({age:1})

db.users.updateOne({
    email: {$eq: 'corajohnston@telepark.com'
}},{
    $inc: {age: 1}
})

db.users.countDocuments({gender: 'female'})

db.products.find({
    tags: {
        $in: ['ullamco', 'sit']
    }
})

db.orders.aggregate([{ 
    $match: {
        status: "Shipped",
        total_price: {$gt: 20000}}
},{  
    $project: {
        new_total_price: '$total_price',
        status: 1
    }}
])

db.orders.aggregate([{ 
    $group: { _id: "$user_id"}
},
db.orders.aggregate([{ 
    $skip: 3
},

db.orders.aggregate([{ 
    $match: {
        $or: [
                {status: "Pending"},
                {total_price: {$lt: 500}}
            ]
    }
},
db.orders.aggregate([
{ 
    $facet: {
        totalPrice: [
            // pipeline -1
                {
                    $project: {
                        orderTotal: {
                            $sum: {
                                $map: {
                                  input: "$products",
                                  as: "product",
                                  in: { $multiply: ["$$product.quantity", "$$product.price_per_unit"] }
                                }
                            }
                    }
                }
                    },
                    
                {
                    $group: { 
                        _id: null, 
                        totalSales: { $sum: '$orderTotal'}
                    },
               
                },
                { $project: {
                    _id: 0,
                    totalSales:1
                }}
            ],
        // avgPrice: []
    }
},
])

db.orders.aggregate([
                {
                $match: {status: 'Shipped'}
            },
{ 
    $facet: {
        totalPrice: [
            // pipeline -1
                {
                    $project: {
                        orderTotal: {
                            $sum: {
                                $map: {
                                  input: "$products",
                                  as: "product",
                                  in: { $multiply: ["$$product.quantity", "$$product.price_per_unit"] }
                                }
                            }
                    }
                }
                    },
                {
                    $group: { 
                        _id: null, 
                        totalSales: { $sum: '$orderTotal'}
                    },
               
                },
                { $project: {
                    _id: 0,
                    totalSales:1
                }}
            ],
        
        avgPrice: [
            {
                $project: {total:   {
                    $sum: {
                        $map: {
                          input: "$products",
                          as: "product",
                          in: { $multiply: ["$$product.quantity", "$$product.price_per_unit"] }
                    }
                    }
                } 
                }
            },
            {
                $group: { _id: null, totalAvg: {$avg: "$total"}}
            },
            {
                $project: {
                    _id: 0,
                    totalAvgSales: '$totalAvg'
                }
            }
        ]
    }
},
])