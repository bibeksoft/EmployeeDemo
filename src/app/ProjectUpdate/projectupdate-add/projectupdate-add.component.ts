import { Component, OnInit,ViewChild,ElementRef,EventEmitter} from '@angular/core';
import{ProjectupdateService} from '../projectupdate.service';
import {ProjectModel} from '../project-model';


@Component({
  selector: 'app-projectupdate-add',
  templateUrl: './projectupdate-add.component.html',
  styleUrls: ['./projectupdate-add.component.css']
})
export class ProjectupdateAddComponent implements OnInit {
  
  
  projectDetails: ProjectModel = new ProjectModel();
  submitted = false;
 // updateDate=new Date().toISOString().slice(0, 16);
  
 

  constructor(private dataDB:ProjectupdateService) { }
 
  ngOnInit() {
   
   // console.log(this.updateDate)
  }
  newprojectDetails(): void {
    this.submitted = true;
    this.projectDetails = new ProjectModel();
  }
 
  OnSaveProjectDetails() {
   
    this.dataDB.addProjectReport(this.projectDetails);
    this.projectDetails = new ProjectModel();
  }
 
  onSubmit() {
    this.submitted = false;
    this.OnSaveProjectDetails();
}

}
