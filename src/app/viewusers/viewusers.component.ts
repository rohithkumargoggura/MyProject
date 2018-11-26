import { Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input,OnInit } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { Router } from "@angular/router";
import {ViewUsers} from "../services/viewusers.service";
import {UpdateService} from "../services/update.service";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
@Component({
  selector: 'view-users',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ListUsers {

  // constructor() { }

  constructor(private viewuserservice:ViewUsers,private http:HttpClient,private router: Router,private update:UpdateService) {
   http.get('http://localhost:3000/').map(res =>{
     console.log("in route");
   });
  }
  Users: [{
    name:string,
    email: string,
    mobile: number,
 }];

ngOnInit(){
  console.log("in ts");
    this.viewuserservice.getUsers().subscribe(
      (data: any) =>{
        console.log(data);
        this.Users = data;
        console.log(this.Users);
      })
 }

 updateUser(user){
   console.log("Updateuser ",user);
  this.update.updateUser(user);
  this.router.navigate(["update"]);
 }
 deleteUser(email: string){
   console.log("Delete ",email);
  this.viewuserservice.deleteUser(email).subscribe((res)=>{
    console.log(res);
 })
}
 
}

