const router = require("express").Router();

router.get("/", (req, res)=>{

    try {
        res.render("login");
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;