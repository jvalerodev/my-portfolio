import Typewriter from 'typewriter-effect';

const TypeText = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Jesús Valero. ')
          .pauseFor(3000)
          .deleteAll()
          .typeString('Web Developer. ')
          .pauseFor(3000)
          .start();
      }}
      options={{
        loop: true,
        wrapperClassName: 'text-green-500'
      }}
    />
  );
};

export default TypeText;
