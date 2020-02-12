import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDetails } from '../employee-details/EmployeeDetails';


@Component({
  selector: 'app-uiteam',
  templateUrl: './uiteam.component.html',
  styleUrls: ['./uiteam.component.css']
})
export class UITeamComponent implements OnInit {
  @Input() selectUI:EmployeeDetails;
  constructor() { }

  ngOnInit() {
  }

}
