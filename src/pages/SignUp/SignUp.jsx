import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './signup.css'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faInfo, faLock, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    useTitle('Sign Up');

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            user.displayName = name;
            user.photoURL = photo;
        })
        .catch(error =>{
            console.log(error);
        });
    }

    return (
        <section className="section-auth">
            <div className="icon-box">
                <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
            </div>
            <h3 className="primary-heading">Register</h3>
            <form onSubmit={handleSignUp}>
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