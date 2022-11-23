import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

interface Props {
  children: JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <SEO />

      <div className="h-screen overflow-y-auto scroll-smooth">
        <div className="w-4/5 xl:w-3/5 mx-auto">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
