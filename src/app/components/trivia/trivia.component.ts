import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Pregunta {
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class TriviaComponent implements OnInit, OnDestroy {
  preguntas: Pregunta[] = [
    {
      pregunta: '¿Qué es Angular?',
      opciones: [
        'Un lenguaje de programación',
        'Un framework de desarrollo web',
        'Una base de datos',
        'Un sistema operativo'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Angular es un framework de desarrollo web de código abierto mantenido por Google, diseñado para crear aplicaciones web dinámicas y escalables.'
    },
    {
      pregunta: '¿Qué lenguaje de programación utiliza principalmente Angular?',
      opciones: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Java'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Angular está construido con TypeScript, que es un superset de JavaScript que añade tipado estático y otras características avanzadas.'
    },
    {
      pregunta: '¿Qué es un componente en Angular?',
      opciones: [
        'Una función de JavaScript',
        'Una clase que controla una vista y su lógica',
        'Un archivo de configuración',
        'Una base de datos'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Un componente en Angular es una clase TypeScript decorada con @Component que controla una vista (template) y su lógica asociada.'
    },
    {
      pregunta: '¿Qué significa SPA en el contexto de Angular?',
      opciones: [
        'Single Page Application',
        'Simple Program Architecture',
        'System Program Access',
        'Standard Page Application'
      ],
      respuestaCorrecta: 0,
      explicacion: 'SPA significa Single Page Application (Aplicación de Página Única), donde toda la aplicación se carga en una sola página HTML y la navegación se maneja dinámicamente.'
    },
    {
      pregunta: '¿Qué es el Two-Way Data Binding en Angular?',
      opciones: [
        'Sincronización unidireccional de datos',
        'Sincronización bidireccional entre modelo y vista',
        'Un método de almacenamiento de datos',
        'Una técnica de encriptación'
      ],
      respuestaCorrecta: 1,
      explicacion: 'El Two-Way Data Binding permite la sincronización automática bidireccional entre el modelo de datos y la vista, usando la directiva [(ngModel)].'
    },
    {
      pregunta: '¿Qué es un servicio en Angular?',
      opciones: [
        'Un componente visual',
        'Una clase que proporciona funcionalidad reutilizable',
        'Un archivo de estilos',
        'Un módulo de enrutamiento'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Un servicio en Angular es una clase TypeScript decorada con @Injectable que proporciona funcionalidad reutilizable que puede ser inyectada en componentes u otros servicios.'
    },
    {
      pregunta: '¿Qué directiva se usa para mostrar listas en Angular?',
      opciones: [
        '*ngFor',
        '*ngIf',
        '*ngSwitch',
        '*ngShow'
      ],
      respuestaCorrecta: 0,
      explicacion: 'La directiva *ngFor se utiliza para iterar sobre una lista y mostrar elementos repetidos en el template.'
    }
  ];

  preguntaActual: number = 0;
  respuestaSeleccionada: number | null = null;
  mostrarFeedback: boolean = false;
  puntaje: number = 0;
  tiempoRestante: number = 60;
  intervalo: any;
  triviaCompletada: boolean = false;
  respuestasCorrectas: number = 0;
  respuestasIncorrectas: number = 0;

  ngOnInit() {
    this.iniciarTemporizador();
  }

  ngOnDestroy() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  iniciarTemporizador() {
    this.tiempoRestante = 60;
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
    this.intervalo = setInterval(() => {
      this.tiempoRestante--;
      if (this.tiempoRestante <= 0) {
        this.tiempoAgotado();
      }
    }, 1000);
  }

  seleccionarRespuesta(index: number) {
    if (this.mostrarFeedback) return;

    this.respuestaSeleccionada = index;
    this.mostrarFeedback = true;
    clearInterval(this.intervalo);

    if (index === this.preguntas[this.preguntaActual].respuestaCorrecta) {
      this.puntaje += 10;
      this.respuestasCorrectas++;
    } else {
      this.respuestasIncorrectas++;
    }
  }

  siguientePregunta() {
    if (this.preguntaActual < this.preguntas.length - 1) {
      this.preguntaActual++;
      this.respuestaSeleccionada = null;
      this.mostrarFeedback = false;
      this.iniciarTemporizador();
    } else {
      this.finalizarTrivia();
    }
  }

  tiempoAgotado() {
    if (this.mostrarFeedback) return;

    clearInterval(this.intervalo);
    this.mostrarFeedback = true;
    this.respuestasIncorrectas++;
  }

  finalizarTrivia() {
    clearInterval(this.intervalo);
    this.triviaCompletada = true;
  }

  reiniciarTrivia() {
    this.preguntaActual = 0;
    this.respuestaSeleccionada = null;
    this.mostrarFeedback = false;
    this.puntaje = 0;
    this.respuestasCorrectas = 0;
    this.respuestasIncorrectas = 0;
    this.triviaCompletada = false;
    this.iniciarTemporizador();
  }

  esRespuestaCorrecta(index: number): boolean {
    return index === this.preguntas[this.preguntaActual].respuestaCorrecta;
  }

  esRespuestaSeleccionada(index: number): boolean {
    return this.respuestaSeleccionada === index;
  }

  // ✅ Método para reemplazar String.fromCharCode en el HTML
  getLetter(i: number): string {
    return String.fromCharCode(65 + i);
  }
}
