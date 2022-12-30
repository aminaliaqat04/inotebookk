// const { MongoClient, ServerApiVersion } = require("mongodb");
// // const url = "mongodb+srv://inam:Qwqw1234@cluster0.vaq0dr6.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb+srv://inam:Qwqw1234@cluster0.vaq0dr6.mongodb.net/?retryWrites=true&w=majority";
// const connectToMongo = () => {
//   MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function (err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });
// };

var mongoose = require('mongoose');
require('dotenv').config()
// const mongoURI = "mongodb+srv://inam:Qwqw1234@cluster0.vaq0dr6.mongodb.net/?retryWrites=true&w=majority";
const mongoURI = 'mongodb+srv://AminaL:iNotebook2022@clustera.nlql14n.mongodb.net/inotebook';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    // mongoose.set('strictQuery', true);
    // mongoose.connect(
    //     mongoURI,
    //     { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    //     () => {
    //       console.log(mongoURI);
    //     }
    //   );
    console.log(mongoose.connection.readyState);

// // Get the default connection
// const db = mongoose.connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
}

module.exports = connectToMongo;
