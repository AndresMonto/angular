import {NgModule} from '@angular/core';
      import {Routes, RouterModule} from '@angular/router';


      import { InicioComponent } from './pages/inicio/inicio.component';
      import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
      import { ContactoComponent } from './pages/contacto/contacto.component';
      import { UnaEstrellaComponent } from './hoteles/una-estrella/una-estrella.component';

      const app_routes:Routes=[
          { path: 'home', component: InicioComponent },
          { path: 'about', component: AcercaDeComponent },
          { path: 'contact', component: ContactoComponent },
          { path: 'unaEstrella', component: UnaEstrellaComponent },
          { path: '**', pathMatch: 'full', redirectTo:'home' }
      ];


      @NgModule({
          
          imports:[
              RouterModule.forRoot(app_routes, {useHash:true} )
          ],
          exports:[
              RouterModule
          ]
          
      })

      export class AppRoutingModule{ }