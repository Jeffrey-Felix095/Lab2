var uri = "mongodb+srv://Jeff:diseno@cluster001.llj1whk.mongodb.net/mydb?retryWrites=true&w=majority";

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
   
    var dbo = db.db("mydb");
    console.log("Switched to "+dbo.databaseName+" database");
   
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
      });
});