import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '../../../node_modules/@angular/forms';
import { RegisterService } from '../register.service';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  value : String;
  

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private rut : ActivatedRoute
  ) { 
    this.loginform = this.formBuilder.group({
      'temail':['',Validators.required],
      'password':['',Validators.required]
    });
    this.rut.queryParams.subscribe(
      params =>{
        this.value = params.value;
      }
    );
  }

  ngOnInit() {
  }

  loginsubmit(loginform){
    console.log(this.loginform.value);
    this.registerService.loginsubmit(this.loginform);
  }
}
