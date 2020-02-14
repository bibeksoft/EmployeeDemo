import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { RockStarsComponent } from './rock-stars/rock-stars.component';
import { performanceDetailsComponent } from './performance-details/performance-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectDetailsComponent } from './Employee/project-details/project-details.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { ProgramTeamComponent } from './Employee/program-team/program-team.component';
import { SPTeamComponent } from './Employee/spteam/spteam.component';
import { UITeamComponent } from './Employee/uiteam/uiteam.component';
import { HttpClientModule } from '@angular/common/http';
import {ProjectDataService} from './Employee/project-details/project-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProjectAddComponent } from './Employee/project-add/project-add.component';
import { ProjectDeleteComponent } from './Employee/project-delete/project-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RockStarsComponent,
    performanceDetailsComponent,
    NavigationComponent,
    ProjectDetailsComponent,
    EmployeeDetailsComponent,
    ProgramTeamComponent,
    SPTeamComponent,
    UITeamComponent,
    ProjectAddComponent,
    ProjectDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(ProjectDataService)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  
}
