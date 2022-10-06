import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/dnd.module.css'
import App from '../../components/dnd-kit-component/App'
const Home: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>DND</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href={"/"}>
              <a>INÍCIO</a>
            </Link>
          </div>
        </div>
        <App />
      </main>
    </div>
  )
}
export default Home;