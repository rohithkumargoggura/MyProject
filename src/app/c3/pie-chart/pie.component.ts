import { Component, ElementRef, ViewChild } from "@angular/core";
import {SelectItem} from 'primeng/api';
import {Values} from './values';
import * as c3 from 'c3';
import {UserStories} from "../../services/userstories.service";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
// import * as c3 from 'c3';cities: City[];
interface City {
    name: string;
    code: string;
  }
interface State{
    name: string;
    code: string;
}  
@Component({
    selector: 'bars12',
    // styleUrls: ['./bars.component.scss'],
    templateUrl: './pie.component.html'
})
export class MultiValue {
    cities: City[];
    state: State[];
    selectedCity: City;
    selectedState: State;
    Notes: string;
    Email: string;
    model = new Values('','','',''); 
    submitted = false;
    onSubmit() { this.submitted = true; }
    constructor(private userservice:UserStories,private http:HttpClient) {
        //SelectItem API with label-value pairs
        this.cities = [
            {name: 'Patient Experiance', code: 'PX'},
            {name: 'UAM', code: 'UAM'},
            {name: 'NES', code: 'NES'},
            {name: 'Query Tool', code: 'QT'}
        ];
        this.state = [
            {name: 'Defined', code: 'D'},
            {name: 'InProgress', code: 'I'},
            {name: 'Completed', code: 'C'}
        ];
    }
count;
    public Defined: number = 0;
    public inProgree: number = 0;
    public Completed: number = 0;
    public PxDefined: number = 0;
    public PxinProgree: number = 0;
    public PxCompleted: number = 0;
    public UAMDefined: number = 0;
    public UAMinProgree: number = 0;
    public UAMCompleted: number = 0;
    public NESDefined: number = 0;
    public NESinProgree: number = 0;
    public NESCompleted: number = 0;
    public QTDefined: number = 0;
    public QTinProgree: number = 0;
    public QTCompleted: number = 0;
    ngOnInit(){

        c3.generate({
            data: {
                columns: [
                    ["Defined",1],
                    ["Progress", 2],
                    ["Completed", 3],
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

        this.userservice.getStories().subscribe(
            (data: any) =>{
              console.log(data);
              this.count = data;
              console.log("count",this.count);
              });
    }

    sendMessage(){
        console.log("Values",this.selectedState.name,this.selectedCity.name,this.Notes,this.Email);
        let data = {
            application :this.selectedCity.name,
            state: this.selectedState.name,
            notes: this.Notes,
            email: this.Email
        }
        console.log(data);
        this.userservice.addStory(data).subscribe((res:any)=>{
          console.log(res);
        })
        // console.log(this.msg);
     }
     onChange(){
         console.log("OnChange  ",this.selectedCity,this.selectedState,this.count);
         this.count.forEach(element => {
        if(element.application === "Patient Experiance"){
            console.log("in PX" , this.count );
            if(element.state === "Defined"){
                this.PxDefined = element.count;
                console.log("in Defined" ,element.count );
            }
            else if(element.state === "InProgress"){
                this.PxinProgree = element.count;
            }
            else if (element.state === "Completed"){
                this.PxCompleted = element.count;
            }
            else{}
        }
        else if(element.application === "UAM"){
            console.log("in UAM");
            if(element.state === "Defined"){
                this.UAMDefined = element.count;

            }
            else if(element.state === "InProgress"){
                this.UAMinProgree = element.count;
            }
            else if (element.state === "Completed"){
                this.UAMCompleted = element.count;
            }
            else{}
        }
        else if(element.application === "NES"){
            console.log("in NES");
            if(element.state === "Defined"){
                this.NESDefined = element.count;
            }
            else if(element.state === "InProgress"){
                this.NESinProgree = element.count;
            }
            else if (element.state === "Completed"){
                this.NESCompleted = element.count;
            }
            else{}
        }
        else{
            if(element.state === "Defined"){
                this.QTDefined = element.count;
            }
            else if(element.state === "InProgress"){
                this.QTinProgree = element.count;
            }
            else if (element.state === "Completed"){
                this.QTCompleted = element.count;
            }
            else{}
        }
    });
        if(this.selectedCity.name === "Patient Experiance"){
        c3.generate({
            data: {
                columns: [
                    ["Defined",this.PxDefined],
                    ["Progress",this.PxinProgree],
                    ["Completed",this.PxCompleted],
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
        console.log("After filter ",this.selectedCity,this.selectedState,this.PxDefined,this.PxinProgree,this.PxCompleted);
    }
    else if(this.selectedCity.name === "UAM"){
        c3.generate({
            data: {
                columns: [
                    ["Defined",this.UAMDefined],
                    ["Progress",this.UAMinProgree],
                    ["Completed",this.UAMCompleted],
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
        console.log("After filter ",this.selectedCity,this.selectedState,this.UAMDefined,this.UAMinProgree,this.UAMCompleted);
    }
    else if(this.selectedCity.name === "NES"){
        c3.generate({
            data: {
                columns: [
                    ["Defined",this.NESDefined],
                    ["Progress",this.NESinProgree],
                    ["Completed",this.NESCompleted],
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
        console.log("After filter ",this.selectedCity,this.selectedState,this.NESDefined,this.NESinProgree,this.NESCompleted);
    }
    else{}
     }
    }


