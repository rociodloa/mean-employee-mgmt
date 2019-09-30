import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [
 // { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-employee', component: AddEmployeeComponent },
 // { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'employees-list', component: EmployeesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
