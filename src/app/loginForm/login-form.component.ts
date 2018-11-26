import { Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input,OnInit } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { User }    from './user';
//import { HttpClientModule } from '@angular/common/http';
// import { Router } from "@angular/router";
import {UserService} from "../services/user.service";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  // constructor() { }

  constructor(private userservice:UserService,private http:HttpClient) {
   http.get('http://localhost:3000/').map(res =>{
     console.log("in route");
    
   });
  }
  getUser(){
  //  alert("user clicked");
    return this.http.get('http://localhost:3000/')
  }
  clickme(){
    this.getUser().subscribe(res=>{
      console.log(res);
    })
  }
ngOninit(){
  // alert("comp started");
  // this.http.get('http://localhost:3000/').map(res =>{
  //    console.log("in route");
  //  });
 
}
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new User('','',null,'','');

  submitted = false;
  onSubmit() { this.submitted = true; }
  newHero() {
   // this.model = new User('','');

   
  }
  msg
  sendMessage() {
    alert("in fun")
    console.log(this.model);
    this.userservice.addUser(this.model).subscribe((res:any)=>{
      console.log(res);
      console.log(res.message);
      if(res.message=="Email Already exist"){
        console.log(res.message);
        this.msg = res.message;
      }
    })
    console.log(this.msg);
 }
}