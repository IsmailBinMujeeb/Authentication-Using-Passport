const router = require('express').Router();
const userModel = require('../models/user-model');

router.post('/', async (req, res) => {

    try {

        const user = await userModel.findOneAndUpdate({ _id: req.session.passport.user }, {fullname: req.body.fullname});

        if (!user) return res.status(404).send("User not found");

        res.redirect('/');

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;