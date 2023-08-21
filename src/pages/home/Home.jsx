import React from "react";
import Update from "./../../components/update/Update";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Footer from "../../components/footer/Footer";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <>
        <Navbar />
        <div className="homeContainer">
          <Update />
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Home;
