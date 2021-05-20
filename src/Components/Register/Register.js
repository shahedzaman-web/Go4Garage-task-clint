import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import bg from "./../../assets/Bg21.png";
import Object from "./../../assets/object3.png";
const Register = () => {
  const [viewForm, setViewForm] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { handleSubmit } = useForm();
  const history = useHistory();
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
  });

  const handleBlur = (e) => {
    const newRegisterInfo = { ...registerInfo };
    if (e.target.value === "") {
      return alert("Please input value!");
    } else {
      newRegisterInfo[e.target.name] = e.target.value;
      setRegisterInfo(newRegisterInfo);
      console.log(registerInfo);
    }
  };
  const handleClick = (register) => {
    setViewForm(true);
    console.log(register);
    if (register === "user") {
      console.log("it is user");
      setIsUser(true);
      console.log(isUser);
    }
  };

  const onSubmit = (data) => {
    const submitData = {
      email: registerInfo.email,
      password: registerInfo.password,
    };
    console.log(submitData);
    if (isUser) {
      console.log(isUser);
      const url = `https://evening-woodland-06309.herokuapp.com/user/register`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      }).then((res) =>
        // console.log(
        //   "server side response vendor",
        //   res,
        //   res.status
        // )
        res.status === 200
          ? history.push("/user/productList")
          : alert("Registration Failed!")
      );
    } else {
      const url = `https://evening-woodland-06309.herokuapp.com/vendor/register`;

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      }).then((res) =>
        // console.log(
        //   "server side response vendor",
        //   res,
        //   res.status
        // )
        res.status === 200
          ? history.push("/vendor/addProduct")
          : alert("Registration Failed!")
      );
    }
  };

  return (
    <div>
      <div>
        <div className="position-relative">
          <img className="home-img w-100" src={bg} alt="" srcSet="" />
          <div className="position-absolute img-top ">
            <img className="img-top" src={Object} alt="" />
          </div>
        </div>
        <div>
          <h1 className="ms-5">Register</h1>
          <div
            className={
              viewForm === true
                ? "d-none "
                : "d-flex flex-column bd-highlight ms-5 "
            }
          >
            <button
              className="w-25 btn btn-warning text-white"
              onClick={() => handleClick("user")}
            >
              User Register
            </button>
            <button
              className="w-25 btn btn-warning text-white my-5"
              onClick={() => handleClick("customer")}
            >
              Customer Register
            </button>
          </div>
          <div
            className={
              !viewForm === true
                ? "d-none "
                : "d-flex flex-column bd-highlight ms-5 "
            }
          >
            <form action="submit" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control w-50"
                  id="formGroupExampleInput"
                  placeholder="Enter Email"
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control w-50"
                  id="formGroupExampleInput2"
                  placeholder="Enter Password"
                  onBlur={handleBlur}
                />
              </div>
              <input
                type="submit"
                value="PROCEED"
                className="w-50 btn btn-warning text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
