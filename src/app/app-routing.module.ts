import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/Router'
import {RockStarsComponent} from 'src/app/rock-stars/rock-stars.component'
import {ProjectDetailsComponent} from '../app/Employee/project-details/project-details.component'
import {EmployeeDetailsComponent} from '../app/Employee/employee-details/employee-details.component'
 const rockstarrout:Routes=[
   //path:'rock-stars', component:RockStarsComponent
   { path: 'Employee', component: RockStarsComponent },  
   { path: 'Details', component: EmployeeDetailsComponent },
   { path: 'project', component: ProjectDetailsComponent }
 ];
@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(rockstarrout)
  ],exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
