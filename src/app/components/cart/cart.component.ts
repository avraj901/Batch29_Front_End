import { Component, OnInit } from '@angular/core';
import Books from 'src/app/entity/Books';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books : Books[] =[];
  public grandTotal !: number;
  constructor(private bookService : BookService, private cartService : CartService) { }

  ngOnInit(): void {
   // this.getAllBooks();
    this.cartService.getProducts().subscribe(response => {
      this.books = response;
      this.grandTotal =this.cartService.getTotalPrice();
    })
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(response => {
      this.books = response;
      console.log("response", response);
    }, error => {
      console.log("error while fetching data. ")
    });
  }
  removeBook(book:any){
    this.cartService.removeCartItem(book);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
 
}
