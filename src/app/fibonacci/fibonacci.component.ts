import { Component } from '@angular/core';  
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; // Importando o CommonModule  

@Component({  
  selector: 'app-fibonacci',  
  standalone: true,  
  imports: [FormsModule, CommonModule], // Incluindo o CommonModule aqui  
  templateUrl: './fibonacci.component.html',  
  styleUrls: ['./fibonacci.component.css']  
})  
export class FibonacciComponent {  
  numeroInput: number = 0; // Número que o usuário irá inserir  
  pertence: boolean | null = null; // Resultado que indica se pertence ou não  
  fibonacciSequence: number[] = []; // Sequência calculada  

  calcularFibonacci() {  
    this.fibonacciSequence = this.gerarFibonacci(this.numeroInput);  
    this.pertence = this.verificarFibonacci(this.numeroInput);  
  }  

  private gerarFibonacci(num: number): number[] {  
    const sequence = [0, 1];  
    
    while (sequence[sequence.length - 1] < num) {  
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);  
    }  

    return sequence.filter(n => n <= num); // Retorna todos os números menores ou iguais ao número fornecido  
  }  

  private verificarFibonacci(num: number): boolean {  
    return this.fibonacciSequence.includes(num); // Verifica se o número está na sequência gerada  
  }  
}