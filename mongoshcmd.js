// Install mongo Shell
// To check version: open cmd: 
mongosh -version 
// To connect:
 mongosh

// To check database:
// show dbs

// To create and work in new Database:
// use yourdatabasename

// To create collection:

db.createCollection("yourcollectionname")
// {ok: 1} means 1 collection succesfully created


// To display collection
// show collections

// To rename collection name
db.yourcollectionname.renameCollection("newname")
db.users.renameCollection("tests")


// TO show data
db.yourcollectionname.find()
db.users.find()

// Insert:
db.yourcollectionname.insertOne({key1: "value1" ,key2:"value2" ,key3:"value3"})
// e.g->  db.users.insertOne({name:"XYZ", section:"abz", email:"xyz@gmail.com", department:"CSE"})

//multiple insert

db.users.insertMany([
    {name:"John", section:"abcd", email:"john@gmail.com", department:"CSE", salary:100000 },
    {name:"smith", section:"abcd", email:"smith@gmail.com", department:"CSE", salary:140000},
    {name:"roy", section:"abcd", email:"roy@gmail.com", department:"CSE", salary:300000}
])




















































