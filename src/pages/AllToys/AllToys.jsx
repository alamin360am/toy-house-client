import { useLoaderData } from "react-router-dom";
import "./alltoys.css";
import Toy from "./Toy";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";

const AllToys = () => {
  const allToys = useLoaderData();
  useTitle("All Toys");
  const [condition, setCondition] = useState(true);

  const toy20 = allToys.slice(0, 19);

  const handleClick = () => {
    setCondition(false);
  };

  return (
    <section className="all-toys">
      <div className="grid col-4">
        {condition
          ? allToys.map((toy) => <Toy key={toy._id} toy={toy}></Toy>)
          : toy20.map((toy) => <Toy key={toy._id} toy={toy}></Toy>)}
      </div>
      {condition ? (
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
