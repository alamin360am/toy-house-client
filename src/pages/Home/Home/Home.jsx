import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import './Home.css'

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Gallery></Gallery>
            <Contact></Contact>
        </main>
    );
};

export default Home;