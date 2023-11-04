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
        <p class="thick"> 
        Dr.Jogi's
        </p>
        <p className="description"> 
        <code>
        Desi Panjiri
        <p>This is the first sentence.</p>
        <p>This is the second sentence.</p>
        </code>
        </p>
      </main>

  
      <Footer />
       &copy; Dr.Jogi's
    </div>
  )
}
