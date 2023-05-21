import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = '/assets/data/employees.json';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return [
      { "id": 1, "name": "Gopal", "age": 29 },
      { "id": 2, "name": "Andrew", "age": 39 },
      { "id": 3, "name": "Bob", "age": 50 },
    ];
  }

  _getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url); //cast Observerable to array
  }

}
