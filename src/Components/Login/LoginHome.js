import React from "react";
import { useHistory } from "react-router";
import bg from "./../../assets/Bg21.png";
import Object from "./../../assets/object2.png";

const LoginHome = () => {
  const history = useHistory();
  return (
    <div>
      <div className="position-relative">
        <img className="home-img w-100" src={bg} alt="" srcset="" />
        <div className="position-absolute img-top ">
          <img className="img-top" src={Object} alt="" />
        </div>
      </div>
      <h1 className="ms-5">LOGIN</h1>
      <div className="d-flex flex-column bd-highlight">
        <button
          className="ms-5 w-50 btn btn-light  text-start"
          onClick={() => history.push("/user/login")}
        >
          <i class="bi bi-person-badge"></i> User Log In
        </button>
        <button
          className=" text-start ms-5 w-50 btn btn-light my-3"
          onClick={() => history.push("/vendor/login")}
        >
          <i class="bi bi-person-circle"></i> Vendor Log In
        </button>
      </div>

      <footer className="text-center mt-5">
        By Continuing, You Agree To our
        <br />
        Terms of Service & Privacy Policy
      </footer>
    </div>
  );
};

export default LoginHome;
