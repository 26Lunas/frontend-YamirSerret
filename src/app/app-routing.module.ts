
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListDriversComponent } from './componets-drivers/list-drivers/list-drivers.component';
import { LoginComponentComponent } from './login.component/login.component.component';
import { EditDriversComponent } from './componets-drivers/edit-drivers/edit-drivers.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'list-drivers'},
  {path:'list-drivers', component:ListDriversComponent},
  {path: 'edit-drivers/:id', component:EditDriversComponent},
  {path: 'login', component:LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
