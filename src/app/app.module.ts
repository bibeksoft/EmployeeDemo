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
import { ProjectAddComponent } from './Employee/project-add/project-add.component';
import { ProjectDeleteComponent } from './Employee/project-delete/project-delete.component';
import { ProjectupdateComponent } from './ProjectUpdate/projectupdate/projectupdate.component';
import { ProjectupdateAddComponent } from './ProjectUpdate/projectupdate-add/projectupdate-add.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';


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
    ProjectDeleteComponent,
    ProjectupdateComponent,
    ProjectupdateAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  
}
