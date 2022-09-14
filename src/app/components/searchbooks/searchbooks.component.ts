import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Books from 'src/app/entity/Books';
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {

  books: Books[] = [];

  constructor(public bookService: BookService, public router: Router) { }

  title = 'Book Details ';
  searchText: any;


  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(response => {
      this.books = response;
      console.log(response);
    }, error => console.log(error));
  }
  purchaseBook(id: number) {
    console.log("id", id);
    this.router.navigate(['user',id]);
  }

}
