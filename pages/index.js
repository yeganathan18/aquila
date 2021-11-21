import Head from 'next/head'
import Header from '../src/components/Header';
import NavBar from '../src/components/NavBar';


const Home = () => {
  return (
    <div className="md:w-100">
      <Head>
        <title>National Higher Secondary School, Irinjalakuda</title>
        <meta name="description" content="National IJK School, Irinjalakuda" />
        <link rel="icon" href="../../home-96.png" />
      </Head>
      {/*<Header />*/}
      <hr
          style={{
            color: "#000000",
            height: 0.5,
            borderColor: "#000000",
          }}
        />
        <NavBar/>
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
