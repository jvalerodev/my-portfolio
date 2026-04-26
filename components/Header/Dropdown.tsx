'use client';

import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import useVisibility from '@/hooks/useVisibility';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const items = [
  { href: '/#home', hash: '#home', label: 'Home' },
  { href: '/#about', hash: '#about', label: 'About' },
  { href: '/#services', hash: '#services', label: 'Services' },
  { href: '/#portfolio', hash: '#portfolio', label: 'Portfolio' },
  { href: '/#contact', hash: '#contact', label: 'Contact' }
];

const navMenuClasses =
  'absolute top-[90px] flex w-full flex-wrap justify-evenly gap-y-[10px] py-4 text-sm uppercase transition-all duration-500 ease-in-out -left-[200%]';

const navItemClasses =
  'flex items-center mx-4 px-3 py-[5px] font-bold cursor-pointer transition hover:text-black';

const Dropdown = ({ open, setOpen }: Props) => {
  const { visibleEntry } = useVisibility();

  const handleMenu = () => setOpen(!open);

  return (
    <nav
      className={`${navMenuClasses} ${
        open ? 'max-lg:left-0 max-lg:z-1 max-lg:bg-green-500' : ''
      }`}
    >
      {items.map(({ href, hash, label }) => (
        <Link key={hash} href={href}>
          <p
            className={`${navItemClasses} ${visibleEntry === hash ? 'text-black' : ''}`}
            onClick={handleMenu}
          >
            {label}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default Dropdown;
