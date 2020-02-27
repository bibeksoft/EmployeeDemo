import { Component, OnInit,Input } from '@angular/core';
import { EmployeeDetails } from '../employee-details/EmployeeDetails';
import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-program-team',
  templateUrl: './program-team.component.html',
  styleUrls: ['./program-team.component.css']
})
export class ProgramTeamComponent implements OnInit {
 @Input() selectProg:EmployeeDetails;
details :any [];
  constructor(private fire:AngularFirestore) { 
    
    
   }

  ngOnInit() {
    this.fire.collection('Employee').snapshotChanges().subscribe(Edetails=>
      {
        this.details=Edetails.map(X=>{
          return  X.payload.doc.data();
      })
       
      })
  }
  

}
