const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    googleId: {
        type: String,
    },

    fullname: {

        type: String,
        require: true,
    },

    username: {

        type: String,
    },

    email: {

        type: String,
        require: true,
    },

    password: {

        type: String,
    }
})

module.exports = mongoose.model("users", userSchema);