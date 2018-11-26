import { Component, ElementRef, ViewChild } from "@angular/core";
import * as c3 from 'c3';
import * as d3 from 'd3';
import {HttpClient} from "@angular/common/http";
import {UserStories} from "../../services/userstories.service";
import 'rxjs/add/operator/map'

@Component({
    selector: 'comment',
    styleUrls: ['./comment.component.scss'],
    templateUrl: './comment.component.html'
})

export class CommentD {


    constructor(private userservice:UserStories,private http:HttpClient) {
        
       }
       public count;
       public Positive =1;
       public Negative =1;
       public Mixed =1;
       public Nutral =1;
       public Open =1;
       
    
    ngOnInit(){
            this.userservice.getComment().subscribe(
                (data: any) =>{
                  console.log(data);
                  this.count = data;
                  console.log("Data",this.count);
                  this.count.forEach(element => {
                      if(element.rating === "positive")
                      this.Positive = element.value;
                      else if(element.rating === "negative")
                      this.Negative = element.value;
                      else if(element.rating === "mixed")
                      this.Mixed = element.value;
                      else if(element.rating === "neutral")
                      this.Nutral = element.value;
                      else if(element.rating === "open")
                      this.Open = element.value;
                      else{}
                      console.log("values",this.Positive,this.Negative,this.Mixed,this.Nutral,this.Open);
                      c3.generate({
                          
                        data: {
                            columns: [
                                ["Positive",this.Positive],
                                ["Negative", this.Nutral],
                                ["Mixed", this.Negative],
                                ["Nutral", this.Mixed],
                                ["Open", this.Open]
                            ],
                            type : 'donut'
                            
                        },
                        legend: {
                            show: true,
                            position: 'inset',
                            inset: {
                                anchor: 'top-right',
                                x: 150,
                                y: 10,
                            }
                        },
                        donut: {
                            title: 'Comment',
                            expand: false,
                            
                          }
                          
                        });
                    });
                  });

       
           
       
                    
    }   
    
    
}