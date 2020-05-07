import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {

  constructor(private router :Router) { }
  ngOnInit() {
  //this.router.navigate(['/login']);
  }

}
