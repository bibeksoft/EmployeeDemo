import { Component, OnInit} from '@angular/core';
import{ProjectupdateService} from '../projectupdate.service';
import {ProjectModel} from '../project-model'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projectupdate-add',
  templateUrl: './projectupdate-add.component.html',
  styleUrls: ['./projectupdate-add.component.css']
})
export class ProjectupdateAddComponent implements OnInit {
  addProjectDetails=new ProjectModel();
  updateDate;


  constructor(private dataDB:ProjectupdateService) { }

  ngOnInit() {
    this.updateDate=new Date().toLocaleTimeString;
    console.log(this.updateDate)
  }
  OnSaveProjectDetails(){
    this.dataDB.addProjectReport(this.addProjectDetails)
  }

}
