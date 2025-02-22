const router = require("express").Router();

router.get("/", (req, res)=>{

    req.logout((err)=>{

        if(err) return res.status(500).send("Error while logging out.");

        req.flash("success", "You have logout successfuly.");
        res.redirect("/login");
    })
})

module.exports = router;