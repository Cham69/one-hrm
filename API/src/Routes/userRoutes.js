const express = require("express");
const router = express.Router();
const {index, getUser, userSignup, userLogin, userEdit, userDelete} = require("../Controllers/userController.js");

//Get all the users
router.get('/', index);
//Get a single user
router.get('/user/:username', getUser);
//User register
router.post('/signup', userSignup);
//User login
router.get('/login', userLogin);
//User update
router.post('/edit/:username', userEdit);
//User delete
router.get('/delete/:username', userDelete);

module.exports = router;