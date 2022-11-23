import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import useVisibility from '@/hooks/useVisibility';
import { NavMenu, NavItem } from './styles';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = ({ open, setOpen }: Props) => {
  const { visibleEntry } = useVisibility();

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <NavMenu active={open}>
      <Link href="/#home">
        <NavItem
          className={`${visibleEntry === '#home' && 'text-black'}`}
          onClick={handleMenu}
        >
          Home
        </NavItem>
      </Link>
      <Link href="/#about">
        <NavItem
          className={`${visibleEntry === '#about' && 'text-black'}`}
          onClick={handleMenu}
        >
          About
        </NavItem>
      </Link>
      <Link href="/#services">
        <NavItem
          className={`${visibleEntry === '#services' && 'text-black'}`}
          onClick={handleMenu}
        >
          Services
        </NavItem>
      </Link>
      <Link href="/#portfolio">
        <NavItem
          className={`${visibleEntry === '#portfolio' && 'text-black'}`}
          onClick={handleMenu}
        >
          Portfolio
        </NavItem>
      </Link>
      <Link href="/#contact">
        <NavItem
          className={`${visibleEntry === '#contact' && 'text-black'}`}
          onClick={handleMenu}
        >
          Contact
        </NavItem>
      </Link>
    </NavMenu>
  );
};

export default Dropdown;
