const employeesMDL = require("../models/employees.model");

//get all employees info in the database
exports.getAllEmployees = async (req,res,next) => {
    await employeesMDL.getEmployees(req,res,next);
}

//get a specific employee info in the database
exports.getEmployeeByID = async (req,res,next) =>{
    const id = req.params.id;
    if(!id){
        return res.status(400).send("Please provide the employee id you desire to search!");
    }else{
        await employeesMDL.getEmployee(id,req,res,next);
    }
}

//store a employee info in the database
exports.createEmployee = async (req,res,next) =>{
    const {empName,empOffice,empPosition,empSalary} = req.body;
    if(!empName || !empOffice || !empPosition || !empSalary){
        return res.status(400).send("Please fill all the fields!");
    }else{
        await employeesMDL.storeEmployee(empName,empOffice,empPosition,empSalary,req,res,next);
    }
}

//update a specific employee info in the database
exports.updateEmployeeByID = async (req,res,next) =>{
    const id = req.params.id;
    const {empName,empOffice,empPosition,empSalary} = req.body;

    if(!id){
        return res.status(400).send("Please provide the employee id to update!");
    }else{
        if(!empName || !empOffice || !empPosition || !empSalary){
            return res.status(400).send("Please fill all the fields!");
        }else{
            await employeesMDL.updateEmployee(id,empName,empOffice,empPosition,empSalary,req,res,next);
        }
    }
}

//delete a specific employee info in the database
exports.deleteEmployeeByID = async (req,res,next) =>{
    const id = req.params.id;
    if(!id){
        return res.status(400).send("Please provide the employee id to delete!");
    }else{
        await employeesMDL.deleteEmployee(id,req,res,next);
    }
}