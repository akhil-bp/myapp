import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): boolean {   
    const token = localStorage.getItem('tkn');   
    const tokenPayload = decode(token);
    //console.log(tokenPayload);
    if ( tokenPayload.role === 1 ) {
      this.router.navigate(['pagenotfound']);
      return false;
    }
    return true;
  }
}

