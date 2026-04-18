[
  {
    _id: ObjectId('699c8f1e3b275550171e2621'),
    name: 'Ankit kumar',
    section: 'k23wf',
    email: 'ank@gmail.com',
    department: 'CSE',
    salary: 200000
  },
  {
    _id: ObjectId('699c90aa3b275550171e2622'),
    name: 'John',
    section: 'abcd',
    email: 'john@gmail.com',
    department: 'CSE',
    salary: 100000
  },
  {
    _id: ObjectId('699c90aa3b275550171e2623'),
    name: 'smith',
    section: 'abcd',
    email: 'smith@gmail.com',
    department: 'CSE',
    salary: 140000
  },
  {
    _id: ObjectId('699c90aa3b275550171e2624'),
    name: 'roy',
    section: 'abcd',
    email: 'roy@gmail.com',
    department: 'CSE',
    salary: 300000
  },
  {
    _id: ObjectId('699c97d83b275550171e2625'),
    name: 'Ayush',
    section: 'abcde',
    email: 'ayush@gmail.com',
    department: 'IT',
    salary: 100000
  },
  {
    _id: ObjectId('699c97d83b275550171e2626'),
    name: 'Ankesh',
    section: 'abcde',
    email: 'ankesh@gmail.com',
    department: 'IT',
    salary: 140000
  },
  {
    _id: ObjectId('699c97d83b275550171e2627'),
    name: 'Rahul',
    section: 'abcde',
    email: 'rahul@gmail.com',
    department: 'IT',
    salary: 300000
  },
  {
    _id: ObjectId('699c9d103b275550171e2628'),
    name: 'Rahul',
    section: 'abcde',
    email: 'rahul@gmail.com',
    department: 'IT',
    salary: 300000,
    address: { city: 'gaya', post: 'sahiya' }
  }
  
]

//Query operators practice:

db.users.find({department:{$eq:'IT'}})   //find where departemnt is equal to IT

db.users.find({department:{$ne:'IT'}})  //find where deparment is not equal to IT

db.users.find({salary:{$gt:120000}})  //find where salary is greater than 120000

db.users.find({salary:{$gte:200000}})  //find where salary is greater than equal to 200000


db.users.find({salary:{$gte:120000, $lte:220000}})  //less than equal to $lt


db.users.find({salary:{$gte:120000, $lte:220000}, department:{$eq:'IT'}})



Updation:

db.users.updateOne({name: "XYZ",section:"k23wf"},{$set: {section: "k23pb"}})

db.users.updateMany({},{$set:{age:25}})

db.users.updateMany({},{$inc:{age:3}})

db.users.updateMany({},{$rename:{age: "points"}})

db.users.updateMany({},{$unset:{points:""}})