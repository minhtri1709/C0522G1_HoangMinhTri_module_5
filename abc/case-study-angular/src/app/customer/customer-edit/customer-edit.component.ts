import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    customerName: new FormControl(''),
    customerDateOfBirth: new FormControl(''),
    customerGender: new FormControl(0),
    customerIdCard: new FormControl(0),
    customerPhoneNumber: new FormControl(''),
    customerEmail: new FormControl(''),
    customerAddress: new FormControl(''),
    customerType: new FormControl('')
  });

  constructor(private service: CustomerService,
              private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idCustomer = Number(this.active.snapshot.params.id);
    this.service.findById(idCustomer).subscribe(value => {
      this.customer = value;
      this.customerForm.patchValue(this.customer);
    });
  }


  updateCustomer() {
    this.customer = this.customerForm.value;
    this.service.updateById(this.customer).subscribe(value => {
      alert('oke');
    });
  }
}
