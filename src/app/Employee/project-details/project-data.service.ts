import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService implements InMemoryDbService {

  constructor() { }
 /* createDb(){
    const projectList=[
      {Pro_Name:'Contact lens', 
      Pro_id:'MK001', 
      Client:'MSI', 
      Commission_Date:'4/01/2020', 
      End_Date:'2/2/2020', 
      Geo_vertical:'US', 
      Prority_level:'High', 
      AssignTo:'Param',
       R_Manager:'Priya',
        P_Status:'Queue'}

    ];
    return (projectList);
    

  }*/
}
