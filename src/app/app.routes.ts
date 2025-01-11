import { Routes } from '@angular/router';  
import { SomaComponent } from './soma/soma.component';  
import { FibonacciComponent } from './fibonacci/fibonacci.component';  

export const routes: Routes = [  
  { path: 'soma', component: SomaComponent },  
  { path: 'fibonacci', component: FibonacciComponent },  
  { path: '', redirectTo: '/fibonacci', pathMatch: 'full' }, // Redireciona para Fibonacci por padrão  
];