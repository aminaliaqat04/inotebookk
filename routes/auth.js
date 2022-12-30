const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "aminainelementsinfotech";

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Oops! Invalid Name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], async (req, res)=>{
    let success = false;

    // If errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    
    // Check whether user with this email exists already
    try {

        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({success, error: 'Sorry a user with this email already exists.'})
        }


        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken);
        success = true;
        res.json({success, authToken})
        // .then(user => res.json(user))
        // .catch(err => {console.log(err)
        //     res.json({error: 'Please enter a unique value for email'})
        // });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({success, error: "Internal Server Error"});
    }

})


// ROUTE 2: Authenticate a user using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res)=>{
    let success = false;
    // If errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    
    // Destructuring user
    const {email, password} = req.body;

    // Check whether user with this email exists already
    try {

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success, error: 'Try Again with correct credentials'})
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({success, error: 'Try Again with correct credentials'})
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken);
        success = true;
        res.json({success, authToken})
        // .then(user => res.json(user))
        // .catch(err => {console.log(err)
        //     res.json({error: 'Please enter a unique value for email'})
        // });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({success, error: "Internal Server Error"});
    }

})



// ROUTE 3: Get loggedin user details using: POST "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req, res)=>{
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
})

module.exports = router