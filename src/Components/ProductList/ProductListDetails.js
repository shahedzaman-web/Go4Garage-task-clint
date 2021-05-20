import React from "react";

const ProductListDetails = (props) => {
  const { Description, Title, Price } = props.item;

  return (
    <div>
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>

          <p className="card-text">{Description}</p>
          <h2>${Price}</h2>
          <button className="btn btn-danger">
            Buy Now<i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListDetails;
