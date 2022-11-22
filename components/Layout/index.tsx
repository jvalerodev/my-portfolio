import Header from '@/components/Header';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth">
      <div className="w-4/5 xl:w-3/5 mx-auto">
        <Header />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
