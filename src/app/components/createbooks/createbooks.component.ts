import { Component, OnInit } from '@angular/core';
import Books from 'src/app/entity/Books';
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-createbooks',
  templateUrl: './createbooks.component.html',
  styleUrls: ['./createbooks.component.css']
})
export class CreatebooksComponent implements OnInit {

  books: Books = new Books();

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
  }
  save() {
    const observable = this.bookService.createBook(this.books);
    observable.subscribe((response: any) => {
      console.log(response);
      alert("Successfully added book in Book Records");
    },
      function (error) {
        console.log(error);
        alert("Something went wrong please try again");
      }
    )
    console.log(this.books.title, this.books.category, this.books.image, this.books.publisher, this.books.active, this.books.content);
    }
}
