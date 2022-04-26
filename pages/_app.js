import react from 'react';

import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js");
  }, []);
  
  return (
     <SessionProvider session={pageProps.session}>
  <div>
  
    <Navbar></Navbar>

  <Component {...pageProps} />

  <Footer></Footer>
  </div>
   </SessionProvider>
  
  )

}

export default MyApp
