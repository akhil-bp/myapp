import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  s: any;

  constructor(private myroute: Router ) { 
    }
    
  ngOnInit() {
   this.s= localStorage.getItem("imagelocal");
   console.log(this.s)
  }

  logout() {
    localStorage.removeItem("tkn");
    this.myroute.navigate([""]);
  }

}
