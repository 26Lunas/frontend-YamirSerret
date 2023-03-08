import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent implements OnInit {
    baseUrl = environment.baseUrl;

    listDrivers: any;
    constructor(private http: HttpClient) { }
    ngOnInit(){
      return this.http.get(`${this.baseUrl}drivers`).subscribe((data:any) => {
        this.listDrivers = data;
        // console.log(this.listDrivers);
      });
    }
}
