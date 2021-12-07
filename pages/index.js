import Head from 'next/head'
import NavBar from '../src/components/NavBar';
import Footer from "../src/components/Footer";
import ImageSlider from "../src/components/ImageSlider";
import AboutBox from "../src/components/AboutBox";


const Home = () => {
    return (
        <div className="md:w-100">
            <Head>
                <title>National Higher Secondary School, Irinjalakuda</title>
                <meta name="description" content="National IJK School, Irinjalakuda"/>
                <link rel="stylesheet" href={"https://pro.fontawesome.com/releases/v5.10.0/css/all.css"}
                      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                      crossOrigin="anonymous"/>

                <link rel="icon" href={"../../favicons/home-96.png"} />
            </Head>
            <NavBar />
            <ImageSlider />
            <AboutBox />
            <Footer />
        </div>
    )
}

export default Home;
