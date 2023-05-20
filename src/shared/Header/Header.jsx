import './Header.css'
import logo from './../../../public/logo.png'
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <span>Toy House</span>
                </div>
                <div className="nav-link">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/all-toys'>All Toys</NavLink>
                    <NavLink to='/my-toys'>My Toys</NavLink>
                    <NavLink to='/add-a-toy'>Add A Toy</NavLink>
                    <NavLink to='/blog'>Blogs</NavLink>
                </div>
                <div className="user-box">
                    <div className="user-img"></div>
                    <Link to='/login' className='btn'>Log In</Link>
                    <Link to='/logout' className='btn'>Log out</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;