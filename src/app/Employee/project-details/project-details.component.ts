import { Component, OnInit,Input } from '@angular/core';
import{ProjectDetails} from './projectDetails.model';
import {ProjectData} from './projectDataDetails'




@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  clicked=false;
  delClicked=false;
  details1=ProjectData;
  /*details1:ProjectDetails[]=[
  new ProjectDetails('Contact lens', 'MK001', 'MSI', '4/01/2020', '2/2/2020',  'US', 'High', 'Param', 'Priya', 'Queue'),
  new ProjectDetails('Bajaj Finance', 'MS001', 'Bajaj', '1/01/2020', '2/3/2020',  'IN', 'Low', 'Chethan', 'Priya', 'Progress'),
  new ProjectDetails('Myntra Brand Image', 'MK002', 'Myntra', '1/01/2020', '2/4/2020',  'IN', 'Medium', 'Anil', 'Priya', 'Completed')
];*/
constructor() { }
ngOnInit() {}
addClicked(){
    this.clicked=true;
}
OnAddDetails(projectdetails:ProjectDetails){
  this.details1.push(projectdetails);
}
deleteClicked(){
this.delClicked=true;
}
OnDeletDetails(projectdeletedetails:ProjectDetails){
  this.details1.splice(projectdeletedetails[0]);
}

}
