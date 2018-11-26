import { Component, ElementRef, ViewChild } from "@angular/core";
import * as c3 from 'c3';
import {Stories} from './story';

import {UserStories} from "../../services/userstories.service";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'

@Component({
    selector: 'bars1',
    // styleUrls: ['./bars.component.scss'],
    templateUrl: './bars2.component.html'
})

export class Bars1 {

    count;
    public Defined: number = 0;
    public inProgree: number = 0;
    public Completed: number = 0;
    public Data: any;
    model = new Stories('','',''); 
    submitted = false;
    onSubmit() { this.submitted = true; }

    constructor(private userservice:UserStories,private http:HttpClient) {
        http.get('http://localhost:3000/').map(res =>{
          console.log("in route");
         
        });
       }
    ngOnInit(){

        console.log("model ",this.model);
        
        
        // setTimeout(function () {
        //     chart.load({
        //         columns: [
        //             ["Defined",3],
        //             ["Progress", 2],
        //             ["Completed", 5],
        //         ]
        //     });
        // }, 1500);
        
        // setTimeout(function () {
        //     chart.unload({
        //         ids: 'data1'
        //     });
        //     chart.unload({
        //         ids: 'data2'
        //     });
        // }, 2500);

        c3.generate({
            data: {
                columns: [
                    ["Defined",0],
                    ["Progress", 0],
                    ["Completed", 0],
                ],
                type : 'donut'}
            });

        this.userservice.getUsers().subscribe(
            (data: any) =>{
              console.log(data);
              this.count = data;
              console.log("count",this.count);
              this.count.forEach(element => {
                  if(element.name === "defined"){
                      this.Defined = element.count;
                  }
                  else if(element.name === "inprogress"){
                       this.inProgree = element.count;
                  }
                  else if(element.name === "completed"){
                      this.Completed = element.count;
                  }
                  else{}
                  console.log("Invidual values ",this.Defined , this.inProgree , this.Completed);
              });
              c3.generate({
                data: {
                    columns: [
                        ["Defined",this.Defined],
                        ["Progress", this.inProgree],
                        ["Completed", this.Completed],
                    ],
                    type : 'donut',
                    onclick: function (d, i) {
                        //  console.log("onclick", d, i); 
                        },
                    onmouseover: function (d, i) {
                         console.log("onmouseover", d, i); 
                        },
                    onmouseout: function (d, i) {
                        //  console.log("onmouseout", d, i); 
                        }
                },
                donut: {
                    title: "Stories"
                }
            });
            console.log("Invidual values chrererer", this.Defined , this.inProgree , this.Completed);              
            

            })
       
                    
    }   
    
    sendMessage() {
        alert("in fun")
        console.log(this.model);
        this.userservice.addUserStory(this.model).subscribe((res:any)=>{
          console.log(res);
        //   console.log(res.message);
        //   if(res.message=="Email Already exist"){
        //     console.log(res.message);
        //     this.msg = res.message;
        //   }
        })
        // console.log(this.msg);
     }
}