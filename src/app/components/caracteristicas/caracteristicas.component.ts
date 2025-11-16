import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caracteristicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.scss'
})
export class CaracteristicasComponent {
  caracteristicas = [
    {
      icon: '⚡',
      title: 'Alto Rendimiento',
      description: 'Angular utiliza técnicas avanzadas como Tree Shaking, AOT (Ahead-of-Time) compilation y lazy loading para optimizar el rendimiento de las aplicaciones.',
      color: '#FF6B6B'
    },
    {
      icon: '📦',
      title: 'Arquitectura Modular',
      description: 'Basado en módulos y componentes reutilizables que facilitan el mantenimiento y la escalabilidad del código.',
      color: '#4ECDC4'
    },
    {
      icon: '🔒',
      title: 'TypeScript',
      description: 'Construido con TypeScript, proporciona tipado estático, mejor autocompletado y detección temprana de errores.',
      color: '#45B7D1'
    },
    {
      icon: '🔄',
      title: 'Two-Way Data Binding',
      description: 'Sincronización automática bidireccional entre el modelo y la vista, simplificando la gestión del estado.',
      color: '#FFA07A'
    },
    {
      icon: '🎯',
      title: 'Inyección de Dependencias',
      description: 'Sistema robusto de inyección de dependencias que facilita la creación de código desacoplado y testeable.',
      color: '#98D8C8'
    },
    {
      icon: '🛣️',
      title: 'Routing Avanzado',
      description: 'Sistema de enrutamiento potente que permite crear aplicaciones de una sola página (SPA) con navegación fluida.',
      color: '#F7DC6F'
    },
    {
      icon: '🧪',
      title: 'Testing Integrado',
      description: 'Herramientas integradas para testing unitario y end-to-end, facilitando el desarrollo guiado por pruebas.',
      color: '#BB8FCE'
    },
    {
      icon: '📱',
      title: 'Progressive Web Apps',
      description: 'Soporte nativo para crear PWAs con capacidades offline, notificaciones push y experiencia similar a apps nativas.',
      color: '#85C1E2'
    }
  ];
}

