import { Component } from '@angular/core';

@Component({
  selector: 'app-inverter-string',
  templateUrl: './inverter-string.component.html',
  styleUrls: ['./inverter-string.component.css'],
})
export class InverterStringComponent {
  originalString: string = 'Essa é a última parte do desafio para a empresa Target!'; // String para ser invertida
  invertedString: string = '';

  // Método para inverter a string
  inverter() {
    this.invertedString = ''; // Reinicia a string invertida
    for (let i = this.originalString.length - 1; i >= 0; i--) {
      this.invertedString += this.originalString[i]; // Concatena cada caractere na ordem inversa
    }
  }
}
