import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNulo'
})
export class PipeNuloPipe implements PipeTransform {

  transform(images: any[] ): string {
    let img = 'assets/img/FOTO_ROBERTO.JPG';
    if (images && images[0]){
    img = images[0].url;
    }
    return img;
  }

}
