import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import OurApp from '../OurApp/OurApp';
import './Home.css'

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Gallery></Gallery>
            <OurApp></OurApp>
            <Contact></Contact>
        </main>
    );
};

export default Home;