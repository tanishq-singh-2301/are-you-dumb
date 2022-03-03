import '../styles/globals.css';
import type { AppProps } from 'next/app';

const appHeight: Function = (): void => {
  const doc: HTMLElement = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (typeof window !== "undefined") {
    window.addEventListener('resize', () => appHeight());
    appHeight();
  }

  return <Component {...pageProps} />
}

export default MyApp;