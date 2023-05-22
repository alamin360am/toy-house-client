import { Link } from 'react-router-dom';
import './category.css';

const Bikes = (props) => {
    const {_id, name, price, ratings, photo} = props.bike;
    return (
        <div className='card'>
            <div className="img-box">
                <img src={photo} alt="" />
            </div>
            <div className="info">
                <h3 className="secondary-heading">{name}</h3>
                <p className="ratings">Ratings: <span>{ratings}</span></p>
                <p className="price">Price: $ <span>{price}</span></p>
            </div>
            <Link to={`/toys/${_id}`} className="btn">View Details</Link>
        </div>
    );
};

export default Bikes;