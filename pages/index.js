import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nic Nacs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I am the kick kacks" />
        <p className="description">
          Hello I am nickers
        </p>
      </main>

      <Footer />
    </div>
  )
}
