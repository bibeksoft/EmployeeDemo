import { Component, OnInit ,Output,ViewChild,ElementRef,EventEmitter} from '@angular/core';
import {ProjectDetails} from '../project-details/projectDetails.model';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
@ViewChild('pName',{static:false}) pName:ElementRef;
@ViewChild('pId',{static:false}) pId:ElementRef;
@ViewChild('Client',{static:false}) Client:ElementRef;
@ViewChild('C_Date',{static:false}) C_Date:ElementRef;
@ViewChild('E_Date',{static:false}) E_Date:ElementRef;
@ViewChild('Geo',{static:false}) Geo:ElementRef;
@ViewChild('level',{static:false}) level:ElementRef;
@ViewChild('AssignTo',{static:false}) AssignTo:ElementRef;
@ViewChild('R_Manager',{static:false}) R_Manager:ElementRef;
@ViewChild('status',{static:false}) status:ElementRef;

@Output()P_Details= new EventEmitter<ProjectDetails>();

  constructor() { }

  ngOnInit() {
  }
  SaveDetails(){
    const projectName=this.pName.nativeElement.value;
    const projectId=this.pId.nativeElement.value;
    const Client=this.Client.nativeElement.value;
    const C_Date=this.C_Date.nativeElement.value;
    const E_Date=this.E_Date.nativeElement.value;
    const Geo=this.Geo.nativeElement.value;
    const level=this.level.nativeElement.value;
    const AssignTo=this.AssignTo.nativeElement.value;
    const R_Manager=this.R_Manager.nativeElement.value;
    const status=this.status.nativeElement.value;
    const PDetails=new ProjectDetails(projectName,projectId,Client,C_Date,E_Date,Geo,level,AssignTo,R_Manager,status);
    console.log(PDetails)
    this.P_Details.emit(PDetails);
  }

}
