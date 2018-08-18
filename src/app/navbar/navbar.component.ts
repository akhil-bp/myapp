import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
  }

  logout() {
    localStorage.removeItem("tkn");
    this.myroute.navigate([""]);
  }

}
