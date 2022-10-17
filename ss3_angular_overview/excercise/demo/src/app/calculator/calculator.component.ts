import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  // updateValue1(newValue: number) {
  //   this.number1 = newValue;
  // }
  //
  // updateValue2(newValue: number) {
  //   this.number2 = newValue;
  // }

  calculation(option: string) {
    switch (option) {
      case 'Add':
        return this.result = Number(this.number1) + Number(this.number2);
        break;
      case 'Minus':
        return this.result = Number(this.number1) - Number(this.number2);
        break;
      case 'Mul':
        return this.result = Number(this.number1) * Number(this.number2);
        break;
      case 'Device':
        if (this.number2 === 0) {
          return this.result = 'Can not device for 0';
        } else {
          return this.result = (this.number1) / (this.number2);
        }
        break;
    }
  }
}
