import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployeeList();
  }

  showForEdit(emp : Employee){
    //emp : Employee
    console.log(44445);
    console.log(emp)
    this.employeeService.selectedEmployee = Object.assign({},emp);
    console.log(this.employeeService.selectedEmployee,4447);
  }
}
