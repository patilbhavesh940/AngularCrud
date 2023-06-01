import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseAPiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      this.baseAPiUrl + '/api/Employee/GetAllEmployees'
    );
  }

  // addEmployee(addEmployee: Employee): Observable<Employee>{
  //   addEmployee.id = '00000000-0000-0000-0000-000000000000';
  //  return this.http.post<Employee>(this.baseAPiUrl + '/api/Employee/AddEmployee', addEmployee);
  // }
  addEmployee(addEmployee: Employee) {
    addEmployee.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post(
      this.baseAPiUrl + '/api/Employee/AddEmployee',
      addEmployee
    );
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseAPiUrl + '/api/Employee/' + id);
  }

  updateEmployee(id: string, updateEmployee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      this.baseAPiUrl + '/api/Employee/' + id,
      updateEmployee
    );
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseAPiUrl + '/api/Employee/' + id);
  }
}
