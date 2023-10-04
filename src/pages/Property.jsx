import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Property() {
  const { id } = useParams();
  const property = useSelector((state) => state.properties.data);
  const data = property.filter((data) => data.id == id);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {data.map((data) => {
        return <Card data={data} key={id} />;
      })}
    </div>
  );
}

export default Property;
