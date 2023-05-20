import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './signup.css'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faInfo, faLock, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up')

    return (
        <section className="section-auth">
            <div className="icon-box">
                <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
            </div>
            <h3 className="primary-heading">Register</h3>
            <form>
            <div className="input-field">
                    <label htmlFor="name">
                        <FontAwesomeIcon icon={faInfo} className="input-icon"></FontAwesomeIcon>
                    </label>
                    <input type="text" name="name" id="name" placeholder="Input your Name" />
                </div>
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
                <div className="input-field">
                    <label htmlFor="photo">
                        <FontAwesomeIcon icon={faPhotoFilm} className="input-icon"></FontAwesomeIcon>
                    </label>
                    <input type="text" name="photo" id="photo" placeholder="Input your Photo URL" />
                </div>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
                <input type="submit" value="Sign Up" className="btn" />
        </form>
    </section>
    );
};

export default SignUp;