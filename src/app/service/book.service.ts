import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Books from '../entity/Books';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  GetAllBooks_URL: string = "";
  Delete_Book_URL: string = "";
  Create_URL: string = "";
  Create_user_URL: string = "";
  Login_URL: string = "";
  GetBookbyId_URL: string="";
  UpdateBook_URL:string="";
  blockBook_URL: string ="";
  constructor(public http: HttpClient) {
    this.GetAllBooks_URL = "http://localhost:8082/getallbooks"
    this.Delete_Book_URL = "http://localhost:8082/deletebook";
    this.Create_URL = "http://localhost:8082/savebook";
    this.Create_user_URL = "http://localhost:8082/saveuser";
    this.Login_URL = "http://localhost:8082/login";
    this.GetBookbyId_URL = "http://localhost:8082/getbook";
    this.UpdateBook_URL = "http://localhost:8082/updatebook";
    this.blockBook_URL= "http://localhost:8082/blockbook";
  }

  // createBook(book: { title: string; category: string; image: string, price: number, publisher: string, active: boolean, content: string }) {
  //   return this.http.post(this.Create_URL, book);
  // }
  createBook(book: Books): Observable<Books> {
    return this.http.post<Books>(this.Create_URL, book);
  }

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.GetAllBooks_URL)
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.Delete_Book_URL}/${id}`, { responseType: 'text' });
  }

  register(user: User) {
    return this.http.post(this.Create_user_URL, user);
  }
  login(user: User) {
    return this.http.post<any>(this.Login_URL, user);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(`${this.GetBookbyId_URL}/${id}`);
  }

  updateBook(book: Books, id: number) {
    return this.http.put(`${this.UpdateBook_URL}/${id}`, book);
  }
  blockABook(id: number, block: boolean){
    return this.http.put(`${this.blockBook_URL}/${id}/${block}`,{});
  }
  getAllUnBlockBooks(): Observable<Books[]> {
    return this.http.get<Books[]>("http://localhost:8082/getunblockbooks");
  }
  getAllBlockBooks(): Observable<Books[]> {
    return this.http.get<Books[]>("http://localhost:8082/getblockbooks");
  }
}