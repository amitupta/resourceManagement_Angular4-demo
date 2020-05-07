import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceService {
user:any;
  constructor(private http:Http) { }
  loginUser(user)
  {
    const header=new Headers();
    header.append('content-Type','application/json');
    return this.http.post('http://localhost:8082/userLogin',user,{headers:header})
    .map(res=>res.json());
  
  }
}
