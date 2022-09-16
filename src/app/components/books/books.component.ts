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

  books : Books[] =[];
  constructor(private bookService : BookService, private cartService : CartService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(response => {
      this.books = response;
      console.log("response", response);
      this.books.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    }, error => {
      console.log("error while fetching data. ")
    });
  }
  addToCart(book : any){
    this.cartService.addtoCart(book);
  }

}
