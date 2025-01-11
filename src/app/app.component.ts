import { Component } from '@angular/core';  
import { RouterOutlet } from '@angular/router';  
import { SomaComponent } from './soma/soma.component';  
import { FibonacciComponent } from './fibonacci/fibonacci.component';  

@Component({  
  selector: 'app-root',  
  standalone: true, // Não esqueça de adicionar isso se estiver usando o modo standalone  
  imports: [RouterOutlet, SomaComponent, FibonacciComponent],  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css'] // Corrigido para styleUrls  
})  
export class AppComponent {  
  title = 'soma-app';  
}