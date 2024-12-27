const router = require('express').Router();
const { isAuthenticated } = require("../utils/isAuthenticate")

router.get('/', isAuthenticated, (req, res)=>{
  res.render('index');
});

module.exports = router;
