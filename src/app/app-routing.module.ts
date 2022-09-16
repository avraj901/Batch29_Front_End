import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { CreatebooksComponent } from './components/createbooks/createbooks.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { SearchbooksComponent } from './components/searchbooks/searchbooks.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch:'full'},
  { path: 'books', component: BooksComponent},
  { path: 'cart', component: CartComponent},
  { path: 'create', component: CreatebooksComponent },
  { path: "search", component: SearchbooksComponent },
  { path: "getAll", component: GetAllBooksComponent },
  { path: "user/:id", component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
