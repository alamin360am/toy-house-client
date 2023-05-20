import './Footer.css'
import logo from './../../../public/logo.png'

const Footer = () => {
    return (
        <footer className='grid col-3'>
            <div className="logo-box">
                <img src={logo} alt="" />
            </div>
            <div className="contact">
                <h3 className="secondary-heading">Contact</h3>
                <div className="contact-list">
                    <div className="box">
                        <p>Address:</p>
                        <address>42/2 Dhaka lane <br /> Dhaka, Bangladesh</address>
                    </div>
                    <div className="box">
                        <p>Email:</p>
                        <a href="mailto:info@toy-house.com">info@toy-house.com</a>
                    </div>
                    <div className="box">
                        <p>Phone:</p>
                        <a href="tel:+880123456790">+880123456790</a>
                    </div>
                    <div className="box">
                        <p>Website:</p>
                        <a href="#">www.domain.com</a>
                    </div>
                </div>
            </div>
            <div className="social">
                <h3 className="secondary-heading">Social Link</h3>
                <div className="links">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;