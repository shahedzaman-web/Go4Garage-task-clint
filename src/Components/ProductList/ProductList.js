import React, { useState } from "react";
import { useEffect } from "react";
import bg from "./../../assets/Bg21.png";
import Object from "./../../assets/Tiffinia_icon_small.png";
import ProductListDetails from "./ProductListDetails";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://evening-woodland-06309.herokuapp.com/vendor/list")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  });
  return (
    <div>
      <div className="position-relative">
        <img className="home-img w-100" src={bg} alt="" srcset="" />
        <div className="position-absolute img-top ">
          <img className="img-top img-fluid w-25" src={Object} alt="" />
        </div>
        <div className="ms-5">
          <h1>List of Product</h1>
          <div className="d-flex flex-row bd-highlight flex-wrap ">
            {productList.map((item) => (
              <ProductListDetails item={item}></ProductListDetails>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
