import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { RegisterService } from '../register.service';
import { Router,ActivatedRoute } from '@angular/router';
>>>>>>> 553c82f2fdde1bc824fa34dc417d2778b6fb2d10
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

<<<<<<< HEAD
  s: any;

  constructor(private myroute: Router ) { 
    }
    
  ngOnInit() {
   this.s= localStorage.getItem("imagelocal");
   console.log(this.s)
=======
  value : String;

  constructor(private myroute: Router,private registerService: RegisterService,
    private rut : ActivatedRoute ) { 
      this.rut.queryParams.subscribe(
        params =>{
          this.value = params.value;
          console.log(this.value,"got pic in home component");
        }
      );
    }

  ngOnInit() {
>>>>>>> 553c82f2fdde1bc824fa34dc417d2778b6fb2d10
  }

  logout() {
    localStorage.removeItem("tkn");
    this.myroute.navigate([""]);
  }

}
