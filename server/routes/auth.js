const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require('bcrypt');

//Register
router.post('/register', async (req, res, next) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Login 
router.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send('user not found');

        const validPass = await bcrypt.compare(req.body.password, user.password);
        !validPass && res.status(400).send('wrong password');

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;