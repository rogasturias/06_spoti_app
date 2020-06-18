import { Component,  Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) {

   }

verArtista(item: any){
let id: string;
if (item.type === 'artist'){
  id = item.id;
}else{
  id = item.artists[0].id;
}
this.router.navigate(['/artista/', id]);
}
verArtistaId( id: string){
   this.router.navigate(['/artista/', id]);
}


}
