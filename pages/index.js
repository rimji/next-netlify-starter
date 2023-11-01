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
        Order <code>Dr. Jogi's Desi Panjiri for New Mothers</code>
        </p>
        <p className="description"> 
        Follow us <a href="https://www.instagram.com/drjogis/"><code>@drjogis</code></a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
