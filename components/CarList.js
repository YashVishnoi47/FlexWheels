import React, { useEffect, useState } from "react";
import { fetchcars } from "../utils";

const CarList = ({ filters }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchcars(filters);
      setCars(result);
    };

    fetchData();
  }, [filters]);

  return (
    <div>
      {cars.length > 0 ? (
        cars.map((car) => (
          <div key={car.id}>
            <h3>{car.make} {car.model}</h3>
            {/* Render other car details */}
          </div>
        ))
      ) : (
        <p>No cars found</p>
      )}
    </div>
  );
};

export default CarList;
