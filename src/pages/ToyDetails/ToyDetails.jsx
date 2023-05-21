import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './toydetails.css';

const ToyDetails = () => {
    const toy = useLoaderData();
    const {name, price, ratings, photo, seller, seller_email, Quantity, description} = toy;

    useTitle(name);


    return (
        <section className='section-single-toy'>
            <div className="toy-photo">
                <img src={photo} alt="" />
            </div>
            <div className="toy-info">
                <h3 className="secondary-heading">{name}</h3>
                <p className="toy-description">{description}</p>
                <p className="quantity">Quantity: {Quantity}</p>
                <div className="toy-price">
                    <p className="price">Price: $<span>{price}</span></p>
                    <p className="ratings">Ratings: <span>{ratings}</span></p>
                </div>
                <p className="seller">Seller: <span>{seller}</span></p>
                <p className="seller_email">Seller Email: <span>{seller_email}</span></p>
            </div>
        </section>
    );
};

export default ToyDetails;