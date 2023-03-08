import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'frontend';
  usuarios: any;
  constructor(private authService: AuthService){

  }
   
  ngOnInit(): void {
    this.authService.getUser().subscribe((data:any) =>{
      this.usuarios = data;
      // console.log(this.usuarios);
    })
  }
}

