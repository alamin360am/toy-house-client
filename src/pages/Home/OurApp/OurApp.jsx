import './ourapp.css';
import playStore from './../../../../public/playstore.png'
import appStore from './../../../../public/appstore.png'

const OurApp = () => {
    return (
        <section className='section-app'>
            <h3 className="secondary-heading">Experience the Ultimate online toy shopping brought to you by Toy House.</h3>
            <p className="section-info">Official Distributor of Mattel, Funskool, Winfun, Frank & Zephyr Toy Brands in Bangladesh! Authorized Licensee of Hot Wheels & Barbie Apparel (2022)!</p>
            <div className="grid col-2">
                <div className="app">
                    <img src={playStore} alt="" />
                </div>
                <div className="app">
                    <img src={appStore} alt="" />
                </div>
            </div>
        </section>
    );
};

export default OurApp;