const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    fullname: {

        type: String,
        require: true,
    },

    username: {

        type: String,
        require: true,
        unique: true,
    },

    email: {

        type: String,
        require: true,
        unique: true
    },

    password: {

        type: String,
        require: true,
    }
})

module.exports = mongoose.model("users", userSchema);