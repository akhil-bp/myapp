import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  p: number = 1;
  users:any;
  id:any;
  name : String = "";
  constructor(private registerService: RegisterService,
    public httpClient:HttpClient ,private myroute: Router) { }

  ngOnInit() {
    this.getdata();

  }

  getdata(){   
    this.httpClient.get('http://localhost:3000/usertable')
    .subscribe( (data:any) => {
      this.users = data.response;
      console.log(this.users,"got");     
  })
    
};

delete(data){
  if(confirm("are you sure to delete this?")){
    
    window.location.reload(true);
    this.id=data._id;
    console.log(this.id);
    this.registerService.deleteData(this.id);
  }
  
}

edit(data){
  this.id=data._id;
  // console.log(this.id,"kjkjik");
  // this.myroute.navigate(['edit'],{queryParams: {id:this.id}});
  this.myroute.navigate(['edit',this.id]);
}

}
