import Header from '@/components/Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory">
      <div className="w-4/5 xl:w-3/5 mx-auto">
        <Header />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
