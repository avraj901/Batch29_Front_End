import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchbooksComponent } from './components/searchbooks/searchbooks.component';
import { CreatebooksComponent } from './components/createbooks/createbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditbooksComponent } from './components/editbooks/editbooks.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbooksComponent,
    CreatebooksComponent,
    GetAllBooksComponent,
    UserDetailsComponent,
    BooksComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    EditbooksComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
