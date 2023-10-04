import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Property from "./pages/Property";
import NotFound from "./pages/NotFound";
import { useDispatch } from "react-redux";
import { fetchData } from "./api/api";
import { fetchProperties } from "./Redux/features/properties/propertySlice";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // functino to fetch data from the api
  useEffect(() => {
    fetchData(setData);
  }, []);
  //fucntion to update the data in the store when the data is fetched
  useEffect(() => {
    dispatch(fetchProperties(data));
  }, [data]);
  return (
    <div className="app bg-main_bg min-h-screen">
      <div className=" content m-auto min-w-fit max-w-7xl px-3 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:selection_id" element={<Home />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
