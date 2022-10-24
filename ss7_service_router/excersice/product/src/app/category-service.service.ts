import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  API_URL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.API_URL, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(this.API_URL + '/' + id);
  }

  updateCategory(category: Category, id: number): Observable<void> {
    return this.http.patch<void>(this.API_URL + '/' + id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete(this.API_URL + '/' + id);
  }
}
