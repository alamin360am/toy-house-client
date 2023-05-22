import { useLoaderData } from 'react-router-dom';
import './mytoys.css';
import MyToy from './MyToy';

const MyToys = () => {
    const toys = useLoaderData();
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