import { Component, OnInit } from '@angular/core';
import { DriversServiceService } from 'src/app/drivers-service.service'; 
import { Driver } from 'src/app/models/driver.model';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-drivers',
  templateUrl: './edit-drivers.component.html',
  styleUrls: ['./edit-drivers.component.css']
})
export class EditDriversComponent implements OnInit {
  driver?: Driver = undefined;

  constructor(
    private driversService: DriversServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el controlador a editar desde la API
    const id = this.activatedRoute.snapshot.params['id'];
    this.driversService.getDriver(id).subscribe(
      (response: Driver) => {
        this.driver = response;
        console.log(this.driver);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    if (this.driver) {
      this.driversService.updateDriver(this.driver).subscribe(() => {
        // do something
      });
    }
  }
  
}
