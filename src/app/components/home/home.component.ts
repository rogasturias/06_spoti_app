import { Component, OnInit } from '@angular/core';
import { Spotify1Service } from '../../services/spotify1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  novedades: any [] = [];
  public cargando = true;
  flagError: boolean;
  mensajeError: string;

  constructor(private spotify1Service: Spotify1Service) {
     this.spotify1Service.getNovedades().subscribe( (resp: any) => {
       this.novedades = resp;
       this.cargando = false;
       this.flagError = false;
    }, (errorServicio) => {
      console.error(errorServicio);
      this.flagError = true;
      this.mensajeError = errorServicio.error.error.message;
      });


   }



}
