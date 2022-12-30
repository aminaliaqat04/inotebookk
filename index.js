const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')
require('dotenv').config()

connectToMongo();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes')) 

app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
  // console.log(process.env);
})

// connectToMongo(()=>{
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
// });


