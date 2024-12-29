const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/login",
}))

module.exports = router;