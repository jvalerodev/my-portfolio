import { useState } from 'react';
import Dropdown from './Dropdown';
import Navbar from './Navbar';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 py-5 z-10">
      <Navbar open={open} setOpen={setOpen} />

      <Dropdown open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
