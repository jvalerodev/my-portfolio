import { Container, Circles, Bounce1, Bounce2 } from './styles';

const Spinner = () => {
  return (
    <Container>
      <Circles>
        <Bounce1 />
        <Bounce2 />
      </Circles>
    </Container>
  );
};

export default Spinner;
