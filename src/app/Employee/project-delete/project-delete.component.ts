import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ProjectData} from '../project-details/projectDataDetails'
@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {
  deleteDetails1=ProjectData;;
  constructor() { }

  ngOnInit() {
  }


}
