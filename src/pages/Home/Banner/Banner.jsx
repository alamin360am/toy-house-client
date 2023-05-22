import './banner.css'
import banner from './../../../../public/banner.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='section-banner'>
            <div className="banner-info">
                <h1 className='title'>All Car toy is available in our website</h1>
                <p className="description">
                    You can buy any kind of car toy from our website. Very easy to buy any product from our website
                </p>
                <Link to='/all-toys' className='btn'>See All Toy</Link>
            </div>
            <div className="banner-img">
                <img src={banner} alt="" />
            </div>
        </section>
    );
};

export default Banner;