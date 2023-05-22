import "./alltoys.css";
import Toy from "./Toy";
import useTitle from "../../hooks/useTitle";
import { useEffect, useState } from "react";

const AllToys = () => {
  useTitle("All Toys");

  const [allToys, setAllToys] = useState([]);
  const [condition, setCondition] = useState(true);

  useEffect(()=>{
    fetch('https://toy-house-server-orcin.vercel.app/toys')
    .then(res => res.json())
    .then(data => setAllToys(data))
  },[]);

  console.log(allToys.name);

  const toy20 = allToys.slice(0, 20);

  const handleClick = () => {
    setCondition(false);
  };

  const handleSearch = (event) =>{
    event.preventDefault();
    setCondition(true);
    const searchName = event.target.search.value;
    const result = allToys.filter(toys => toys.name == searchName);
    setAllToys(result);
  }

  return (
    <section className="all-toys">
      <h2 className="primary-heading">All Toys</h2>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search" name="search"/>
        <input type="submit" value="Search" className="btn" />
      </form>
      <div className="grid col-4">
        {condition == false
          ? allToys.map((toy) => <Toy key={toy._id} toy={toy}></Toy>)
          : toy20.map((toy2) => <Toy key={toy2._id} toy={toy2}></Toy>)}
      </div>
      {condition == false ? (
        ""
      ) : (
        <button onClick={handleClick} className="btn">
          Show More
        </button>
      )}
    </section>
  );
};

export default AllToys;
