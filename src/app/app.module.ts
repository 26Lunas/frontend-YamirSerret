import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { ListDriversComponent } from './componets-drivers/list-drivers/list-drivers.component';
import { AddDriversComponent } from './componets-drivers/add-drivers/add-drivers.component';
import { EditDriversComponent } from './componets-drivers/edit-drivers/edit-drivers.component';
import { LoginComponentComponent } from './login.component/login.component.component';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListDriversComponent,
    AddDriversComponent,
    EditDriversComponent,
    LoginComponentComponent,
    NavbarPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
