import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
// import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'http://localhost:3000/';  

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 

  }
  register(registerForm) {
  		// let tname = registerForm.value.name;
  		// console.log(tname);
    console.log(registerForm.value,"from register service console")
   this.http.post('http://localhost:3000/userform',registerForm.value).subscribe((data: any) => {
         console.log(data.status);
        if(data.status == 'success'){
          this.router.navigate(['/home']);
        }
        else if( data.status == 'error'){
          this.router.navigate(['/register']);
        }
        else if( data.status == 'error2'){
          this.router.navigate(['/register']);
        }
        //  this.router.navigate(['']);
      });
      
  }
  loginsubmit(loginform){
    // console.log(loginform.value,"login value in service")
    this.http.post('http://localhost:3000/login',loginform.value).subscribe((data: any ) => {
    console.log(data.Pic);
    localStorage.setItem('imagelocal', data.Pic);
    console.log(data.token);

    if(data.status == 'successfully logged'){
      this.router.navigate(['/home'],{queryParams: {value:data.Pic}});
    
      console.log(data.token);
      localStorage.setItem("tkn",data.token);
    }
    else if(data.status == 'error in passwor4200/usertabled'){
      this.router.navigate(['/'],{queryParams: {value:"error in password"}});
    }
    else if(data.status == 'invalid email address'){
      this.router.navigate(['/'],{queryParams: {value:"invalid email address"}});
    }
    else if(data.status == 'error in  email or password'){
      this.router.navigate([''],{queryParams: {value:"error in  email or password"}});
    }


    // if(data1.status1){
    // this.router.navigate(['/home']);
    // }
    // else{
    //   this.router.navigate(['']);
    // }
    });
  }
  getToken() {
    return localStorage.getItem("tkn")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }

  deleteData(id){
    this.http.post('http://localhost:3000/delete',{id:id}).subscribe((data: any ) => {
  });
  }
  
  searchs(srch){
    return this.http.get(this.baseUrl+'search/'+srch)
  }
  getusers(){
   return this.http.get(this.baseUrl+'getusers')    
  }
  
}
