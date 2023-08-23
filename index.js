require('dotenv').config()
const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')
const path = require('path')

connectToMongo();
const app = express()

app.use(cors())
app.use(express.json())
// // Serving the Frontend
app.use(express.static('./frontend/build'))

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes')) 

app.get("*", function(req, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build", "index.html"),
    function(err){
      res.status(500).send(err);
    }
    );
  })
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
  // console.log(process.env);
})

// connectToMongo(()=>{
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
// });


