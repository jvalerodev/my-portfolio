import Background from '@/components/Layout/Background';
import Layout from '@/components/Layout';
import Presentation from '@/components/Main/Presentation';
import About from '@/components/Main/About';

const Home = () => {
  return (
    <Background>
      <Layout>
        <Presentation />

        <About />
      </Layout>
    </Background>
  );
};

export default Home;
