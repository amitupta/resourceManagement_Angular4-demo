import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DemoServiceService {
user:any;
  constructor(private http:Http) { }
registerUser(user)
{
  const header=new Headers();
  header.append('content-Type','application/json');
  console.log("DemoServiceService-------",user.empId);
  if(user.empId==""){
    console.log("if-------",user.empId);
    return this.http.post('http://localhost:8082/addUser',user,{headers:header})
    .map(res=>res.json());
  }else{
    return this.http.put('http://localhost:8082/editUser',user,{headers:header})
    .map(res=>res.json());
  }
 
}


}
