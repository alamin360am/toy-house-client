import './Header.css'
import logo from './../../../public/logo.png'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [condition, setCondition] = useState(false);
    const handleClick = () => {
        setCondition(!condition);
    }
    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <span>Toy House</span>
                </div>
                <div onClick={handleClick} className="icon-box">
                    {
                        condition? <FontAwesomeIcon icon={faClose} className='icon'></FontAwesomeIcon>:
                        <FontAwesomeIcon icon={faBars} className='icon'></FontAwesomeIcon>
                    }
                </div>
                <div className={`nav-link ${condition? 'open' : ''}`}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/all-toys'>All Toys</NavLink>
                    <NavLink to='/my-toys'>My Toys</NavLink>
                    <NavLink to='/add-a-toy'>Add A Toy</NavLink>
                    <NavLink to='/blog'>Blogs</NavLink>
                </div>
                <div className="user-box">
                    <div className="user-img"></div>
                    <Link to='/login' className='btn'>Log In</Link>
                    {/* <Link className='btn'>Log out</Link> */}
                </div>
            </nav>
        </header>
    );
};

export default Header;