import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.component.html',
  styleUrls: ['./login.component.component.css']
})
export class LoginComponentComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    if (!this.loginForm) {
      console.error('Error: el formulario no se ha inicializado');
    }
  }
  base = environment.baseUrl;

  onSubmit() {
    const passwordControl = this.loginForm.get('password');
    const emailControl = this.loginForm.get('email');
  
    if (passwordControl! && emailControl! ) {
      const credentials = {
        email: 'yiserret@misena.edu.co',
        password: 'yamir',
      };
      console.log(credentials);
      this.http.post(`${this.base}login`, credentials).subscribe(
        (response) => {
          // Manejar la respuesta del backend aquí
          console.log(response);
        },
        (error) => {
          // Manejar el error aquí
          console.log(error);
        }
      );
    } else {
      console.error('Error: el formulario o los controles no se han inicializado');
    }
  }
    

    
}


