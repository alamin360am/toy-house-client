import './error.css';
import error from './../../public/errorpage.png'
import useTitle from '../hooks/useTitle';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    useTitle('404')
    return (
        <section className='error'>
            <img src={error} alt="" />
            <Link to='/' className='btn'>Go to Home</Link>
        </section>
    );
};

export default ErrorPage;