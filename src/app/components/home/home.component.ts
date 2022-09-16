import { Component, OnInit } from '@angular/core';
import Books from 'src/app/entity/Books';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Books = new Books();
  public totalItem : number = 0;
  constructor(public bookService: BookService,private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.totalItem = res.length;
    })
  }

  save() {
    const observable = this.bookService.createBook(this.books);
    observable.subscribe((response: any) => {
      console.log(response);
    },
      function (error) {
        console.log(error);
        alert("Something went wrong please try again");
      }
    )
    console.log(this.books.title, this.books.category, this.books.image, this.books.publisher, this.books.active, this.books.content);
    }

}
