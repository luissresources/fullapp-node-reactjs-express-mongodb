const dbConnect = require('./db/dbConnect');
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./db/userModel');
const { response } = require('express');

dbConnect();

const app = express()

app.use(express.json())

app.post('/register', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  console.log({email, password})
  bcrypt
    .hash(password, 10)
    .then((hashedPass) => {
      console.log({hashedPass})
      const user = new User({
        email: email,
        password: hashedPass
      })

      console.log('email: ',email,' password: ',hashedPass)

      user.save()
        .then(result => {
          res.status(201).send({
            message: "User created", 
            result
          })
        })
        .catch(error => {
          res.status(500).send({
            message: 'Error creating user', 
            error
          })
        })
    })
    .catch( e => {
      res.status(500).send({
        message: "Password wasn't hashed succesfully", 
        e
      })
    })
  
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



