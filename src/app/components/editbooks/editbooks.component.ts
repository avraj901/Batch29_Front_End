import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Books from 'src/app/entity/Books';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-editbooks',
  templateUrl: './editbooks.component.html',
  styleUrls: ['./editbooks.component.css']
})
export class EditbooksComponent implements OnInit {

  book: Books = new Books();
  bookList: Books[] = [];
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.bookService.getAllUnBlockBooks().subscribe(response => {
      this.bookList = response;
      console.log("response", response);
    }, err => {
      console.log("error while fetching data. ")
    })
  }
  editBooks(id: number) {
    this.bookService.getBookById(id).subscribe(response => {
      this.book = response;
      console.log("response", response);
    }, error => console.log(error))
  }
  blockBook(id: number) {
    this.bookService.blockABook(id, true).subscribe(response => {
      if (response === 1) {
        alert("Book blocked successfully..!")
        this.getAllBooks();
      } else {
        alert("Something went wrong..!")
      }
      console.log("response", response);
    }, error => console.log(error))
  }
  updateBook(book: Books, id: number) {
    this.bookService.updateBook(book, id).subscribe(data => {
      console.log(data);
      this.getAllBooks();
      alert("Book daetails updated successfully");
    }, error => console.log(error));
  }
}
