import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

const routes: Routes = [
 // { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-employee', component: AddEmployeeComponent },
 // { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'projects-list', component: ProjectsListComponent },
  { path: 'add-project', component: AddProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
