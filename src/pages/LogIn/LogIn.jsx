import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const LogIn = () => {
  return (
    <section className="section-auth">
      <div className="icon-box">
        <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
      </div>
      <h3 className="primary-heading">Log In</h3>
      <form>
        <div className="input-field">
            <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon"></FontAwesomeIcon>
            </label>
            <input type="email" name="email" id="email" placeholder="Input your Email" />
        </div>
        <div className="input-field">
            <label htmlFor="password">
                <FontAwesomeIcon icon={faLock} className="input-icon"></FontAwesomeIcon>
            </label>
            <input type="password" name="password" id="password" placeholder="Input your Password" />
        </div>
        <p>New User? <Link to='/signup'>Sign Up Now</Link></p>
        <input type="submit" value="Log In" className="btn" />
      </form>
    </section>
  );
};

export default LogIn;
