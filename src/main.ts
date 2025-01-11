import { bootstrapApplication } from '@angular/platform-browser';  
import { AppComponent } from './app/app.component'; // Ajuste o caminho se necessário  
import { appConfig } from './app/app.config'; // Ajuste se o nome do arquivo for diferente  

bootstrapApplication(AppComponent, appConfig);