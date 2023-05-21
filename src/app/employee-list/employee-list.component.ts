import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent {

  public employees: any[] = [];

  constructor(private _employeService: EmployeeService) {
    // this.employees = this._employeService.getEmployees(); // with no http clinet 
    this._employeService._getEmployees() // with http client
      .subscribe(data => this.employees = data); // left hand side is the argument of the function and right side is the body of the function
  }

}
