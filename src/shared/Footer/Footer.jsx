import "./Footer.css";
import logo from "./../../../public/logo.png";
import facebook from "./../../../public/icon/facebook.png";
import twitter from "./../../../public/icon/twitter.png";
import youtube from "./../../../public/icon/youtube.png";
import instagram from "./../../../public/icon/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="grid col-3">
        <div className="logo-box">
          <img src={logo} alt="" />
        </div>
        <div className="contact">
          <h3 className="secondary-heading">Contact</h3>
          <div className="contact-list">
            <div className="box">
              <p>Address:</p>
              <address>
                42/2 Dhaka lane <br /> Dhaka, Bangladesh
              </address>
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
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
      <p>CopyRight &copy; Toy House 2023</p>
    </footer>
  );
};

export default Footer;
