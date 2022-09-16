import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Books from '../entity/Books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  GetAllBooks_URL: string = "";
  Delete_Book_URL: string = "";
  Create_URL: string = "";
  constructor(public http: HttpClient) {
    this.GetAllBooks_URL = "http://localhost:8082/getallbooks"
    this.Delete_Book_URL = "http://localhost:8082/deletebook";
    this.Create_URL = "http://localhost:8082/savebook";
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
}

