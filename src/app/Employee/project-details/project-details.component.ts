import { Component, OnInit,Input } from '@angular/core';
import{ProjectDetails} from './projectDetails.model';



@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  clicked=false;
  details1:ProjectDetails[]=[
  new ProjectDetails('Contact lens', 'MK001', 'MSI', '4/01/2020', '2/2/2020',  'US', 'High', 'Param', 'Priya', 'Queue'),
  new ProjectDetails('Bajaj Finance', 'MS001', 'Bajaj', '1/01/2020', '2/3/2020',  'IN', 'Low', 'Chethan', 'Priya', 'Progress'),
  new ProjectDetails('Myntra Brand Image', 'MK002', 'Myntra', '1/01/2020', '2/4/2020',  'IN', 'Medium', 'Anil', 'Priya', 'Completed')
];
constructor() { }
ngOnInit() {}
addClicked(){
    this.clicked=true;
}
OnAddDetails(projectdetails:ProjectDetails){
  this.details1.push(projectdetails);
}
/*private details1:ProjectDetails[];
private url = 'projectList'

 


  readData():Observable<ProjectDetails[]>{
    return this.http.get<ProjectDetails[]>(this.url);
  }
   public addData(
   ProjectData: {Pro_Name:string, Pro_id:string, Client:string, Commission_Date:string, End_Date:string, Geo_vertical:string, Prority_level:string, AssignTo:string, R_Manager:string, P_Status:string} )
   {
    return this.httpClient.post(`${this.serverUrl + 'ProjectData'}`, ProjectData);
  };
 
  public deleteData(Pro_id){
    return this.httpClient.delete(`${this.serverUrl + 'ProjectData'}/${Pro_id}`)
  }

  public EditData(
    ProjectData: {Pro_Name:string, Pro_id:string, Client:string, Commission_Date:string, End_Date:string, Geo_vertical:string, Prority_level:string, AssignTo:string, R_Manager:string, P_Status:string} )
    {
      return this.httpClient.put(`${this.serverUrl + 'ProjectData'}/${ProjectData.Pro_id}`,ProjectData);
   };*/

}
