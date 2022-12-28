const index = (req, res) =>{
    res.send("Show all the users");
}

const getUser = (req, res) =>{
    const username = req.params.username;
    res.send(`Show user ${username}`)
}

const userSignup = (req, res) =>{
    
    res.send(`User signup`);
}

const userLogin = (req, res) =>{
    
    res.send(`User logged in`);
}

const userEdit = (req, res) =>{
    const username = req.params.username;
    res.send(`User ${username} edit`);
}

const userDelete = (req, res) =>{
    const username = req.params.username;
    res.send(`User ${username} delete`);
}

module.exports = {index, getUser, userSignup, userLogin, userEdit, userDelete}