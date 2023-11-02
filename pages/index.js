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
        <Header title="Dr.Jogi's" />
        <p className="description"> 
        <a href="https://www.instagram.com/drjogis" target="_blank" rel="noopener noreferrer"><code>Desi Panjiri for New Mothers</code></a>
        </p>
      </main>

      <Footer />
        <p className="description"> 
        <a href="https://www.instagram.com/drjogis" target="_blank" rel="noopener noreferrer"><code>instagram</code></a>
        </p>
    </div>
  )
}
