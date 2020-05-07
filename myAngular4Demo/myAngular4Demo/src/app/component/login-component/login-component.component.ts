import { Component, OnInit } from '@angular/core';
import{LoginServiceService} from '../../service/login-service.service';
import{FlashMessagesService} from 'angular2-flash-messages';

import{Router} from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  email:String;
  password:String;
  constructor( private router:Router, private loginService :LoginServiceService,public flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
onLoginSubmit()
{
  const user={
    email:this.email,
    password:this.password
  
  }
  this.loginService.loginUser(user).subscribe(data=>
    {
      if(data.Response==200)
      {
        this.flashMessage.show('you are logined in',{cssClass:'alert-success',timeout:5000});
       console.log(data.message);
       this.router.navigate(['/home']);
      }else{
        console.log('somthing went wrong');
      }

    });

}
}
