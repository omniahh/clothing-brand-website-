import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/react';
import landing from './landing'

import Footer from '../components/Footer';
import { style } from '@mui/system';


export default function Home() {
  const { data: session, status } = useSession()



  

  return (
<div>
 
 
      {/* <Head>
        <title>NextAuth Google Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <br></br>
      <p > DO you have google account?</p>

      {!session && (
        <>
      
          <button className={styles.code} onClick={() => signIn()}>
            Sign In
          </button>
       
        </>
      )}

      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div className={styles.boxCenter}>
            <h4>Email: {session.user.email}</h4>
            <br />
            {session.user.image && (
              <span>
                <img src={session.user.image} alt={session.user.name} />
              </span>
            )}
          </div>
          <br />
          <br />
          <button className={styles.primaryButton} onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      )}
      

    </div>
     

  );
}