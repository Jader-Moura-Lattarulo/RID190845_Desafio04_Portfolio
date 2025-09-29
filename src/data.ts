// src/data.ts

// A interface Project continua a mesma
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1, // Reorganizei os IDs
    title: 'ArqFusion',
    description: 'Um site institucional para um escritório de arquitetura, focado em design moderno e responsividade.',
    image: '/assets/arq-fusion.jpg',
    liveUrl: 'https://arq-fusion.vercel.app/',
    repoUrl: 'https://github.com/Jader-Moura-Lattarulo/ArqFusion',
  },
  {
    id: 2,
    title: 'Luminare Real Estate',
    description: 'Plataforma para uma imobiliária, com listagem e busca de propriedades, construída com React.',
    image: '/assets/luminare.jpg',
    repoUrl: 'https://github.com/Jader-Moura-Lattarulo/luminare-real-estate-sd',
    liveUrl: 'https://luminare-real-estate-sd.vercel.app/',
  },
  {
    id: 3,
    title: 'TaskBoard JMDev',
    description: 'Um quadro de tarefas interativo para organização de projetos, permitindo arrastar e soltar cards.',
    image: '/assets/taskboard.jpg',
    liveUrl: 'https://taskboardjmdev.netlify.app/',
  },
  {
    id: 4,
    title: 'Decodificador Alura',
    description: 'Challenge da Alura para criar um decodificador de texto usando lógica de JavaScript puro.', // Sinta-se à vontade para ajustar a descrição
    image: '/assets/decodificador-alura.jpg',
    liveUrl: 'https://alura-challenge-decodificador-decoder-jarl.vercel.app/',
    repoUrl: 'https://github.com/Jader-Moura-Lattarulo/alura-challenge-decodificador-decoder',
  },
];