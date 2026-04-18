db.collectionName.aggregate([   //agrregation takes array ,workig bsed on pipelines
    {$match:
        {department: "CSE"}
    },
    {
        $group:{
                _id: "$department",
                Total: {$sum: "$salary"}
        }
    },

    {$project:{
        department: "$_id",
        Total: 1,
        _id: 0
        
    }}
])


// practice:
db.users.aggregate([
    {
        $match: {
            Food: "Noodles"
        }
    },
    {$group:
        {
            _id: "$Food",
            Name: {$push: "$name"},
            Email: {$push: "$email"}
        }
    },
    {$project:
        {
            Food: "$_id",
            Name: 1,
            Email: 1
        }
    }
])





db.users.aggregate([
    {
        $match: {
            Food: "Noodles"
        }
    },
    {$group:
        {
            _id: "$Food",
            Employee: {$push: {
                Name: "$name",
                Email: "$email"
            }}
        }
    },
    {$project:
        {
            Food: "$_id",
            Employee: 1
        }
    }
])



db.users.aggregate([
    {$match: {
        salary: {$gte: 20000}
    }},

    {$group: {
        _id: "salary",
        Sum: {$sum: "$salary"},
        Average: {$avg: "$salary"},
        Location: {$first: "You are qualified"
        },
        Employee: {$push: {
            Name: "$name",
            Email: "$email"
        }}
    }

    },

    {$project: {
        Salary: "$_id",
        Sum: 1,
        Average: 1,
        Location: 1,
        Employee: 1
    }}
])

db.users.aggregate([  //creates different documents inside partifular collection for wach value inside Food
    {$unwind: "$Food"}
])