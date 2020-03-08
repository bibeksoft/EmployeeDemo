export class ProjectModel {
    key:string;
    ProjectName:string;
    ProjectNumber:string;
    LastUpdatedOn:string=new Date().toLocaleString();
    //.slice(0, 16);
    LastUpdatedBy:string;
    Status:string;
    Description:string;
}
