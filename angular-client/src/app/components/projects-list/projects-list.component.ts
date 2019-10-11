import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  providers: [ ProjectService ]
})
export class ProjectsListComponent implements OnInit {

  // Mat table
  columnsToDisplay: string[] = ['name', 'deadline', 'client', 'description', 'skills'];

  dataSource = new MatTableDataSource<Project>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.projectService.getProjects()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res as Project[]);
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
}
