import { useState } from 'react';
import Image from 'next/image';
import { FaRegEye, FaCode } from 'react-icons/fa';
import useObserver from '@/hooks/useObserver';
import { projects } from './data';
import ViewProjects from './ViewProjects';
import { Container, Info, Content } from './styles';

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
    <div id="portfolio" className="pt-36" ref={ref}>
      <h2 className="text-4xl text-center font-bold uppercase bg-black">
        My <span className="text-green-500">Portfolio</span>
      </h2>

      <div className="bg-black grid sm:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-x-9 items-center mt-12 p-2">
        {projects.map(
          ({ name, image, viewUrl, viewLabel, codeUrl, codeLabel, style }) => (
            <Container key={name} className={style}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1000}
                placeholder="blur"
                blurDataURL={image.src}
                className="rounded-md h-full"
              />

              <Info>
                <Content>
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
                </Content>
              </Info>
            </Container>
          )
        )}
      </div>

      <ViewProjects visible={visible} handleVisible={handleVisible} />
    </div>
  );
};

export default Portfolio;
