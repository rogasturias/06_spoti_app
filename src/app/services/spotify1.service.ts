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
      Authorization: 'Bearer BQB05OuQFbNZA-dfrxjHmTp3NJGAoYe3cMC-3bDF-e2S3a2cIvWiFu0vIKVDSNSV1CPavWCa3adxZ2C_sVk'});
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
