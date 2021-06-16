import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  
  url='http://localhost:8080/products'

  constructor(private http :HttpClient) { }

  getEmployeData(){
    return this.http.get(this.url)
    
  }

}

