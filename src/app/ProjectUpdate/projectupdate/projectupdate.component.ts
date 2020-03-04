import { Component, OnInit,Input } from '@angular/core';
import {ProjectupdateService} from '../projectupdate.service';
import { map } from 'rxjs/operators';
import {ProjectModel} from '../project-model';


@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrls: ['./projectupdate.component.css']
})
export class ProjectupdateComponent implements OnInit {
  clicked=false;
  porjectStatusReport: any; 
  ProjectModelkey: any;
  constructor(private projectReportService:ProjectupdateService) { }
  showDetails(){
    this.clicked=true;
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
  deleteProjectStatusReport() {
    const keyvalue=this.porjectStatusReport.$key;
    console.log(keyvalue);
    this.projectReportService.deleteProjectReport("-M1_J6Hjapgfb5eAI0Dr")
    //.catch(erro => console.log(erro))
    
    
  }
 
}


