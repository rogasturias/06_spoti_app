import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-error',
  templateUrl: './mensaje-error.component.html'
})

export class MensajeErrorComponent  {
@Input() mensaje: string;
  constructor() { }

}
