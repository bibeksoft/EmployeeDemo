import { Component, OnInit,Input,ElementRef,ViewChild,AfterViewInit,Output } from '@angular/core';
import {rockstar} from '../rockstar';
import $ from 'jquery';
import {Chart} from 'chart.js';



@Component({
  selector: 'app-performance-details',
  templateUrl: './performance-details.component.html',
  styleUrls: ['./performance-details.component.css']

})
export class performanceDetailsComponent implements OnInit {
  @Input() rockstr: rockstar;
 imports:[Chart]
 Chart:Chart;

  constructor() {}

 
  signalSelected (markVal: string){
    $(document).ready(function(){ 
      
      let data2=[];
      data2.push(markVal);
      let canvas1 = $('#mychart');
      let ctx1 = canvas1.get(0).getContext('2d');
      let PrPopChart = new Chart(ctx1, {
        type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
          labels:['COMMUNICATION', 'DEPENDABILITY', 'RELIABILITY', 'ATTITUDE', 'COOPERATION', 'ADAPTABILITY', 'JUDGMENT', 'KNOWLEDGE', 'PROBLEM SOLVING', 'INITIATIVE','PLANNING','QUALITY','QUANTITY/APPLICATION','PRESENTATION','RESPONSIVENESS','REASONING','NEGOTIATION'],
          datasets:[{
            label:'Performance',
            //data:[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7],
            data:data2[0],
            
     
            // backgroundColor: 'green',
            backgroundColor:[
              '#e65100','#e65100',
              '#f57c00', '#fb8c00','#ff9800','#ffa726','#00ff00',
              '#0000ff','#00ffff','#00ffbf','#ff4d4d','#bfff00',
              '#0040ff','#99c2ff','#1a75ff','#bf80ff','#3973ac'

            ],
            borderWidth:1,
            borderColor:'white',
            hoverBorderWidth: 1,
            hoverBorderColor: 'grey'
          }]
        },
        options:{
          title:{
            display: true,
            text: 'Performance Report Chart',
            fontSize:25
          },
          legend:{
            display:true,
            position:'right',
            labels:{
              fontColor: 'black'
            }
          },
          layout:{
            padding:{
              left:50,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          }
        }
      });
  });
}
  

  ngOnInit() {
  
  //console.log(this.rockstr.Performance);
  
};
 
}
