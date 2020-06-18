import { Component } from '@angular/core';
import { Spotify1Service } from '../../services/spotify1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent{
  public artista: any;
  public artistaTop: any;
  flagError: boolean;
  mensajeError: string;
  id: string;
  public cargando = true;
  constructor(private spotify1Service: Spotify1Service,
              private activatedRoute: ActivatedRoute) {
                  this.activatedRoute.params.subscribe(
                  params => {
                    this.id = params.id;
                    this.getArtista(this.id);
                    this.getArtistaTopTracks(this.id);
                  }
                ); }

  getArtista(id: string){
    this.spotify1Service.getArtista(id).subscribe(
      (data: any) => {
        this.artista = data;
        this.cargando = false;
        this.flagError = false;
      }, (errorServicio) =>{
          console.error(errorServicio);
          this.flagError = true;
          this.mensajeError = errorServicio.error.error.message;

      }
    );
  }
  getArtistaTopTracks(id: string){
    this.spotify1Service.getArtistaTopTrack(id).subscribe(
      (data: any) => {
        this.artistaTop = data;
        this.cargando = false;
        this.flagError = false;
      }, (errorServicio) => {
      console.error(errorServicio);
      this.flagError = true;
      this.mensajeError = errorServicio.error.error.message;
      }
    );
  }
}
