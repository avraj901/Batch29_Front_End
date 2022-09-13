import { Component, OnInit } from '@angular/core';
import Books from 'src/app/entity/Books';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {

 
  constructor(public bookService : BookserviceService) { }

  ngOnInit(): void {
  }
 

}
