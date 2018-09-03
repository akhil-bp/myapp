import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  p: number = 1;
  users: any;
  id: any;
  name: String = "";
  srch: any;
  srch_length: any;
  Items: any;
  srch_res: any;
  constructor(private registerService: RegisterService,
    public httpClient: HttpClient, private myroute: Router) { }

  ngOnInit() {
    this.getdata();

  }

  getdata() {
    this.httpClient.get('http://localhost:3000/usertable')
      .subscribe((data: any) => {
        this.users = data.response;
        console.log(this.users, "got");
      })

  };

  delete(data) {
    if (confirm("are you sure to delete this?")) {

      window.location.reload(true);
      this.id = data._id;
      console.log(this.id);
      this.registerService.deleteData(this.id);
    }

  }

  edit(data) {
    this.id = data._id;
    // console.log(this.id,"kjkjik");
    // this.myroute.navigate(['edit'],{queryParams: {id:this.id}});
    this.myroute.navigate(['edit', this.id]);
  }

  /**
   * db search
   * @param $event 
   */
  msg2($event) {
    this.srch = $event.target.value;
    this.srch_length = this.srch.length;
    if (this.srch_length >= 1) {
      this.registerService.searchs(this.srch)
        .subscribe((val: any) => {
          this.users = val.res;
          console.log(this.users)
          if (this.users.length === 0) {
            this.srch_res = true;
          } else {
            this.srch_res = false;
          }
        })
    } else {
      this.registerService.getusers()
        .subscribe((val: any) => {
          this.users = val.datas;
          if (this.users.length === 0) {
            this.srch_res = true;
          } else {
            this.srch_res = false;
          }
        })
    }
  }

}
