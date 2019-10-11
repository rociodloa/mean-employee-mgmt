import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: Project;
  projects: Project[];
  readonly URL_API = 'http://localhost:3000/api/projects';

  constructor(private http: HttpClient) {
    this.selectedProject = new Project();
  }

  // Get all projects from the API
  getProjects() {
    return this.http.get(this.URL_API);
  }

  // Add one project to the API
  postProject(project: Project) {
    console.log('add project');
    console.log(project);
    return this.http.post(this.URL_API, project);
  }

  putProject(project: Project) {
    return this.http.put(this.URL_API + `/${project._id}`, project);
  }
/*
  deleteEmployee(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }*/
}
