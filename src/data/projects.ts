
import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Cloud-Native E-Commerce Platform',
    description: 'A scalable e-commerce solution with microservices.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A responsive chat app with WebSocket integration.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Socket.IO', 'MongoDB', 'Express', 'Tailwind CSS'],
  },
  {
    title: 'Our Package Project',
    description:
      'A loosely coupled delivery system with message brokering and CI/CD automation.',
    image: 'https://images.unsplash.com/photo-1586528116311-01c1dedfca63?auto=format&fit=crop&w=800&q=80',
    technologies: ['TypeScript', 'MongoDB', 'RabbitMQ', 'GitHub Actions'],
  },
];
