import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from 'src/app/models/employee';

declare const M: any;

export interface Office {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmployeeService]
})
export class AddEmployeeComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  offices: Office[] = [
    {value: 'Prague', viewValue: 'Prague'},
    {value: 'Brno', viewValue: 'Brno'},
    {value: 'Ostrava', viewValue: 'Ostrava'}
  ];

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      office: ['', Validators.required]
     // email: ['', [Validators.required, Validators.email]],
     // password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  validateForm() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

  addEmployee(form?: NgForm) {
    this.validateForm();
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          // this.getEmployees();
          M.toast({ html: 'Updated Successfully' });
        });
    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          // this.getEmployees();
          this.resetForm(form);
          M.toast({ html: 'Save successfully' });
        });
    }
  }

  /*getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
      });
  }*/

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
