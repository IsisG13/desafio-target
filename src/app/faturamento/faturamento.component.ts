// faturamento.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-faturamento',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit {
  estatisticas: { menor: number; maior: number; diasAcimaDaMedia: number } | null = null;
  carregando: boolean = true;
  erro: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/dados.json')
      .pipe(
        catchError(err => {
          console.error('Erro ao carregar o JSON:', err);
          this.erro = true;
          this.carregando = false;
          return of([]);
        })
      )
      .subscribe({
        next: (dados) => {
          if (dados.length > 0) {
            this.estatisticas = this.calcularEstatisticas(dados);
          }
          this.carregando = false;
        },
        error: (error) => {
          console.error('Erro:', error);
          this.erro = true;
          this.carregando = false;
        }
      });
  }

  calcularEstatisticas(dados: any[]): { menor: number; maior: number; diasAcimaDaMedia: number } {
    // Filtra dias sem faturamento (valor = 0)
    const valoresFaturamento = dados.filter(d => d.valor > 0).map(d => d.valor);
    
    // Calcula o menor valor
    const menor = Math.min(...valoresFaturamento);
    
    // Calcula o maior valor
    const maior = Math.max(...valoresFaturamento);
    
    // Calcula a média (ignorando dias sem faturamento)
    const media = valoresFaturamento.reduce((acc, val) => acc + val, 0) / valoresFaturamento.length;
    
    // Conta dias acima da média
    const diasAcimaDaMedia = valoresFaturamento.filter(valor => valor > media).length;

    return { menor, maior, diasAcimaDaMedia };
  }
}