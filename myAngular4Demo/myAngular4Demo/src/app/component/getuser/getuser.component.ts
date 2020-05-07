import { Component, OnInit } from '@angular/core';
import {GetuserService} from '../../service/getuser.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import{Router} from '@angular/router';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

  constructor(private router:Router,private getuserService: GetuserService,public flashMessage:FlashMessagesService) { }
  httpdata;
  ngOnInit() {
 
 
  this.getuserService.getAlluser().subscribe(data=>
    {
       
      if(data.Response==200)
      {
        
        console.log('------------',data.object[0].firstName);
        this.httpdata = data.object;
     
      }else{
        console.log('somthing went wrong');
      }

    });
  
}
}
