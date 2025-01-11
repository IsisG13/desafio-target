import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  imports: [],
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css',
})
export class SomaComponent {
  indice: number = 13;
  soma: number = 0;

  calcularSoma() {
    this.soma = 0; // Reseta a soma antes de calcular
    for (let k = 1; k <= this.indice; k++) {
      this.soma += k;
    }
  }
}
