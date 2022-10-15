const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const cors = require("cors");
const db = require("./util/databaseConnection");

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());//Parse JSON bodies (as sent by API clients)
app.use(morgan("dev")); //Middleware that console logs the HTTP request the server receives

/* Defines the employees routes and finis it with whatever is next like http://localhost:3000/api/employees/:id */
app.use("/api/employees", require("./routes/employees.routes"));


db.dbConn.connect( (error) =>{
    if(error){
        console.log("❌...DATABASE DISCONNECTED DUE TO AN ERROR...❌");
        console.log(error);
    }else{
        console.log("✔...DATABASE CONNECTED SUCCESSFULLY...✔");
    }
});


app.listen(PORT, (req,res) =>{
    console.log(`Server running on port http://localhost:${PORT}`);
});