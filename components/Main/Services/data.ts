import { Service } from '@/types/typings';
import { DiJavascript1 } from 'react-icons/di';
import {
  FaDesktop,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs
} from 'react-icons/fa';

export const services: Service[] = [
  {
    name: 'Web Development',
    text: 'Responsive designs developed with the best practices, excellent performance and interactivity.',
    years: `${new Date().getFullYear() - 2021} years`,
    Icon: FaDesktop
  },
  {
    name: 'JavaScript',
    text: "DOM management, data structures, asynchronous processes, integrations with API's, frameworks and more.",
    years: `${new Date().getFullYear() - 2021} years`,
    Icon: DiJavascript1
  },
  {
    name: 'React',
    text: 'Reusable components, React Router DOM, Context API, Redux, Hooks, Props, Styled Components, etc.',
    years: `${new Date().getFullYear() - 2021} years`,
    Icon: FaReact
  },
  {
    name: 'HTML',
    text: 'Management of tags, elements, attributes, properties, styles, SEO, scripts, among others.',
    years: `${new Date().getFullYear() - 2021} years`,
    Icon: FaHtml5
  },
  {
    name: 'CSS',
    text: 'Classes, selectors, properties, pseudo elements, specificity, Frameworks: Bootstrap, Tailwind CSS.',
    years: `${new Date().getFullYear() - 2021} years`,
    Icon: FaCss3Alt
  },
  {
    name: 'Node.js',
    text: "Express, Rest API's, Protected routes, integration with databases: My SQL, PostgreSQL, MongoDB.",
    years: `${new Date().getFullYear() - 2021} years`,
    Icon: FaNodeJs
  }
];
