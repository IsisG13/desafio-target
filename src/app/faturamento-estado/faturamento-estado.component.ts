import { Component } from '@angular/core';  
import { CommonModule } from '@angular/common'; // Importando CommonModule  

interface Estado {  
  sigla: string;  
  faturamento: number;  
}  

@Component({  
  selector: 'app-faturamento-estado',  
  standalone: true, // Marcar como standalone  
  imports: [CommonModule], // Aqui é onde você adiciona o CommonModule  
  templateUrl: './faturamento-estado.component.html',  
  styleUrls: ['./faturamento-estado.component.css']  
})  
export class FaturamentoEstadoComponent {  
  estados: Estado[] = [  
    { sigla: 'SP', faturamento: 67836.43 },  
    { sigla: 'RJ', faturamento: 36678.66 },  
    { sigla: 'MG', faturamento: 29229.88 },  
    { sigla: 'ES', faturamento: 27165.48 },  
    { sigla: 'Outros', faturamento: 19849.53 }  
  ];  

  totalFaturamento: number = 0;  
  faturamentosComPercentuais: { sigla: string; faturamento: number; percentual: string }[] = [];  

  constructor() {  
    this.calcularTotalFaturamento();  
    this.calcularPercentuais();  
  }  

  calcularTotalFaturamento() {  
    this.totalFaturamento = this.estados.reduce((total, estado) => total + estado.faturamento, 0);  
  }  

  calcularPercentuais() {  
    this.faturamentosComPercentuais = this.estados.map(estado => ({  
      sigla: estado.sigla,  
      faturamento: estado.faturamento,  
      percentual: ((estado.faturamento / this.totalFaturamento) * 100).toFixed(2)  
    }));  
  }  
}