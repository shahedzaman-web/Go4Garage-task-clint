import React from "react";
import "./Home.css";
import bg from "./../../assets/Bg21.png";
import Object from "./../../assets/object1.png";
import { BrowserRouter as useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();

  return (
    <div>
      <div className="position-relative">
        <img className="home-img w-100" src={bg} alt="" srcSet="" />
        <div className="position-absolute img-top ">
          <img className="img-top" src={Object} alt="" />
        </div>
        <div className="top-text position-absolute">
          <h1>HURRY!!</h1>
          <p>HUNGER DON'T WAIT</p>
        </div>
      </div>
      <div className="justify-content-center align-items-center d-flex flex-column bd-highlight">
        <button
          onClick={() => history.push("/register")}
          className="btn btn-warning mb-2 d-highlight w-50"
        >
          <h3 className="text-white fs-1">GET STARTED</h3>
          <small>Avail Best offer & Discounts Only For You</small>
        </button>
        <button className="btn btn-light w-50 fs-4 m-2 bd-highlight">
          Continue Without Login
        </button>
        <button
          onClick={() => history.push("/loginHome")}
          className="btn btn-light w-50 fs-4 bd-highlight"
        >
          Already a Toffina Member? <span className="text-warning">LOGIN </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
