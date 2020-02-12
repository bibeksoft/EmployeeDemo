import { Component, OnInit, Input } from '@angular/core';
import {rockstar} from '../rockstar';
import {RockStars} from '../mock-rockstars'



@Component({
  selector: 'app-rock-stars',
  templateUrl: './rock-stars.component.html',
  styleUrls: ['./rock-stars.component.css']
})
export class RockStarsComponent implements OnInit {
 rockstars=RockStars;
 selectRockstar:rockstar;
  
  constructor() { }
  
  ngOnInit() {
    
  }
 onSelectRocStar(star:rockstar):void{
   this.selectRockstar=star;
   
 }

 
}
