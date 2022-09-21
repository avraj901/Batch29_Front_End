import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/service/alert.service';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private bookService: BookService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.bookService.login(this.loginForm.value)
      .subscribe(
        data => {
          if (data) {
            alert("Login success..!");
            console.log(this.f.username.value, this.f.password.value);
            this.router.navigate(['books']);
          } else {
            alert("User Name or Password invalid..!");
            this.loading = false;
          }
        },
        error => {
          console.log(this.f.username.value, this.f.password.value);
          this.loading = false;
          alert("Something went wrong..!");
          this.alertService.error(error);

        });
  }
}
