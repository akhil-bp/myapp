

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';//npm install rxjs@6 rxjs-compat@6 --save
import { Router} from '@angular/router';
import { RegisterService } from './register.service';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private auth: RegisterService,
private myRoute: Router){
}
canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
if(this.auth.isLoggednIn()){
return true;
}else{
this.myRoute.navigate(['']);
return false;
}
}
}