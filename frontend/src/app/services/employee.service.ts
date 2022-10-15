import { Injectable } from '@angular/core';

import { HttpClient} from "@angular/common/http";

import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //calls http cliend and instances it as http
  constructor(private http: HttpClient) {

    // Initialization inside the constructor to allow employees store the data
    this.employees = [];
  }
  //this is the url used to contact the backend node server api
  URL_API = "http://localhost:3000/api/employees";
  
  employees : Employee[];

  //stores the input data from the form and match them model
  employeeFormInput: Employee = {
    id: 0,
    fullname: "",
    office: "",
    position:"",
    salary: 0
  };
  
  formUpdateInput: Employee ={
    id: 0,
    fullname: "",
    office: "",
    position:"",
    salary: 0
  }

  //function that gets all employees from the backend
  getEmployees(){
    //returns a response from the http get to the api url 
    return this.http.get<Employee[]>(this.URL_API);
  }


  addEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  deleteEmployee(id : number){
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  updateEmployee(id:number,employee: Employee){
    return this.http.put(this.URL_API + `/${id}`, employee);
  }

}
