import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Saving} from './saving';
import {CustomerList} from './customerList';
import {environment} from '../environments/environment';
import {Pagination} from './pagination';

const API_URL = `${environment.URL_API}`;

@Injectable({
  providedIn: 'root'
})
export class SavingServiceService {


  constructor(private httpClient: HttpClient) {
  }

  deleteSaving(id: number): Observable<Saving> {
    return this.httpClient.delete<Saving>(API_URL + '/saving/' + id);
  }

  findAllCustomer(): Observable<CustomerList[]> {
    return this.httpClient.get<CustomerList[]>(API_URL + 'customerList');
  }

  findAllSaving(): Observable<Saving[]> {
    return this.httpClient.get<Saving[]>(API_URL + '/saving');
  }

  getById(id: number): Observable<Saving> {
    return this.httpClient.get<Saving>(API_URL + '/saving/' + id);
  }

  updateSaving(id: number, saving: Saving): Observable<Saving> {
    return this.httpClient.put<Saving>(API_URL + '/saving/' + id, saving);
  }

  findAllSavingSearch(): Observable<Pagination<Saving>> {
    return this.httpClient.get<Pagination<Saving>>(API_URL);
  }

  findSavingSearchPaging(numberRecord: number, curPage: number,
                         ): Observable<Pagination<Saving>> {
    console.log(API_URL + '/saving?page=' + curPage + '&size=' + numberRecord);
    return this.httpClient.get<Pagination<Saving>>(API_URL + '/saving?page=' + curPage + '&size=' + numberRecord );
  }
}
