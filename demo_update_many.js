var uri = "mongodb+srv://Jeff:diseno@cluster001.llj1whk.mongodb.net/mydb?retryWrites=true&w=majority";

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
   
    var dbo = db.db("mydb");
    console.log("Switched to "+dbo.databaseName+" database");
   
    var myquery = { address: /^S/ };
    var newvalues = {$set: {name: "Minnie"} };
    dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log(res.result + " document(s) updated");
      db.close();
    });
});