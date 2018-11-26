import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UpdateService {
	
	//http: any;

	constructor(private http : HttpClient) {
		//this.http = http;
	}

        name:string;
        email: string;
        mobile: number;
    

	updateUser(data) {
        console.log('service data ' , data);
        this.name = data.name;
        this.email = data.email;
        this.mobile = data.mobile;
    }
    getName(){
        return this.name;
    }
    getGmail(){
        console.log("service mail",this.email);
        return this.email;
    }
    getMobile(){
        return this.mobile;
    }
    update(name,email,mobile){
        let headers = new HttpHeaders({ "content-type": "application/json", });
    	headers.append('access_token', "abcd");
    	//let options = new RequestOptions({headers:headers})
		return this.http.post('http://localhost:3000/updateuser',{name,email,mobile},{headers: headers})
			.map(res => res);
    }
 }
