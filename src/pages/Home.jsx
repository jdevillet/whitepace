import "../styles/pages/Home.scss";
import "../styles/components/_button.scss";
import "../styles/abstracts/_typography.scss";

import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="app-container">
      <Header />
    </div>
  );
};

export default Home;
//TODO Style the nav then do the header
