import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Japan'},
    {id: 3, name: 'Korea'},
    {id: 4, name: 'USA'},
    {id: 5, name: 'Others'}
  ];

  registerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        passwordGroup: new FormGroup(
          {
            firstPassword: new FormControl('', Validators.minLength(4)),
            secondPassword: new FormControl('', Validators.minLength(4)),
          }, {validators: this.checkPassword}
        ),
        email: new FormControl('', [Validators.required, Validators.email]),
        country: new FormControl('Select Country', Validators.required),
        gender: new FormControl('', Validators.required),
        age: new FormControl('', this.checkAge),
        phone: new FormControl('', [Validators.required, Validators.pattern('^[+]84[0-9]{9,10}$')])
      }
    );
  }


  checkAge(abstractControl: AbstractControl): any {
    const formYear = abstractControl.value.substr(3, 4);
    const curYear = new Date().getFullYear();
    return curYear - formYear > 18 ? null : {isValidAge: true};
  }

  checkPassword(abstractControl: AbstractControl): any {
    console.log(abstractControl.value
    );
    const v = abstractControl.value;
    return (v.firstPassword === v.secondPassword) ? null : {passwordnotmatch: true};
  }
}
