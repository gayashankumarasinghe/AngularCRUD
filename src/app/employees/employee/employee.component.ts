import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastrService:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if(form !=null){
      form.reset();
    }
    
    this.employeeService.selectedEmployee = {
      EmployeeID : null,
      FirstName : "",
      LastName :  "",
      EmpCode : "",
      Position : "",
      Office :  "",
    }
  }
  onSubmit(form : NgForm){
    if(form.value.EmployeeID == null){
    this.employeeService.postEmployee(form.value)
    .subscribe(data=>{
      this.resetForm(form);
      this.employeeService.getEmployeeList();
      this.toastrService.success('New employee added successfully','Employee Register');
    })
  }
    else{
      this.employeeService.putEmployee(form.value.EmployeeID, form.value)
      .subscribe(data=>{
        this.resetForm(form);
        this.employeeService.getEmployeeList();
        this.toastrService.success('Employee updated successfully','Employee Register');
      });
   }
  }

}
