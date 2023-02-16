import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  sendMessage(data:any):Observable<any> {
    const url = "https://script.google.com/macros/s/AKfycbxSYP0ug4j89qY8QIO1gtB9GwA1AwiAZZW4SrJRfjHsuVKV22thB8cDq9yp7yqS0QKP/exec";
    const headers = {'content-type':'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': ['POST', 'GET']}
    return this.http.post(url, data);
  }

}
