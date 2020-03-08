import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import {ProjectModel} from './project-model'


@Injectable({
  providedIn: 'root'
})
export class ProjectupdateService {
  projectReportDetails:AngularFireList <ProjectModel>=null;
  constructor(private database:AngularFireDatabase ) {
    this.projectReportDetails=database.list("/ProjectstatusReport");
   }
   getProjectReport():AngularFireList<ProjectModel>{
     return this.projectReportDetails;
   }
   addProjectReport(addDeatils:ProjectModel){
     return this.projectReportDetails.push(addDeatils)
   }
   updateProjectReport(key:string,value:any){
     this.projectReportDetails.update(key,value)

   }
   deleteProjectReport(key:string): Promise<void>{
     return this.projectReportDetails.remove(key);
   }
}
