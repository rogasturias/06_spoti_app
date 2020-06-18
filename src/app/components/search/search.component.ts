import { Component } from '@angular/core';
import { Spotify1Service } from '../../services/spotify1.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {
  public busqueda: any [] = [];
  public cargando = true;
  flagError: boolean;
  mensajeError: string;

  constructor(private spotify1Service: Spotify1Service) {
  }

  buscar(buscado: string) {
  this.spotify1Service.getBusqueda(buscado).subscribe( (resp: any) => {
  this.flagError = false;
  this.busqueda = resp;
  this.cargando = false;
  }, (errorServicio) => {
    console.error(errorServicio);
    this.flagError = true;
    this.mensajeError = errorServicio.error.error.message;
    });
  }

}
