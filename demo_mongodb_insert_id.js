var uri = "mongodb+srv://Jeff:diseno@cluster001.llj1whk.mongodb.net/mydb?retryWrites=true&w=majority";

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
   
    var dbo = db.db("mydb");
    console.log("Switched to "+dbo.databaseName+" database");
   
    var myobj = [
        { _id: 154, name: 'Chocolate Heaven'},
        { _id: 155, name: 'Tasty Lemon'},
        { _id: 156, name: 'Vanilla Dream'}
      ];
      dbo.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
      });
});