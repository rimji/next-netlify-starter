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
        <Header title="Welcome to Dr.Jogi's" />
        <p className="description">
          <code>Desi Panjiri     देसी पंजीरी    ਦੇਸੀ ਪੰਜੀਰੀ    دیسی پنجیری</code>
    Follow us <code>@drjogis</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
