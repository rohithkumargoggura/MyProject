import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UserStories {
	
	//http: any;

	constructor(private http : HttpClient) {
		//this.http = http;
	}
	public msg;

	addUserStory(data) {
		console.log("in service" , data);
        let headers = new HttpHeaders({ "content-type": "application/json", });
    	headers.append('access_token', "abcd");
    	//let options = new RequestOptions({headers:headers})
		return this.http.post('http://localhost:3000/adduserStory',data,{headers: headers})
			.map(res =>
			{
				return res;
			}
			);
		
    }
    getUsers(){
        //using get request

        return this.http.get('http://localhost:3000/getUserStories')
        .map((res) => {return res});
 
}
addStory(data) {
	console.log("in service" , data);
	let headers = new HttpHeaders({ "content-type": "application/json", });
	headers.append('access_token', "abcd");
	//let options = new RequestOptions({headers:headers})
	return this.http.post('http://localhost:3000/addStory',data,{headers: headers})
		.map(res =>
		{
			return res;
		}
		);
	
}
getStories(){
	return this.http.get('http://localhost:3000/getStories')
	.map((res) => {return res});


 }
 getComment(){
	return this.http.get('http://localhost:3000/getComment')
	.map((res) => {return res});


 }
}
