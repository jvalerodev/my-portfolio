import { Project } from '@/types/typings';

export const projects: Project[] = [
  {
    name: 'My Portfolio',
    image: {
      src: '/img/portfolio.png',
      alt: 'My Portfolio'
    },
    viewUrl: 'https://jvalero.dev',
    viewLabel: 'My Portfolio',
    codeUrl: 'https://github.com/valerojesus/my-portfolio',
    codeLabel: 'My Portfolio Code'
  },
  {
    name: 'Node Send',
    image: {
      src: '/img/nodesend.png',
      alt: 'Node Send'
    },
    viewUrl: 'https://nodesend-frontend-two.vercel.app',
    viewLabel: 'Node Send',
    codeUrl: 'https://github.com/valerojesus/nodesend-frontend',
    codeLabel: 'Node Send Code'
  },
  {
    name: 'APV',
    image: {
      src: '/img/apv.png',
      alt: 'APV'
    },
    viewUrl: 'https://veterinarymanager.netlify.app',
    viewLabel: 'APV',
    codeUrl: 'https://github.com/valerojesus/APV-frontend',
    codeLabel: 'APV Code'
  },
  {
    name: 'CRM React',
    image: {
      src: '/img/crm-react.png',
      alt: 'CRM React'
    },
    viewUrl: 'https://crmrreact.netlify.app',
    viewLabel: 'CRM React',
    codeUrl: 'https://github.com/jvalerodev/crm-react',
    codeLabel: 'CRM React Code'
  }
];
