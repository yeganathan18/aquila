import { AppProps } from 'next/app';
import LayoutWrapper from '../components/LayoutWrapper';

import '../styles/globals.css'


const MyApp = ({ Component, pageProps }: AppProps) => (
  <LayoutWrapper>
    <Component {...pageProps} />
  </LayoutWrapper>
);

export default MyApp;
