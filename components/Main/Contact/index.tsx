'use client';

import useObserver from '@/hooks/useObserver';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import { networks } from '@/components/Footer/data';

const Contact = () => {
  const { ref } = useObserver();

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col snap-start"
      ref={ref}
    >
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-4xl text-center font-bold uppercase bg-black">
          Contact <span className="text-green-500">Me</span>
        </h2>

        <div className="bg-black mt-12 p-2 md:grid grid-cols-2 gap-x-10 gap-y-10">
          <ContactForm />

          <ContactCard />
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex justify-evenly items-center bg-black sm:text-4xl text-3xl p-2 space-x-8">
          {networks.map(({ label, url, Icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <div className="transition hover:bg-green-500 rounded-sm py-2 px-3 cursor-pointer">
                <Icon />
              </div>
            </a>
          ))}
        </div>

        <div className="bg-black py-10 text-center sm:text-base text-sm">
          <p className="font-bold">Made with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
