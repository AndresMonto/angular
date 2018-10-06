import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

import { AppRoutingModule } from './app-routing.module';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { UnaEstrellaComponent } from './hoteles/una-estrella/una-estrella.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    AcercaDeComponent,
    DetallesComponent,
    ContactoComponent,
    UnaEstrellaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
