import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

  selectedEmployee : Employee;
  employeelist : Employee[];
  constructor(private http : Http) { }

  postEmployee(emp: Employee){
    var body = JSON.stringify(emp);
    var headersOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headersOptions})
    return this.http.post('http://localhost:1955/api/Employees',body,requestOptions).map(x=>x.json());
  }

  putEmployee( id, emp){
    var body = JSON.stringify(emp);
    var headersOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Put,headers : headersOptions})
    return this.http.put('http://localhost:1955/api/Employees/' + id,body,requestOptions).map(res=>res.json());
  }

  getEmployeeList(){
    this.http.get('http://localhost:1955/api/Employees')
    .map((data: Response)=>{
      return data.json() as Employee[];
    }).toPromise().then(x=>{
      this.employeelist = x;
    })
  }
}
