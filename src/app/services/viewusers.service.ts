import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ViewUsers {
	
	//http: any;

	constructor(private http : HttpClient) {
		//this.http = http;
	}


	// addUser(data) {
  //       let headers = new HttpHeaders({ "content-type": "application/json", });
  //   headers.append('access_token', "abcd");
  //   //let options = new RequestOptions({headers:headers})
	// 	return this.http.post('http://localhost:3000/adduser',data,{headers: headers})
	// 		.map(res => res);
  //   }
    

  getUsers(){
         //using get request

         return this.http.get('http://localhost:3000/getUsers')
         .map((res) => {return res});
  
 }
updateUser(email:string){

}

deleteUser(email:string){
  console.log("Service delete ",email);
  let headers = new HttpHeaders({ "content-type": "application/json", });
    	headers.append('access_token', "abcd");
  return this.http.post('http://localhost:3000/deleteUsers',{"email":email},{headers: headers})
         .map((res) => {return res});

}

}
