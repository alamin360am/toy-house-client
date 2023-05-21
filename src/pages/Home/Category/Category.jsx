import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./category.css";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import Bikes from "./Bikes";
import Cars from "./Cars";
import Ships from "./Ships";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [cars, setCars] = useState([]);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    const bikes = toys.filter((bike) => bike.sub_category === "Bike");
    setBikes(bikes);

    const cars = toys.filter((car) => car.sub_category === "Car");
    setCars(cars);

    const ships = toys.filter((ship) => ship.sub_category === "Ship");
    setShips(ships);
  }, [toys]);

  return (
    <section className="section-category">
      <h2 className="primary-heading">Shop by category</h2>
      <Tabs>
        <TabList>
          <Tab>Bike Toys</Tab>
          <Tab>Car Toys</Tab>
          <Tab>Ship Toys</Tab>
        </TabList>
        <TabPanel>
          <div className="grid col-3 tab-panel">
            {bikes.map((bike) => (
              <Bikes key={bike._id} bike={bike}></Bikes>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid col-3 tab-panel">
            {cars.map((car) => (
              <Cars key={car._id} car={car}></Cars>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid col-3 tab-panel">
            {ships.map((ship) => (
              <Ships key={ship._id} ship={ship}></Ships>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Category;
