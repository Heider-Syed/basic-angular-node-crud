const express = require("express");
const router = express.Router();

const employeesCtrl = require("../controllers/employees.controller");


router.get("/", employeesCtrl.getAllEmployees);

router.get("/:id", employeesCtrl.getEmployeeByID);

router.post("/", employeesCtrl.createEmployee);

router.put("/:id", employeesCtrl.updateEmployeeByID);

router.delete("/:id", employeesCtrl.deleteEmployeeByID);


/*--------------------------------------------------------------*/
module.exports = router;