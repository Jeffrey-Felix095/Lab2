var uri = "mongodb+srv://Jeff:diseno@cluster001.llj1whk.mongodb.net/mydb?retryWrites=true&w=majority";

var MongoClient = require('mongodb').MongoClient;
// make client connect to mongo service
MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    var dbo = db.db("mydb");
    console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
    dbo.createCollection("customers", function(err, result) {
        if (err) throw err;
        console.log("Collection is created!");
        // close the connection to db when you are done with it
        db.close();
    });
});
