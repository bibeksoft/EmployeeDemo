import { Component, OnInit,Input } from '@angular/core';
import { EmployeeDetails } from '../employee-details/EmployeeDetails';

@Component({
  selector: 'app-spteam',
  templateUrl: './spteam.component.html',
  styleUrls: ['./spteam.component.css']
})
export class SPTeamComponent implements OnInit {
  @Input() selectQC:EmployeeDetails;
  constructor() { }

  ngOnInit() {
  }

}
