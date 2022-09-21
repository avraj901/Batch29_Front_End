import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { CreatebooksComponent } from './components/createbooks/createbooks.component';
import { EditbooksComponent } from './components/editbooks/editbooks.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchbooksComponent } from './components/searchbooks/searchbooks.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'books', component: BooksComponent},
  { path: 'cart', component: CartComponent},
  { path: 'create', component: CreatebooksComponent },
  { path: "search", component: SearchbooksComponent },
  { path: "getAll", component: GetAllBooksComponent },
  { path: "user/:id", component: UserDetailsComponent },
  { path: 'edit', component: EditbooksComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
