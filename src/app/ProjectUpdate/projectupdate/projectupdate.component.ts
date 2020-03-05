import { Component, OnInit,Input,ViewChild,ElementRef} from '@angular/core';
import {ProjectupdateService} from '../projectupdate.service';
import { map } from 'rxjs/operators';
import {ProjectModel} from '../project-model';


@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrls: ['./projectupdate.component.css']
})
export class ProjectupdateComponent implements OnInit {
  AddClicked=false;
  UpdateClicked=false;
  porjectStatusReport: any; 
  ProjectModelkey: any;
  @ViewChild('LastUpdatedOn',{static:false})LastUpdatedOn:ElementRef;
  @ViewChild('LastUpdatedBy',{static:false})LastUpdatedBy:ElementRef;
  @ViewChild('Status',{static:false})Status:ElementRef;
  @ViewChild('Description',{static:false})Description:ElementRef;

  constructor(private projectReportService:ProjectupdateService) { }
  OnAddClick(){
    this.AddClicked=true;
  }
  OnUpdateClick(event,UpdateKey)
  {
    this.UpdateClicked=true;
    this.ProjectModelkey=UpdateKey;
  }
  ngOnInit() {
    //view ProjectStatus on page load
    //view data
   this.projectReportService.getProjectReport().snapshotChanges().pipe(
    map(e=>
     e.map(x=>
       ({key:x.payload.key,
        
        ...x.payload.val() })))).subscribe(ex=>{this.porjectStatusReport=ex;
          })
  }
  deleteProjectStatusReport(event,ex) {
    this.projectReportService.deleteProjectReport(ex).then(ei=> console.log("Deleted Sucessfully"))
    .catch(erro => console.log(erro))
    
    
  }
  UpdateProjectStatusReport(ProjectModelkey)
  {
    const updateDate=this.LastUpdatedOn.nativeElement.value;
    const updatedBy=this.LastUpdatedBy.nativeElement.value;
    const updateStatus=this.Status.nativeElement.value;
    const updateDateescription=this.Description.nativeElement.value;
    this.projectReportService.updateProjectReport(ProjectModelkey,{LastUpdatedOn:updateDate, 
      LastUpdatedBy:updatedBy,Status:updateStatus,Description:updateDateescription
    })
  }
 
}


