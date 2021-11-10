import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProductosComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
