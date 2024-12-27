const router = require("express").Router();

router.get("/", (req, res)=>{

    try {
        res.render("register");
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;