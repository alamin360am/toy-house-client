import { useLoaderData } from "react-router-dom";
import "./alltoys.css";
import Toy from "./Toy";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";

const AllToys = () => {
  const allToys = useLoaderData();
  useTitle("All Toys");
  const [condition, setCondition] = useState(true);

  const toy20 = allToys.slice(0, 20);

  const handleClick = () => {
    setCondition(false);
  };

  return (
    <section className="all-toys">
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
