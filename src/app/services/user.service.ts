import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	
	//http: any;

	constructor(private http : HttpClient) {
		//this.http = http;
	}
	public msg;

	addUser(data) {
		
        let headers = new HttpHeaders({ "content-type": "application/json", });
    	headers.append('access_token', "abcd");
    	//let options = new RequestOptions({headers:headers})
		return this.http.post('http://localhost:3000/adduser',data,{headers: headers})
			.map(res =>
			{
				return res;
			}
			);
		
	}
 }

