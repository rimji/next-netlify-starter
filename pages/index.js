import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dr. Jogi's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Dr.Jogi's" />
        <p className="description">
          Follow us <code>@drjogis</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
