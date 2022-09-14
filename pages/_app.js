import '../styles/globals.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      delay: 50,
      mirror: true,
    });
  });
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
