import { Link } from 'react-router-dom';
import './alltoys.css';

const Toy = ({toy}) => {
    const {_id, name, sub_category, price, Quantity, seller} = toy;
    return (
        <div className='card'>
            <div className="info">
                <h3 className="secondary-heading">{name}</h3>
                <p className="information">Seller: <span>{seller? seller: "No Seller"}</span></p>
                <p className="information">Sub Category: <span>{sub_category}</span></p>
                <p className="information">Quantity: <span>{Quantity}</span></p>
                <p className="price">Price: $ <span>{price}</span></p>
            </div>
            <Link to={`/category/${_id}`} className="btn">View Details</Link>
        </div>
    );
};

export default Toy;