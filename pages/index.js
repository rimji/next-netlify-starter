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
        <p className="logoi"> 
        <img src="/logo311-drjogis.png" alt="Dr.Jogi's" />
        </p>
        <p className="description"> 
        <code>
        Panjiri
        </code>
        </p>
      </main>

  
      <Footer />
       &copy; Dr.Jogi's
    </div>
  )
}
