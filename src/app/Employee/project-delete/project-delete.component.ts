import { Component, OnInit,Output,ViewChild,ElementRef,EventEmitter,Input} from '@angular/core';
import {ProjectData} from '../project-details/projectDataDetails'
import {ProjectDetails} from '../project-details/projectDetails.model';
@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {
  deleteDetails1=ProjectData;
  @ViewChild('searchID',{static:false})searchID:ElementRef;
  @Output() searchProID=new EventEmitter<ProjectDetails>();
  ProID:ProjectDetails;
  
  pro;
  constructor() { }

  ngOnInit() {
  }

  Ondelete(ProD:ProjectDetails)
  {
    this.ProID=ProD;
   this.pro= this.searchID.nativeElement.value;
   this.searchProID.emit(this.pro);
  console.log(this.pro);
   

    
  }
}
