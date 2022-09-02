import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = "http://localhost:8082/saveauthor";

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(public http : HttpClient) { }

  createUser(user: { title: string; category: string; image: string , price: number, publisher: string,active:boolean,content:string}) {
    return this.http.post(BASE_URL, user);
  }
}
