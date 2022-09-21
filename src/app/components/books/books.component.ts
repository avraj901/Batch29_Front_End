import { Component, OnInit } from '@angular/core';
import Books from 'src/app/entity/Books';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList: Books[] = [];
  searchText: any;
  constructor(private bookService: BookService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllUnBlockBooks().subscribe(response => {
      this.bookList = response;
      console.log("response", response);
      this.bookList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      })
    }, error => {
      console.log("error while fetching data. ")
    });
  }
  addToCart(book: any) {
    this.cartService.addtoCart(book);
  }

}
