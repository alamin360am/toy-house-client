import './mytoys.css';
import MyToy from './MyToy';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle("My Toys");
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([])

    const url = `http://localhost:5000/added_toy?seller_email=${user.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
    },[url])

    return (
        <section className='section-my-toy'>
            <div className="grid col-2">
                {
                    toys.map(toy=> <MyToy key={toy._id} toy={toy}></MyToy>)
                }
            </div>
        </section>
    );
};

export default MyToys;