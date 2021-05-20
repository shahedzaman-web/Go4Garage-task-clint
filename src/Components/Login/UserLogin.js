import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import bg from "./../../assets/Bg21.png";
import Object from "./../../assets/object3.png";
const UserLogin = () => {
  const { handleSubmit } = useForm();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleBlur = (e) => {
    const newUserInfo = { ...userInfo };
    if (e.target.value === "") {
      return alert("Please input value!");
    } else {
      newUserInfo[e.target.name] = e.target.value;
      setUserInfo(newUserInfo);
      console.log(userInfo);
    }
  };

  const onSubmit = (data) => {
    const submitData = {
      email: userInfo.email,
      password: userInfo.password,
    };
    console.log(submitData);

    const url = `https://evening-woodland-06309.herokuapp.com/user/login`;
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
      res.status === 201
        ? history.push("/user/productList")
        : alert("Login Failed!")
    );
  };

  return (
    <div>
      <div>
        <div className="position-relative">
          <img className="home-img w-100" src={bg} alt="" srcset="" />
          <div className="position-absolute img-top ">
            <img className="img-top" src={Object} alt="" />
          </div>
        </div>
        <div>
          <h1 className="ms-5">Login User</h1>

          <form
            className="d-flex flex-column bd-highlight ms-5"
            action="submit"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class="mb-3 ">
              <label for="formGroupExampleInput" class="form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                class="form-control w-50"
                id="formGroupExampleInput"
                placeholder="Enter Email"
                onBlur={handleBlur}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                class="form-control w-50"
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
  );
};

export default UserLogin;
