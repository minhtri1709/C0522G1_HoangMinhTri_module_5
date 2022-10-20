import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required])
    })
    ;
  }

}
