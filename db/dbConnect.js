const mongoose = require("mongoose")
require('dotenv').config()

function dbConnect() {
  mongoose
    .connect(
      process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
        console.log("Successfully connection")
      })
      .catch(error => {
        console.log('connection error');
        console.log({error});
      }) 
}

module.exports = dbConnect