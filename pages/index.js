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
        <p className="description"> 
        DR.JOGI'S
        </p>
        <p className="description"> 
        <a href="https://www.instagram.com/drjogis" target="_blank" rel="noopener noreferrer"><code>Desi Panjiri for New Mothers</code></a>
        </p>
      </main>

      <Footer />
        &copy; Dr.Jogi's
    </div>
  )
}
