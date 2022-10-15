import { Component, OnInit } from '@angular/core';

import {EmployeeService} from "../../services/employee.service";
import {Employee} from '../../models/employee';
import {NgForm, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  /*
    creates a instance called employeeService that comes from the class EmployeeService
    that allows to use all the methods created said class
  */
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    //receives a response from the node server doing a get request with a response or a error
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      error => console.log(error)
    )
  }

  addEmployee(form: NgForm){
    this.employeeService.addEmployee(form.value).subscribe(
      res => {
        this.getEmployees();
      },
      error => console.log(error)
    );
  }

  deleteEmployee(id: number){
    if(confirm("¿are you sure you want to delete this employee?")){
      this.employeeService.deleteEmployee(id).subscribe(
        res => this.getEmployees(),
        error =>console.log(error)
      );
    }
  }
  
  editEmployee(employee:Employee){
    if(confirm("¿did you want to select this employee information?")){
      this.employeeService.employeeFormInput = employee;
    }
  }

  updateEmployee(id:number,form: NgForm){
    if(confirm("¿are you sure you want to update this employee?")){
      this.employeeService.updateEmployee(id,form.value).subscribe(
        res => this.getEmployees(),
        error =>console.log(error)
      );
    }
    
  }
  
}
