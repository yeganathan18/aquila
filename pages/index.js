import Head from 'next/head'

const Home = () => {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>National Higher Secondary School, Irinjalakuda</title>
        <meta name="description" content="National IJK School, Irinjalakuda" />
        <link rel="icon" href="/home-96.png" />
      </Head>

      <main>
        <h1 className="text-center text-6xl p-7">
          Welcome to <a href="https://nextjs.org" className="text-blue-600">Next.js!</a>
        </h1>
      </main>

      {/* Footer component goes here! */}
    </div>
  )
}

export default Home;
