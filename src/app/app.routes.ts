import { Routes } from '@angular/router';
import { SomaComponent } from './soma/soma.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { FaturamentoEstadoComponent } from './faturamento-estado/faturamento-estado.component';
import { InverterStringComponent } from './inverter-string/inverter-string.component';

export const routes: Routes = [
  { path: 'soma', component: SomaComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'faturamento', component: FaturamentoComponent },
  { path: 'faturamento-estado', component: FaturamentoEstadoComponent },
  { path: 'inverter-string', component: InverterStringComponent },
  { path: '', redirectTo: '/fibonacci', pathMatch: 'full' }, // Padrão
];
