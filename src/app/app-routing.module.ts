import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent} from './componentes/productos/productos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';

const routes: Routes = [
  {path: "home", redirectTo: ""},
  {path: "producto", component: ProductosComponent, pathMatch:"full"},
  {path: "login", component: LoginComponent, pathMatch:"full"},
  {path: "registrarse", component: RegistrarComponent, pathMatch:"full"},
  {path: "**", redirectTo: '/404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }