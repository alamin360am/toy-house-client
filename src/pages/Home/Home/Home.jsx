import { useEffect } from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import OurApp from '../OurApp/OurApp';
import './Home.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Category from '../Category/Category';

const Home = () => {
    useTitle('Home');
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <main>
            <Banner></Banner>
            <div data-aos="fade-left">
            <Gallery></Gallery>
            </div>
            <Category></Category>
            <OurApp></OurApp>
            <Contact></Contact>
        </main>
    );
};

export default Home;