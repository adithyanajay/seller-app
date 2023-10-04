import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { hourGlass } from "../assets";

function Cards() {
  const properties = useSelector((state) => state.properties.data);
  const selection = useSelector((state) => state.selection.value);
  const [showMore, setShowMore] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  // function to filter data according to the selection in the nav
  useEffect(() => {
    const data = properties.filter((state) => {
      return state.flag == selection;
    });
    setFilteredData(data);
    setShowMore(true);
  }, [selection, properties]);

  return (
    <div className="cards text-center">
      <div className="mb-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-7 w-fit m-auto">
        {showMore
          ? filteredData.slice(0, 6).map((data) => {
              return <Card data={data} key={data.id} />;
            })
          : filteredData.map((data) => {
              return <Card data={data} key={data.id} />;
            })}
      </div>

      <button
        onClick={() => setShowMore(false)}
        className={`mt-10 m-auto bg-main_purple flex justify-center items-center gap-4 px-4 py-3 rounded-2xl ${
          showMore ? "block" : "hidden"
        }`}
      >
        <img src={hourGlass} alt="show more" className="w-5" />
        <p className="text-white text-lg font-semibold">Show More</p>
      </button>
    </div>
  );
}

export default Cards;
