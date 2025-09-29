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
    id: 1, 
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

export interface TimelineEvent {
  year: string;
  description: string;
}

export const timelineData: TimelineEvent[] = [
  {
    year: '2004',
    description: 'Início da carreira como Assistente Administrativo na WDM, atuando com atendimento ao cliente, controle de caixa e desenvolvimento de programas para máquinas de bordado.' 
  },
  {
    year: '2008',
    description: 'Encarregado de Produção na Atual Uniformes, com foco em controle de qualidade, otimização de processos e liderança de equipe.'
  },
  {
    year: '2011',
    description: 'Abertura da microempresa JOTA, gerenciando clientes, processos, financeiro e equipe por mais de 6 anos.'
  },
  {
    year: '2018',
    description: 'Experiência internacional no Canadá (Greystone College), estudando Business Communication e aprimorando inglês em nível avançado.'
  },
  {
    year: '2018',
    description: 'Atuação como Business Consultant na OD Mais Healthcare, ajudando empresas do setor de saúde a otimizar processos, finanças e gestão.'
  },
  {
    year: '2020',
    description: 'Fundação e gestão da JD Bordados Computadorizados, liderando a empresa por mais de 3 anos, unindo gestão administrativa e relacionamento com clientes.'
  },
  {
    year: '2023',
    description: 'Transição definitiva para a área de tecnologia: participação no programa DesenvolvendoMe com foco em Hard/Soft Skills, além de ingressar no bacharelado em Ciência da Computação.'
  },
  {
    year: '2024',
    description: 'Avanço acadêmico e profissional: início do MBA em Engenharia de Software (UNG), formação em Ciência da Computação (Alura) e foco em desenvolvimento back-end com Java, Spring Boot, APIs REST e microsserviços.'
  },
  {
    year: 'Hoje',
    description: 'Atuação como desenvolvedor em projetos práticos, consolidando experiência em integração de APIs, automação de testes, CI/CD e arquitetura distribuída. Atualmente cursando formação em Engenharia de Software pela DNC.'
  }
];

