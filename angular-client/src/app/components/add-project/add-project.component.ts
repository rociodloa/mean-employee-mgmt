import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';

declare const M: any;

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  projectForm: FormGroup;
  submitted = false;

  constructor(private projectService: ProjectService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  validateForm() {
    this.submitted = true;
    if (this.projectForm.invalid) {
      return;
    }
  }

  addProject(form?: NgForm) {
    this.validateForm();
    if (form.value._id) {
      this.projectService.putProject(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Updated Successfully' });
        });
    } else {
      this.projectService.postProject(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Save successfully' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.projectService.selectedProject = new Project();
    }
  }
}
