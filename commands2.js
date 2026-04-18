// Find Data
db.yourcollectionname.find()  //to show all data, it shows first 20 results and then do iteration


db.yourcollectionname.find().skip(num) //how many data you want to skip

db.yourcollectionname.findOne()  //return only the very first document it find

db.yourcollectionname.findOne({name:"given name"})  //to find specific one

db.yourcollectionname.find().sort({name:1}) //1 A-Z   ||  -1 Z-A
db.yourcollectionname.find().limit(n)  //limit value can be any number  returns first n document by id



db.yourcollectionname.insertMany([
    {name:"xyz", section:"abcde", email:"xyz@gmail.com", department:"IT", salary:100000 },
    {name:"abc", section:"abcde", email:"abc@gmail.com", department:"IT", salary:140000},
    {name:"pqr", section:"abcde", email:"pqr@gmail.com", department:"IT", salary:300000},
    {name:"MNO", section:"abcde", email:"mno@gmail.com", department:"IT", salary:300000, address:{city:"gaya" ,post:"sahiya"}}
])

db.yourcollectionname.find({department:"IT"})

db.yourcollectionname.find({department:"CSE", section:"abcd"}) // all conditions must satisfy


db.yourcollectionname.find({department:"IT"}, {_id: 0,name:1, email:1, department:1}) //filter and projection  
db.yourcollectionname.find({department:"IT"}, {_id: 0,name:0, email:0, department:0}) //filter and projection //shows everything except the one we mentioned as 0 id can be 0 or 1


// All fields should either be 1 or 0 but not mixed  except id
db.yourcollectionname.find({department:"IT"}, {_id: 0,name:1, email:0, department:0}) //filter and projection //shows everything except the one we mentioned as 0
// we can replace 1 with true and 0 with false as well

db.yourcollectionname.find({'address.city':'gaya'}) 

db.yourcollectionname.find().count()   //to count how many number of documents

db.dropDatabase() //Deletes the current database

db.yourcollectionname.drop()  // used to drop collection of current Database


db.yourcollectionname.deleteOne({age:20})  //delete one document from collection in which age = 20
db.yourcollectionname.deleteMany({age:20}) //delete all document from collection in which age = 20
db.yourcollectionname.updateOne({title:"MongoDB"},{$set:{title:"MNDB"}}) //update a document in which title is as per mentioned 
db.yourcollectionname.updateMany({title:"MongoDB"},{$set:{title:"MNDB"}}) //update all document in which title is as per mentioned 

conditions:

db.yourcollectionname.find({age:{$lt:25}})  //less than 25
db.yourcollectionname.find({age:{$gt:25}})  //greater than 25
db.yourcollectionname.find({age:{$lte:25}})  //less than and equals to 25
db.yourcollectionname.find({age:{$gte:25}})  //greater than and equals 25
db.yourcollectionname.find({age:{$ne:25}})  //not equals 25
db.yourcollectionname.find({age:{$in:[25,24,18]}}).pretty()  //where age matches any of these age
db.yourcollectionname.find({age:{$nin:[25,24,18]}}).pretty()  //where age not  matches any of these age


// AND OR:
db.yourcollectionname.find({$and:[{name:"Vikas"},{place:"Mumbai"}]})
db.yourcollectionname.find({$or:[{name:"Vikas"},{place:"Mumbai"}]})

// NOT:
db.yourcollectionname.find({price:{$not:{$gt:1.99}}})


// Distinct: We use it when want to find list of products name as when we use .find() it gives all the data not specific
db.yourcollectionname.distinct("Gender")


// Aggregation: An aggregation pipeline is a way to process data step by step. Each step does one specific task, like filtering, grouping, sorting,
// or transforming documents. Use it when you need to summarise data, generate reports, or reshape documents , all directly inside MOngoDB, without 
// writing extra logic in your application


db.orders.aggregate([
    {$match: {cust_id:1}},
    {$group: {_id: '$cust_id', total: {$sum: '$amount'}}}  //is is must
])

 db.cities.aggregate([{$match: {"continent":"North America"}}, {$sort: {"population": 1}}] )


db.cities.aggregate([
    {
        $group:{
            "_id":{
                "contient":"$continent",
                "country":"$country"
            },
            "highest_population":{$max:"population"},
            "first_city":{$first:"$name"},
            "cities_in_top20":{$sum:1}
        }
    }
])


// Capped Collection: 
// fixed size collection that supports high throghput operations that insert and retrieve
// documents based on insertion order
// once a collection fill its allocated space, it makes room for new documents by overwriting the oldest
// documnets in the collection

db.createCollection("cap_col",{capped:true, size: 10000, max:2})
db.cap_col.insertOne({_id:1, name:"akash",age:22})
db.cap_col.insertOne({_id:2, name:"akash",age:22})
db.cap_col.insertOne({_id:3, name:"akash",age:22})  //first one will be removed and this will be added as max value is set to 2












