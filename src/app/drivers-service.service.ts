import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './models/driver.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DriversServiceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDriver(id: number): Observable<Driver> {
    const url = `${this.baseUrl}drivers/${id}`;
    return this.http.get<Driver>(url);
  }

  updateDriver(driver: Driver): Observable<any> {
    const url = `${this.baseUrl}drivers/${driver.id}`;
    return this.http.put(url, driver);
  }
}
