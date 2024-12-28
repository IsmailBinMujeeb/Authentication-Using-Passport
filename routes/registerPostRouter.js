const router = require('express').Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcryptjs")

router.post("/", async (req, res, next) => {

    try {
        const { fullname, email, username, password } = req.body;

        const regExpUsername = new RegExp(`^${username}$`, 'i');

        const user = await userModel.findOne({ username: regExpUsername });

        if (user) {
            req.flash("error", "User already exist.")
            return res.redirect("/login");
        }

        bcrypt.hash(password, 10, async (err, hash) => {

            if (err) return next(err);

            const newUser = await userModel.create({

                fullname,
                username,
                email,
                password: hash
            })

            req.login(newUser, (err) => {
                if (err) return next(err);
                return res.redirect("/")
            })
        })



    } catch (error) {
        console.log(error)
    }
});

module.exports = router;