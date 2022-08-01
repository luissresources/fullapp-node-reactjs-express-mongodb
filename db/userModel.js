const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email : {
    type: String,
    required: [true, "Add a email"],
    unique: [true, "email exist"]
  },
  password: {
    type: String,
    required: [true, 'Add a password'],
    unique: false
  }
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema)
