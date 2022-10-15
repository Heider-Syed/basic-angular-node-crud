const db = require("../util/databaseConnection");

module.exports = {

    getEmployees: async (req,res,next) => {
        try {
            db.dbConn.query("SELECT * FROM employees", (error,results) =>{
                if(!results){
                    res.status(404).send("Employees not found!");
                }else{
                    //console.log("The employees found are: "+JSON.stringify(results));
                    res.status(200).send(results);
                }
            });
        } catch (error) {
            console.log(error);
            return next();
        }
    },

    getEmployee: async (id,req,res,next) =>{
        try {
            db.dbConn.query("SELECT * FROM employees WHERE id = ?",[id], (error,results) =>{
                if(!results){
                    res.status(404).send("Employee not found!");
                }else{
                    //console.log("The employee is: "+JSON.stringify(results));
                    res.status(200).send(results);
                }
            });
        } catch (error) {
            console.log(error);
            return next();
        }
    },


    storeEmployee: async (empName,empOffice,empPosition,empSalary,req,res,next) =>{
        try {
            db.dbConn.query("INSERT INTO employees SET ?",{fullname:empName, office:empOffice, position:empPosition, salary:empSalary},(error, results) =>{
                if(error){
                    console.log(error);
                }else{
                    return res.status(201).send("The employee was created successfully");
                }
            });
        } catch (error) {
            console.log(error);
            return next();
        }
    },

    updateEmployee: async (id,empName,empOffice,empPosition,empSalary,req,res,next) =>{
        try {
            db.dbConn.query(`UPDATE employees SET fullname=?, office=?, position=?, salary=? WHERE id =${id}`,[empName, empOffice, empPosition, empSalary], (error,results) =>{
                if(error){
                    console.log(error);
                }else{
                    return res.status(200).send("The employee data was updated successfully!");
                }
            });
        } catch (error) {
            console.log(error);
            return next();
        }
    },

    deleteEmployee: async (id,req,res,next) =>{
        try {
            db.dbConn.query("DELETE FROM employees WHERE id = ?",[id],(error,results) => {
                res.status(200).send("Employee deleted!");
            });
        } catch (error) {
            console.log(error);
            return next();
        }
    },

}