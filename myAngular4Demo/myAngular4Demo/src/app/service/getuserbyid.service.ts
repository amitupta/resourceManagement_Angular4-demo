import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetuserbyidService {
  constructor(private http:Http) { }
  getUserByEmpId(empID)
  {
    console.log("GetuserbyidService-------",empID);
    const header=new Headers();
    header.append('content-Type','application/json');
    return this.http.get('http://localhost:8082/getByEmpId/'+empID)
    .map(res=>res.json());
  }

  
}
