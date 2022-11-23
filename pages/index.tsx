import Background from '@/components/Layout/Background';
import Layout from '@/components/Layout';
import Presentation from '@/components/Main/Presentation';
import About from '@/components/Main/About';
import Services from '@/components/Main/Services';
import Portfolio from '@/components/Main/Portfolio';

const Home = () => {
  return (
    <Background>
      <Layout>
        <Presentation />

        <About />

        <Services />

        <Portfolio />
      </Layout>
    </Background>
  );
};

export default Home;
