import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input('msnRec') public mensagemRecebida: string = "";
}
