const passport = require("passport");
const router = require("express").Router();

router.post("/", passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login"
}))

module.exports = router;