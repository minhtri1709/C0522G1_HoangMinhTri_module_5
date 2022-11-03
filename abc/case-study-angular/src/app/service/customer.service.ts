import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_CUSTOMER = 'http://localhost:3000/customerList';


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_CUSTOMER);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_CUSTOMER + '/' + id);
  }

  updateById(customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_CUSTOMER + '/' + customer.id, customer);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_CUSTOMER + '/' + id);
  }

  searchByName(name: string): Observable<Customer[]> {
    name.toLowerCase();
    alert(name);
    return this.httpClient.get<Customer[]>(this.API_CUSTOMER + '?customerName_like=' + name);
  }
}
