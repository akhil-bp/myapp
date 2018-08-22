import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators  } from '@angular/forms';
import { RegisterService } from '../register.service';
<<<<<<< HEAD
//include ReactiveFormsModule in app.module.ts.....form manipulation
=======
>>>>>>> 553c82f2fdde1bc824fa34dc417d2778b6fb2d10


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) {    
    this.registerForm = this.formBuilder.group({
      'tname':['',Validators.required],
      'temail':['',[Validators.required]],//,Validators.pattern(this.emailPattern)
      'tpassword':['', [Validators.required, Validators.minLength(2)]],
      'tconfpassword':['', [Validators.required, Validators.minLength(2)]]  
    });
   }
//userName: new FormControl('', Validators.minLength(5)) 
  ngOnInit() { 
   
    //console.log(this.registerService.data);
  }
  register(registerForm){
    //this.old_password.setValue('my name is aji')
    // console.log(this.old_password.valid);
    console.log(this.registerForm);
    console.log(this.registerForm.value,"from register component console");
    this.submitted = true;
    if(this.registerForm.invalid){
      console.log("validation");
      return;
    }
    // if(this.old_password.valid)
    // console.log(this.old_password.value);
    // console.log(this.registerForm);
    // let result = this.registerForm.value;
    // this.name = this.registerForm.value.name;
    // this.email = this.registerForm.value.emails;
    // this.password = this.registerForm.value.password;
    // this.confirm_password = this.registerForm.value.confirm_password;
    // console.log(this.name,this.email,this.password,this.confirm_password);
    this.registerService.register(this.registerForm);
  

  }

  
  

}
