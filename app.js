const express = require('express');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const logger = require('morgan');
const bcrypt = require("bcryptjs");
require("dotenv").config();

const indexRouter = require('./routes/index');
const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");
const loginPostRouter = require("./routes/loginPostRouter");

const app = express();

const users = [
    {
        id: 1,
        username: 'testuser',
        password: bcrypt.hashSync('#include8AUTH', 10), // Password hashed
    },
];


app.set("view engine", "ejs")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({

    secret: process.env.session_secret,
    saveUninitialized: false,
    resave: false,

}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, done)=>{

    const user = users.find(u => u.username === username);

    if (!user) {
        return done(null, false, {message: "Incorrect Username or Password"});
    }

    bcrypt.compare(password, user.password, (err, isMatch)=>{

        if(err) return done(err);

        if(!isMatch) return done(null, false, "Incorrect Username or Password");

        return done(null, user);
    })
}))

passport.serializeUser((user, done)=>{

    done(null, user.id)
})

passport.deserializeUser((id, done)=>{

    const user = users.find(u => u.id === id);

    done(null, user);
})

app.use('/', indexRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/login", loginPostRouter);

module.exports = app;
