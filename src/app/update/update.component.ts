import { Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input,OnInit } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';

//import { HttpClientModule } from '@angular/common/http';
// import { Router } from "@angular/router";
import {UserService} from "../services/user.service";
import {UpdateService} from "../services/update.service";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
@Component({
  selector: 'update-user',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateUser {

  constructor(private userservice:UserService,private http:HttpClient,private update:UpdateService) {
   http.get('http://localhost:3000/').map(res =>{
     console.log("in route");
    
   });
  }
 
    uname:any;
    uemail: any;
    umobile: number;   

ngOnInit(){
 this.getUser();
}
  submitted = false;
  onSubmit() { this.submitted = true; }
  getUser(){
    this.uname = this.update.getName();
    this.uemail = this.update.getGmail();
    console.log("Email",this.uemail);
    this.umobile = this.update.getMobile();
  }

  sendMessage() {
     alert("in fun")
      console.log(this.uname,this.uemail,this.umobile);
     this.update.update(this.uname,this.uemail,this.umobile).subscribe((res)=>{
     console.log(res);
    })
 }
  
}