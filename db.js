var mongoose = require('mongoose');
mongoose.set('strictQuery', false)

const mongoURI = process.env.MONGO_URL;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })
    console.log(mongoose.connection.readyState);
}

module.exports = connectToMongo;
