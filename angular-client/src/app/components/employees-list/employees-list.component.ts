import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService} from '../../services/employee.service';
import { Employee } from 'src/app/models/employee';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

declare const M: any;

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  providers: [ EmployeeService ]

})
export class EmployeesListComponent implements OnInit {

    // Mat table
    columnsToDisplay: string[] = ['name', 'lastname', 'position', 'office', 'salary'];
    dataSource = new MatTableDataSource<Employee>();
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res as Employee[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getTableData();
          M.toast({ html: 'Deleted Succesfully' });
        });
    }
  }

}
