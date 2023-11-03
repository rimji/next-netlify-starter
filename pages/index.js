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
        <a href="https://www.rimsim.com/"><img src="https://user-images.githubusercontent.com/88181976/245754932-8d760de0-b789-439e-93e6-0ce080997326.png" alt="Rimsim" width="90" height="30"></a>
        <p className="description"> 
        <a href="https://www.instagram.com/drjogis" target="_blank" rel="noopener noreferrer"><code>Desi Panjiri for New Mothers</code></a>
        </p>
      </main>

      <Footer />
        <code>&copy; Dr.Jogi's</code>
    </div>
  )
}
