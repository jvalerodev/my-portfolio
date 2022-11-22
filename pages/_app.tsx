import '../styles/globals.css';
import '@/styles/stars.css';
import type { AppProps } from 'next/app';
import VisibilityState from '@/context/visibility/state';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <VisibilityState>
      <Component {...pageProps} />
    </VisibilityState>
  );
};

export default App;
