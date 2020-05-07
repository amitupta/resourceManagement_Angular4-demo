import { Component, OnInit } from '@angular/core';
import {GetuserbyidService} from '../../service/getuserbyid.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import{Router, ActivatedRoute} from '@angular/router';
import { DemoServiceService } from '../../service/demo-service.service';

@Component({
  selector: 'app-getuser-byid',
  templateUrl: './getuser-byid.component.html',
  styleUrls: ['./getuser-byid.component.css']
})
export class GetuserByidComponent implements OnInit {
empId:String;
firstName:String;
lastName:String;
email:String;
password:String;
mobile:String;
grade:String;
isRolledOff:boolean;
userType:any;
projectList:any;
projectName:String;
startDate:String;
endDate:String;
technologies:String;
  constructor(private activatedRoute: ActivatedRoute,private router:Router, private getUserByID: GetuserbyidService,public flashMessage:FlashMessagesService, private demoService :DemoServiceService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];
      console.log(id); // Print the parameter to the console. 
      this.empId=id;
     
      this.getUserByID.getUserByEmpId(this.empId).subscribe(data=>
        {
          if(data.Response==200)
          {
            console.log('------------',data.object);
            this.empId=data.object.empId;
            this.firstName=data.object.firstName;
            this.lastName=data.object.lastName;
            this.email=data.object.email;
            this.mobile=data.object.mobile;
            this.grade=data.object.grade;
            this.isRolledOff=data.object.rolledOff;
            this.projectName=data.object.projectList[0].projectName;
            this.startDate=data.object.projectList[0].startDate;
            this.endDate=data.object.projectList[0].endDate;
            this.technologies=data.object.projectList[0].technologies;
     
          }else{
            this.empId="";
            console.log('somthing went wrong');
          }
    
        });
    });
   
    
  }

  onUpdateSubmit(){
    const user={
      empId:this.empId,
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      mobile:this.mobile,
      grade:this.grade,
      isRolledOff:this.isRolledOff,
       "userType":{
        "userType":"ADMIN"
       },
     projectList:[{projectName:this.projectName,startDate:this.startDate,endDate:this.endDate,technologies:this.technologies}]
    }

    this.demoService.registerUser(user).subscribe(data=>
      {
        if(data.Response==200)
        {
        this.firstName='';
        this.lastName='';
        this.email='';
        this.mobile='';
        this.password='';
        this.grade='';
        this.flashMessage.show('User details modifed Succesfully..',{cssClass:'alert-success',timeout:5000});
        this.router.navigate(['/getResouce']);
        // console.log(data.message);
        }else{
          this.flashMessage.show('User already exist..',{cssClass:'alert-danger',timeout:5000});
          console.log('somthing went wrong');
        }
      });
    console.log('user---------',user);
   
  }
 
}
