import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  readAll():Observable<any>{
    return this.httpClient.get(baseURL);
  }
  read(id):Observable<any>{
    return this.httpClient.get(`${baseURL}/${id}`);

  }
  create(data):Observable<any>{
    return this.httpClient.post(baseURL,data);

  }
  delete(id):Observable<any>{
    return this.httpClient.delete(`${baseURL}/${id}`);

  }
  update(id,data):Observable<any>{
    return this.httpClient.put(`${baseURL}/${id}`,data);
  }
  deleteAll():Observable<any>{
    return this.httpClient.delete(baseURL);
  }
  searchByName(name):Observable<any>{
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}
