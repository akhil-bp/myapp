import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id": 1,"name":"akhil"},
      {"id": 2,"name":"akhil1"},
      {"id": 3,"name":"akhil2"},
      {"id": 4,"name":"akhil3"},
      {"id": 5,"name":"akhil4"}
    ];
  }

}
