import './category.css';

const Ships = (props) => {
    const {name, price, ratings, photo} = props.ship;
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
            <button className="btn">View Details</button>
        </div>
    );
};

export default Ships;