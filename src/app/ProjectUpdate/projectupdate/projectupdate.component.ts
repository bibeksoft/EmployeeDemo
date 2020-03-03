import { Component, OnInit } from '@angular/core';
import {ProjectupdateService} from '../projectupdate.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrls: ['./projectupdate.component.css']
})
export class ProjectupdateComponent implements OnInit {
  clicked=false;
  porjectStatusReport: any; 
  constructor(private projectReportService:ProjectupdateService) { }
  showDetails(){
    this.clicked=true;
  }
  ngOnInit() {
    //view ProjectStatus on page load
    this.projectReportService.getProjectReport().snapshotChanges().pipe(
      map(vale=>{
        vale.map(values=>(
          {
            key:values.payload.key,
            ...values.payload.val()
        }
        )

      )
      })
    ).subscribe(reprotValues=>{
      this.porjectStatusReport=reprotValues;
    }

    )
    
  }

}
