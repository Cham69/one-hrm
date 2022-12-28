const express = require("express");

const userRoute = require("./Routes/userRoutes.js");
const app = express();
const PORT = 5000;

//Access the router of users
app.use('/api/users', userRoute);

app.listen(PORT, ()=>{
    console.log(`App listens at port: ${PORT}`);
})