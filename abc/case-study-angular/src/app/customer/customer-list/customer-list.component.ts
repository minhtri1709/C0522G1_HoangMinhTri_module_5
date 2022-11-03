import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[];
  idDelete: number;
  nameDelete: string;
  nameSearch = '';

  constructor(private service: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(value => {
      this.customerList = value;
    });
  }


  getInfoCustomer(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteCustomer() {
    this.service.deleteById(this.idDelete).subscribe();
    // this.router.navigateByUrl('customer');
    this.ngOnInit();
  }

  search() {
    this.service.searchByName(this.nameSearch).subscribe(value => {
      this.customerList = value;
    });
  }
}
