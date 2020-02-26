import { ProjectDetails } from './projectDetails.model'

export const ProjectData:ProjectDetails[]=[
{Pro_Name:'Contact lens', Pro_id:'MK001', Client:'MSI', Commission_Date:'4/01/2020', End_Date:'2/2/2020',  Geo_vertical:'US', Prority_level:'High', AssignTo:'Param', R_Manager:'Priya', P_Status:'Queue'},
{Pro_Name:'Bajaj Finance', Pro_id:'MS001', Client:'Bajaj', Commission_Date:'1/01/2020',End_Date:'2/3/2020',  Geo_vertical:'IN', Prority_level:'Low', AssignTo:'Chethan', R_Manager:'Priya', P_Status:'Progress'},
{Pro_Name:'Myntra Brand Image', Pro_id:'MK002', Client:'Myntra', Commission_Date:'1/01/2020', End_Date:'2/4/2020',  Geo_vertical:'IN', Prority_level:'Medium', AssignTo:'Anil', R_Manager:'Priya', P_Status:'Completed'}
]
export const firebase_enviornment={
    firebase:{
        apiKey: "AIzaSyBaSxni5gip0lirBkpwqB5Xb4UJTa7Y96Q",
        authDomain: "employeedashboard-c0c0e.firebaseapp.com",
        databaseURL: "https://employeedashboard-c0c0e.firebaseio.com",
        projectId: "employeedashboard-c0c0e",
        storageBucket: "employeedashboard-c0c0e.appspot.com",
        messagingSenderId: "616032112538",
        appId: "1:616032112538:web:0b361e691b2539a94a7423",
        measurementId: "G-W2QS57R4TX"
      }
};

