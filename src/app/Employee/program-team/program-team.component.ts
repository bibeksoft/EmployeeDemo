import { Component, OnInit,Input } from '@angular/core';
import { EmployeeDetails } from '../employee-details/EmployeeDetails';


@Component({
  selector: 'app-program-team',
  templateUrl: './program-team.component.html',
  styleUrls: ['./program-team.component.css']
})
export class ProgramTeamComponent implements OnInit {
 @Input() selectProg:EmployeeDetails;
 
  constructor() { 
     
   
    
  }

  ngOnInit() {
   
  }
  

}
