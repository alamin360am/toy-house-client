import { useLoaderData } from 'react-router-dom';
import './alltoys.css';
import Toy from './Toy';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const allToys = useLoaderData();
    useTitle("All Toys")
    
    
    return (
        <section className='all-toys'>
            <div className="grid col-4">
                {
                    allToys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                }
            </div>
        </section>
    );
};

export default AllToys;