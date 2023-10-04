import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import Cards from "../components/Cards";
function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Cards />
    </div>
  );
}

export default Home;
