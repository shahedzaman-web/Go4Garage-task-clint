import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "./../../assets/Bg21.png";
import Object from "./../../assets/object2.png";

const AddProduct = () => {
  const { handleSubmit } = useForm();

  const [productInfo, setProductInfo] = useState({
    Title: "",
    Description: "",
    Price: "",
  });

  const handleBlur = (e) => {
    const newProductInfo = { ...productInfo };
    newProductInfo[e.target.name] = e.target.value;
    setProductInfo(newProductInfo);
  };
  const onSubmit = (data) => {
    const submitData = {
      Title: productInfo.Title,
      Description: productInfo.Description,
      Price: productInfo.Price,
    };
    const url = `https://evening-woodland-06309.herokuapp.com/vendor/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    }).then((res) => console.log("server side response", res));
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
        <div className="">
          <h1 className="ms-5">Add Product</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="submit"
            className="d-flex flex-column bd-highlight ms-5"
          >
            <div class="mb-3 ">
              <label for="formGroupExampleInput" class="form-label">
                Title
              </label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control w-50"
                id="formGroupExampleInput"
                placeholder="Enter title"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Description
              </label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control w-50"
                id="formGroupExampleInput2"
                placeholder="Enter Description"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Price
              </label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control w-50"
                id="formGroupExampleInput2"
                placeholder="Enter Price"
              />
            </div>
            <input
              type="submit"
              value="Add"
              className="w-50 btn btn-warning text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
