import "./Header.css";
import logo from "./../../../public/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [condition, setCondition] = useState(false);

  const handleClick = () => {
    setCondition(!condition);
  };

  const handleSignOut = () => {
    logOut();
  };

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <span>Toy House</span>
        </div>
        <div onClick={handleClick} className="icon-box">
          {condition ? (
            <FontAwesomeIcon icon={faClose} className="icon"></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faBars} className="icon"></FontAwesomeIcon>
          )}
        </div>
        <div className={`nav-link ${condition ? "open" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/all-toys">All Toys</NavLink>
          {user ? (
            <>
              <NavLink to="/my-toys">My Toys</NavLink>
              <NavLink to="/add-a-toy">Add A Toy</NavLink>
            </>
          ) : (
            ""
          )}
          <NavLink to="/blog">Blogs</NavLink>
        </div>
        {user ? (
          <div className="user-box" title={user?.displayName}>
            <div className="user-img">
                <img src={user?.photoURL} alt="" />
            </div>
            <Link to="/" onClick={handleSignOut} className="btn">
              Log out
            </Link>
          </div>
        ) : (
          <div className="user-box">
            <Link to="/login" className="btn">
              Log In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
