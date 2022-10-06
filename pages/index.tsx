import type { NextPage } from 'next'
import Head from 'next/head' 
import Link from 'next/link'
import styles from './../styles/dnd.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>INÍCIO</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>  
        <div className={styles.card}>
           <Link  href={"/dnd"}> 
              <a>LISTA </a> 
          </Link> 
        </div> 
      </main> 
    </div>
  )
}

export default Home
