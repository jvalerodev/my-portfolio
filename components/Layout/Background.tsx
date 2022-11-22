import { StarsContainer, Stars1, Stars2, Stars3 } from './Stars';

interface Props {
  children: JSX.Element;
}

const Background = ({ children }: Props) => {
  return (
    <>
      <StarsContainer>
        <Stars1 />
        <Stars2 />
        <Stars3 />
      </StarsContainer>
      {children}
    </>
  );
};

export default Background;
