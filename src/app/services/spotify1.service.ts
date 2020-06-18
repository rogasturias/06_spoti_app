import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Spotify1Service {
  constructor(private http: HttpClient) {
  console.log('servicio spotify listo');
     }

  getQuery( query: string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBdIY35PV5vfMKyS8QhaPXJ_3UJhLcqFRR7AW_YVSTWErSEyiI6XcnLsUk0-_FW5xLk5-w6pn6GnoM-CVQ'});
    return  this.http.get(URL , {headers});
  }

  getNovedades() {
   const query = 'browse/new-releases';
   return this.getQuery(query)
    .pipe (
        map( (data: any) => data.albums.items
        )
    );
  }
  getArtista(id: string) {
    const query = `artists/${id}`;
    return this.getQuery(query);
   }

   getArtistaTopTrack(id: string) {
    const query = `artists/${id}/top-tracks?country=us`;
    return this.getQuery(query)
     .pipe (
         map( (data: any) => data.tracks
         )
     );
   }

  getBusqueda(dato: string){
   const query = `search?q=${dato}&type=artist`;
   return this.getQuery(query)
    .pipe(
        map ( (data: any) => {
          return data.artists.items;
        })
    );
  }

}
