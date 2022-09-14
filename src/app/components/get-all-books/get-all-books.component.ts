import { Component, OnInit } from '@angular/core';
import Books from 'src/app/entity/Books';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.css']
})
export class GetAllBooksComponent implements OnInit {

  books : Books[] =[];
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(response => {
      this.books = response;
      console.log("response", response);
    }, error => {
      console.log("error while fetching data. ")
    });
  }

  deleteBook(id : number){
    this.bookService.deleteBook(id).subscribe(response => {
      console.log(response);
      this.getAllBooks();
    }, error => (console.log(error)))
  }
}
