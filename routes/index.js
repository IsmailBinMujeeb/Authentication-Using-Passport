const router = require('express').Router();
const { isAuthenticated } = require("../utils/isAuthenticate");
const userModel = require("../models/user-model");

router.get('/', isAuthenticated, async (req, res)=>{

  try {

    const user = await userModel.findOne({_id: req.session.passport.user});

    if (!user) return res.status(404).send("User not found");

    res.render('index', { user });
  } catch (error) {
    console.log(error)
  }
  
});

module.exports = router;
