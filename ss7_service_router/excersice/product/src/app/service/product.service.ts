import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL_API = 'http://localhost:3000/product';

  products: Product[];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_API);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.URL_API, product);
  }

  updateProduct(id: number, product): Observable<Product> {
    // console.log(product);
    return this.http.patch<Product>(this.URL_API + '/' + id, product);
  }

  findById(productId: number): Observable<Product> {
    return this.http.get<Product>(this.URL_API + '/' + productId);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.URL_API + '/' + id);
  }
}
