import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dr.Jogi's</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <img src="/logosmall2-drjogis.png" alt="Dr.Jogi's" className={styles.logo} />
        <p class="thick"> 
        Dr.Jogi's
        </p>
        <p className="description"> 
        <code>Desi Panjiri</code>
        </p>
      </main>

        <p className="description"> 
        <a href="https://www.instagram.com/drjogis" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      <Footer />
       &copy;2023
    </div>
  )
}
