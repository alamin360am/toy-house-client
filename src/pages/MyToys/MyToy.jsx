// import Swal from 'sweetalert2';
import "./mytoys.css";

const MyToy = ({ toy }) => {
  const {
    _id,
    name,
    photo,
    ratings,
    price,
    Quantity,
    seller,
    seller_email,
    description,
  } = toy;

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="card">
      <div className="img-box">
        <img src={photo} alt="" />
      </div>
      <div className="info">
        <h3 className="secondary-heading">{name}</h3>
        <p className="description">{description}</p>
        <div className="info-flex">
          <p>Seller: {seller}</p>
          <p>Seller Email: {seller_email}</p>
        </div>
        <div className="info-flex">
          <p className="ratings">
            Ratings: <span>{ratings}</span>
          </p>
          <p className="price">
            Price: $ <span>{price}</span>
          </p>
          <p className="quantity">
            Quantity: $ <span>{Quantity}</span>
          </p>
        </div>
        <div className="info-flex">
          <button className="btn">Update</button>
          <button onClick={() => handleDelete(_id)} className="btn btn-dlt">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
