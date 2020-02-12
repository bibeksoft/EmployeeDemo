import { Component, OnInit } from '@angular/core';
import {EmployeeDetails} from './EmployeeDetails'
import {ProgDetails} from './ProgaTeamModel';
import {QCTeamDetails} from './QCteamModel';
import {UITeamDetails} from './UITeamModel';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
progDeatils=ProgDetails;
qcDetails=QCTeamDetails;
uiDetails=UITeamDetails;
selectDetails:EmployeeDetails;
selectDetailsUI:EmployeeDetails;
selectDetailsQC:EmployeeDetails;
  constructor() { }
  ngOnInit() {
  }
  onProgSelect(prog:EmployeeDetails):void{
    this.selectDetails=prog;
  }

  onUISelect(UI:EmployeeDetails):void{
    this.selectDetailsUI=UI;
  }

  onQCSelect(QC:EmployeeDetails):void{
    this.selectDetailsQC=QC;
  }
  

}
