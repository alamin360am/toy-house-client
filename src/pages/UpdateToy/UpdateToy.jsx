import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();

  const {
    _id,
    name,
    photo,
    ratings,
    price,
    Quantity,
    description,
    sub_category,
  } = toy;

  useTitle(`Update - ${name}`);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.toy_name.value;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const Quantity = form.quantity.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const data = {
      name,
      sub_category,
      price,
      ratings,
      Quantity,
      description,
      photo,
    };
    console.log(data);

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    fetch(`http://localhost:5000/added_toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Toy Updated successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  };
  return (
    <section className="section-add-toy">
      <h2 className="primary-heading">Update - {name}</h2>
      <form onSubmit={handleUpdate}>
        <div className="grid col-2">
          <div className="input">
            <label htmlFor="toy-name">Toy Name</label>
            <input
              type="text"
              name="toy_name"
              id="toy-name"
              required
              defaultValue={name}
            />
          </div>
          <div className="input">
            <label htmlFor="sub-category">Sub Category</label>
            <select name="sub_category" id="sub-category" defaultValue={sub_category}>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Ship">Ship</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              required
              defaultValue={price}
            />
          </div>
          <div className="input">
            <label htmlFor="ratings">Ratings</label>
            <input
              type="text"
              name="ratings"
              id="ratings"
              required
              defaultValue={ratings}
            />
          </div>
          <div className="input">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              required
              defaultValue={Quantity}
            />
          </div>
          <div className="input">
            <label htmlFor="photo">Photo URL</label>
            <input
              type="text"
              name="photo"
              id="photo"
              required
              defaultValue={photo}
            />
          </div>
          <div className="input">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              required
              defaultValue={description}
            />
          </div>
        </div>
        <input type="submit" value="Update Now" className="btn" />
      </form>
    </section>
  );
};

export default UpdateToy;
