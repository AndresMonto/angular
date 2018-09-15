import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  btnIniciarSesion:string;
  btnInicio:string;
  btnHoteles:string;
  btnQuinesSomos:string;
  btnContacto:string;
  
  btnCategorias:Array<string>;
  
  constructor() { 
    this.btnIniciarSesion = "Iniciar Sesion";
    this.btnInicio = "Inicio";
    this.btnHoteles = "Hoteles";
    this.btnQuinesSomos = "¿Quiénes Somos?";
    this.btnContacto = "Contacto";
    
    this.btnCategorias = [
      "Una Estrella",
      "Dos Estrella",
      "Tres Estrella",
      "Cuatro Estrella",
      "Cinco Estrella"
      
      ];
  }

  ngOnInit() {
  }

}
