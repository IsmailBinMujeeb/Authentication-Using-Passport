const router = require("express").Router();

router.get("/", (req, res)=>{

    try {

        const err = req.flash("error")

        res.render("register", { err });
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;