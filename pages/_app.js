import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Tarifs from "../components/Tarifs";
import Gallery from '../components/galery';


function MyApp({Component, pageProps}) {
    return <>
    <div className="bg-neutral-900">
            <Navigation/>
            <Component {...pageProps} />
            <Gallery/>
            <Tarifs/>
            <Footer/>
            </div>

    </>
}

export default MyApp
