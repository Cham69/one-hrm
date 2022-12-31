
//Get all the users
const index = (req, res) =>{
    res.send("Show all the users");
}

//Get a single user
const getUser = (req, res) =>{
    const username = req.params.username;
    res.send(`Show user ${username}`)
}

//User register
const userSignup = (req, res) =>{
    
    res.send(`User signup`);
}

//User login
const userLogin = (req, res) =>{
    
    res.send(`User logged in`);
}

//User update
const userEdit = (req, res) =>{
    const username = req.params.username;
    res.send(`User ${username} edit`);
}

//User delete
const userDelete = (req, res) =>{
    const username = req.params.username;
    res.send(`User ${username} delete`);
}

module.exports = {index, getUser, userSignup, userLogin, userEdit, userDelete}