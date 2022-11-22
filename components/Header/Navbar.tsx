import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import useVisibility from '@/hooks/useVisibility';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ open, setOpen }: Props) => {
  const { visibleEntry } = useVisibility();

  return (
    <nav className="flex justify-between items-center">
      <div className="w-1/3 hover:opacity-90">
        <h1>
          <Link href="/" className="text-5xl font-black">
            J<span className="text-green-500 uppercase">Valero</span>
          </Link>
        </h1>
      </div>

      <div className="w-2/3 hidden lg:flex justify-evenly space-x-5 text-sm uppercase">
        <Link
          href="/#home"
          className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded
            ${visibleEntry === '#home' && 'bg-green-500'}`}
        >
          Home
        </Link>

        <Link
          href="/#about"
          className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded
            ${visibleEntry === '#about' && 'bg-green-500'}`}
        >
          About
        </Link>

        <Link
          href="/#services"
          className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded
            ${visibleEntry === '#services' && 'bg-green-500'}`}
        >
          Services
        </Link>

        <Link
          href="/#portfolio"
          className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded
            ${visibleEntry === '#portfolio' && 'bg-green-500'}`}
        >
          Portfolio
        </Link>

        <Link
          href="/#contact"
          className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded
            ${visibleEntry === '#contact' && 'bg-green-500'}`}
        >
          Contact
        </Link>
      </div>

      <div
        className="lg:hidden text-3xl cursor-pointer transition hover:text-green-400"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
