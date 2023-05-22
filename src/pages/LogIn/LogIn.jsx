import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import google from "./../../../public/icon/google.png";
import useTitle from "../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const LogIn = () => {
  useTitle("Log In");

  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const googleSign = () => {
    googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="section-auth">
      <div className="icon-box">
        <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
      </div>
      <h3 className="primary-heading">Log In</h3>
      <form onSubmit={handleLogin}>
        <div className="input-field">
          <label htmlFor="email">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="input-icon"
            ></FontAwesomeIcon>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Input your Email"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">
            <FontAwesomeIcon
              icon={faLock}
              className="input-icon"
            ></FontAwesomeIcon>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Input your Password"
            required
          />
        </div>
        <p>
          New User? <Link to="/signup">Sign Up Now</Link>
        </p>
        <input type="submit" value="Log In" className="btn" />
      </form>
      <Link onClick={googleSign} className="google">
        <img src={google} alt="" />
        <p>Log in with Google</p>
      </Link>
    </section>
  );
};

export default LogIn;
