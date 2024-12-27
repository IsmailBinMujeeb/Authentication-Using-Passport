const mongoose = require("mongoose");

const conn = mongoose.connect("mongodb://localhost:27017/Authentication")
.catch((e)=>{
    console.log(e);
})

module.exports = conn;