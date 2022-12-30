const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')
const path = require('path')
require('dotenv').config()

connectToMongo();
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes')) 

// Serving the Frontend
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function(_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function(err){
      res.status(500).send(err);
    }
  );
})

app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
  // console.log(process.env);
})

// connectToMongo(()=>{
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
// });


