interface Props {
  children: React.ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <>
      <div className="stars-container" aria-hidden="true" />
      {children}
    </>
  );
};

export default Background;
