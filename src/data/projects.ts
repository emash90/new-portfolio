
import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Car Rental Project',
    description: 'A full stack web application done using AWS amplify with a severless backend utilizing AWS tools such as Lambda, DynamoDB and API Gateway',
    image: '../public/car rental management pic.avif',
    githubUrl: 'https://github.com/emash90/rent-a-car',
    technologies: ['React', 'Lambda', 'S3', 'API Gateway', 'DynamoDB', 'AWS', 'AWS Cognito', 'Amplify'],
  },
  {
    title: 'Tenant Management System: Wama Rentals',
    description: 'A responsive chat app with WebSocket integration.',
    image: '../public/wama-Screenshot 2025-03-14 at 07.50.46.png',
    githubUrl: 'https://github.com/emash90/wama_microservices',
    technologies: ['React', 'Socket.IO', 'MongoDB', 'Express', 'Tailwind CSS'],
  },
  {
    title: 'Package Delivery Project: Packaroo',
    description:
      'A loosely coupled delivery system with message brokering and CI/CD automation.',
    image: '../public/premium_photo-1681487829842-2aeff98f8b63.avif',
    githubUrl: 'https://github.com/emash90/package-delivery-app',
    technologies: ['TypeScript', 'MongoDB', 'RabbitMQ', 'GitHub Actions'],
  },
];
