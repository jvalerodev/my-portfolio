import { Network } from '@/types/typings';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa';

export const networks: Network[] = [
  {
    url: 'https://www.facebook.com/jvalerodev',
    label: 'Facebook',
    Icon: FaFacebook
  },
  {
    url: 'https://www.instagram.com/_jvalero',
    label: 'Instagram',
    Icon: FaInstagram
  },
  {
    url: 'https://www.linkedin.com/in/jesusvalerog',
    label: 'LinkedIn',
    Icon: FaLinkedinIn
  },
  {
    url: 'https://github.com/jvalerodev',
    label: 'GitHub',
    Icon: FaGithub
  }
];
