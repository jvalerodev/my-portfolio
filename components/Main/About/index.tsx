import Image from 'next/image';
import useObserver from '@/hooks/useObserver';

const today = new Date().valueOf();
const birthDate = new Date('02/17/2000').valueOf();
const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365));

const About = () => {
  const { ref } = useObserver();

  return (
    <div id="about" className="pt-36" ref={ref}>
      <div className="lg:flex lg:space-x-14 items-center bg-black">
        <div className="lg:w-1/2">
          <Image
            src="/img/web-developer.jpg"
            alt="Web developer"
            width={1040}
            height={563}
            placeholder="blur"
            blurDataURL="/img/web-developer.jpg"
            className="border-4 border-green-500 p-2"
          />
        </div>

        <div className="lg:w-1/2 leading-7 mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold text-center">
            Hello, I am <span className="text-green-500">Web Developer</span>
          </h2>

          <p className="mt-5">
            I am a systems engineering student. I love the development of
            applications and web pages. I like to develop using the best
            practices, with clean and efficient code. Highly focused on being a
            better programmer every day. Here is some information about me:
          </p>

          <ul className="mt-5">
            <li>
              <span className="font-bold inline-block">Name:</span>
              <span className="ml-12 text-white">Jesús Valero</span>
            </li>

            <li>
              <span className="font-bold inline-block">Age:</span>
              <span className="ml-16 text-white">{age}</span>
            </li>

            <li>
              <span className="font-bold inline-block">Address:</span>
              <span className="ml-8 text-white">Mérida, Venezuela</span>
            </li>

            <li>
              <span className="font-bold inline-block">Phone:</span>
              <span className="ml-12 text-white">+ (58) 412 765 4801</span>
            </li>

            <li>
              <span className="font-bold inline-block">E-mail:</span>
              <span className="ml-12 text-white">jvalerodev@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
