import { useContext } from 'react';
import './addtoy.css';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    useTitle("Add A Toy")
    const {user} = useContext(AuthContext);

    const handleUpload = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.toy_name.value;
        const seller = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const Quantity = form.quantity.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const data = {name, seller, seller_email, sub_category, price, ratings, Quantity, description, photo};

        
        fetch('https://toy-house-server-orcin.vercel.app/toys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        fetch('https://toy-house-server-orcin.vercel.app/added_toy', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: 'Toy added successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        })


    }
    return (
        <section className='section-add-toy'>
            <h2 className="primary-heading">Add A Toy</h2>
            <form onSubmit={handleUpload}>
                <div className="grid col-2">
                    <div className="input">
                        <label htmlFor="toy-name">Toy Name</label>
                        <input type="text" name="toy_name" id="toy-name" required/>
                    </div>
                    <div className="input">
                        <label htmlFor="seller-name">Seller Name</label>
                        <input type="text" name="seller_name" id="seller-name" defaultValue={user?.displayName} disabled/>
                    </div>
                    <div className="input">
                        <label htmlFor="seller-email">Seller Email</label>
                        <input type="text" name="seller_email" id="seller-email" defaultValue={user?.email} disabled/>
                    </div>
                    <div className="input">
                        <label htmlFor="sub-category">Sub Category</label>
                        <select name="sub_category" id="sub-category">
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="Ship">Ship</option>
                        </select>
                    </div>
                    <div className="input">
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" id="price" required/>
                    </div>
                    <div className="input">
                        <label htmlFor="ratings">Ratings</label>
                        <input type="text" name="ratings" id="ratings" required/>
                    </div>
                    <div className="input">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" name="quantity" id="quantity" required/>
                    </div>
                    <div className="input">
                        <label htmlFor="photo">Photo URL</label>
                        <input type="text" name="photo" id="photo" required/>
                    </div>
                    <div className="input">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" required/>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className='btn' />
            </form>
        </section>
    );
};

export default AddToy;