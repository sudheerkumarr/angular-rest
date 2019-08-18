import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = new FormGroup({
    username : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    confirm_password : new FormControl('')
  });

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {}

  onSubmit(): void {
    this.apiService.registerUser(this.registerForm.value).subscribe(
      data => {
        // returns user details
        console.log(data);
        this.router.navigate(['/login']);
      },
      error => console.log(error),
    );
  }
}


