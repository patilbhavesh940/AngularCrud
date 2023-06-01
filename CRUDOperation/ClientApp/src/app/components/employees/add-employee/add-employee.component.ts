import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    sallary: 0,
    department: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  addEmployee() {
    debugger;
    if (this.addEmployeeRequest.name != "") {
      this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
        next: (employee) => {
          this.route.navigate(['employees']);
        },
        error: (response) => {
          console.log(response);
        },
      });
    }else{
      alert("Please Enter Record");
    }
  }
}
