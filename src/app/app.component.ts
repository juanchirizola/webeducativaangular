import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { TriviaComponent } from './components/trivia/trivia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, CaracteristicasComponent, TriviaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Web Educativa sobre Angular';
}

