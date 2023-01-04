const express = require("express");
const cors = require("cors");
const userRoute = require("./src/Routes/userRoutes.js");
const conn = require("./src/models/db.js");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
  };
  
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
  
const PORT = 5000;

app.get('/', (req, res)=>{
    res.send("Welcome")
})

//Access the router of users
app.use('/api/users', userRoute);

app.listen(PORT, ()=>{
    console.log(`App listens at port: ${PORT}`);
})