import Link from 'next/link';
import Image from 'next/image';
import useObserver from '@/hooks/useObserver';
import Writer from './TypeText';

const yearsOfExperience = new Date().getFullYear() - 2021;

const Presentation = () => {
  const { ref } = useObserver();

  return (
    <div
      id="home"
      className="flex justify-center items-center h-screen"
      ref={ref}
    >
      <div className="md:flex justify-between items-center">
        <div className="md:w-1/2">
          <p className="text-2xl text-green-500 font-bold uppercase">
            Hi there,
          </p>

          <div className="lg:flex text-5xl font-black mt-5 lg:space-x-3">
            <p className="whitespace-nowrap">I am</p>

            <Writer />
          </div>

          <p className="mt-5 font-light">
            Developer with {yearsOfExperience} years of experience developing
            web applications. I have skills in scalable web application
            development and teamwork, always looking for new ways to improve
            efficiency and productivity.
          </p>

          <Link
            href="/#contact"
            className="bg-green-500 hover:bg-green-600 transition ease-in-out delay-100 hover:scale-110 duration-200 py-2 px-8 rounded-full mt-5 inline-block"
          >
            Hire Me
          </Link>
        </div>

        <div className="md:w-1/2 text-end">
          <Image
            src="/img/person.png"
            alt="Jesús Valero"
            width={512}
            height={512}
            placeholder="blur"
            blurDataURL="/img/person.png"
            priority={true}
            className="inline"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
