const router = require("express").Router();

router.get("/", (req, res)=>{

    try {
        const err = req.flash("error");
        const success = req.flash("success");
        res.render("login", {err, success});
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;