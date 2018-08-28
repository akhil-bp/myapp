import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title = 'app';
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  editForm: FormGroup;
  public URL: any;
  public id: any;
  name: any;
  email: any;
  role: any;
  status: any;
  img: any;
  form: any;
  profilePicFile: any;

  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private rut: ActivatedRoute,
    private http: HttpClient) {
    this.editForm = this.formBuilder.group({
      'tname': ['', Validators.required],
      'trole': [''],
      'tstatus': [''],
      'temail': ['', [Validators.required]]//,Validators.pattern(this.emailPattern)
    });
  }
  //userName: new FormControl('', Validators.minLength(5)) 
  ngOnInit() {

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      // console.log('ImageUpload', item, status, response);
      console.log(response)//response is pure object formate
      alert('File uploaded successfully');
      let pic = JSON.parse(response);//response changes to json
      //console.log(picname);
      let imagedata = {id: this.id, picname: pic.picname,oldimage:this.img };
      console.log(imagedata)
      this.http.post('http://localhost:3000/picupload',imagedata)
      .subscribe((data: any) => {
      });

    };

    this.rut.queryParams.subscribe(
      params => {
        this.id = params.id;
        // console.log(this.id)
      });
    this.http.get('http://localhost:3000/edit/' + this.id)
      .subscribe((data: any) => {
        //console.log(data.usereditForm,"hiii");
        this.name = data.user.name;
        this.email = data.user.email;
        this.role = data.user.role;
        this.status = data.user.status;
        this.img = data.user.profilePicFile;
        //console.log(this.s,"kjkjkjk");

        //  submitted = false;
        //  submitted = false;gisterService.data);
      })





  }
  //submitted = false;
  edit(form) {
    let user = {
      id: this.id,
      name: form.value.name,
      email: form.value.email,
      role: form.value.role,
      status: form.value.status
    }
    console.log(user, "user value")

    this.http.post('http://localhost:3000/edit', user)
      .subscribe((data: any) => {
        this.router.navigate(['/usertable']);
        // console.log(data.fle);



      })
  }

}
