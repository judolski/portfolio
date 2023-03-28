import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  sendMessage(data:any):Observable<any> {
    const url = environment.EmailUrl;
    const headers = {'content-type':'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': ['POST', 'GET']}
    return this.http.post(url, data);
  }

}
