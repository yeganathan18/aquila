import { AppProps } from 'next/app';

import LayoutWrapper from '../components/LayoutWrapper';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LayoutWrapper>
    <Component {...pageProps} />
  </LayoutWrapper>
);

export default MyApp;
