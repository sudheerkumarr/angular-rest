import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService} from '../api.service';
import { CookieService } from 'ngx-cookie-service';

interface TokenObj {
  token: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    // console.log(this.loginForm.value);
    this.apiService.loginUser(this.loginForm.value).subscribe(
      (data: TokenObj) => {
        // On successful authentication user gets token
        // console.log(data);
        // store token using cookie service
        this.cookieService.set('usr_token', data.token);
        this.router.navigate(['/plans']);
      },
     error => console.log(error)
    );
  }
}
