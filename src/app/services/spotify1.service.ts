import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Spotify1Service { 
  URL1 = 'https://api.spotify.com/v1/browse/new-releases';
  headers: any;

  constructor(private http: HttpClient) {
  console.log('servicio spotify listo');
  this.headers = new HttpHeaders({
    Authorization: 'Bearer BQD_M6WYxBQEG4OUQ9MRP04Xjsss-rVhqd4ELDgXEJTaQ5xguBZPu9vJ1uii0SV9gq7k_uw57tHud_HIxg8'
  });
     }

  getNovedades() {
    const headers = this.headers;
    return this.http.get(this.URL1, {headers});
  }
}
