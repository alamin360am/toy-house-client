// import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import "./mytoys.css";

const MyToy = ({ toy }) => {
  useTitle("My Toys")
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

  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm("Are you sure to Delete?");
    console.log(`https://toy-house-server-orcin.vercel.app/added_toy/${id}`);
    if(proceed) {
      fetch(`https://toy-house-server-orcin.vercel.app/added_toy/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    }
    
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
          <Link to={`/update/${_id}`} className="btn">Update</Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-dlt">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
