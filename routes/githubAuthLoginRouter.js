const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("github"));

module.exports = router;