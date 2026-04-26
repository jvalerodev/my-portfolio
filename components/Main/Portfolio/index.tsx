'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaRegEye, FaCode } from 'react-icons/fa';
import useObserver from '@/hooks/useObserver';
import { projects } from './data';
import ViewProjects from './ViewProjects';

const Portfolio = () => {
  const { ref } = useObserver();
  const [visible, setVisible] = useState(6);

  const handleVisible = (n: number) => {
    setVisible(n);

    projects.slice(6).map((project) => {
      project.style = n === 6 ? 'h-0 opacity-0' : 'h-[185px] opacity-100';
    });
  };

  return (
    <div
      id="portfolio"
      className="min-h-screen flex flex-col justify-center snap-start"
      ref={ref}
    >
      <h2 className="text-4xl text-center font-bold uppercase bg-black">
        My <span className="text-green-500">Portfolio</span>
      </h2>

      <div className="bg-black grid sm:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-x-9 items-center mt-12 p-2">
        {projects.map(
          ({ name, image, viewUrl, viewLabel, codeUrl, codeLabel, style }) => (
            <div
              key={name}
              className={`group relative block overflow-hidden transition-all duration-400 ${style ?? ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1000}
                placeholder="blur"
                blurDataURL={image.src}
                className="rounded-md h-full"
              />

              <div className="absolute inset-0 bg-green-500 opacity-0 rounded-md transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h3 className="font-bold text-lg mb-3 text-center">{name}</h3>
                  <div className="flex justify-center items-center space-x-8">
                    <a
                      href={viewUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={viewLabel}
                    >
                      <FaRegEye className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                    </a>

                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={codeLabel}
                    >
                      <FaCode className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <ViewProjects visible={visible} handleVisible={handleVisible} />
    </div>
  );
};

export default Portfolio;
