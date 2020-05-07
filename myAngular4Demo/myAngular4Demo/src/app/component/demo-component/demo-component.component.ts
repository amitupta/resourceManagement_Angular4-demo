import { Component, OnInit } from '@angular/core';
import {DemoServiceService} from '../../service/demo-service.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import{Router} from '@angular/router';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {
empId:String;
firstName:String;
lastName:String;
email:String;
password:String;
contact:String;
grade:String;
userType:any;
projectList:any;
projectName:String;
startDate:String;
endDate:String;
technologies:String;

  constructor(private router:Router,private demoService: DemoServiceService,public flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      empId:this.empId,
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
      mobile:this.contact,
      grade:this.grade,
      //userType:{userType:this.userType},
       "userType":{
        "userType":"ADMIN"
       },
     projectList:[{projectName:this.projectName,startDate:this.startDate,endDate:this.endDate,technologies:this.technologies}]
      
//  "projectList":[{
//   "projectName":"UTCL",
//  "startDate":"2017-12-27",
//  "endDate":"2020-12-27",
//  "technologies":"Spring,microservice"
// }]
     
    
    }
    console.log('user---------',user);
    this.demoService.registerUser(user).subscribe(data=>
    {
      if(data.Response==200)
      {
      // this.flashMessage.show('you are registered',{cssClass:'alert-success',timeout:5000});
      this.firstName='';
      this.lastName='';
      this.email='';
      this.contact='';
      this.password='';
      this.grade='';
      this.flashMessage.show('Resource added...',{cssClass:'alert-success',timeout:5000});
      this.router.navigate(['/home']);
      // console.log(data.message);
      }else{
        this.flashMessage.show('User already exist..',{cssClass:'alert-danger',timeout:5000});
        console.log('somthing went wrong');
      }

    });
  }

}
