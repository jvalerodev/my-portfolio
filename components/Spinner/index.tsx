const bounceClasses =
  'absolute inset-0 rounded-full bg-green-500 opacity-70 animate-sk-bounce';

const Spinner = () => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <div className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2">
        <div className={bounceClasses} />
        <div className={`${bounceClasses} [animation-delay:-1s]`} />
      </div>
    </div>
  );
};

export default Spinner;
