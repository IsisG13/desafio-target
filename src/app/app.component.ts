import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SomaComponent } from './soma/soma.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { FaturamentoEstadoComponent } from './faturamento-estado/faturamento-estado.component';
import { InverterStringComponent } from './inverter-string/inverter-string.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SomaComponent,
    FibonacciComponent,
    FaturamentoComponent,
    FaturamentoEstadoComponent,
    InverterStringComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Desafio-Target';
}
