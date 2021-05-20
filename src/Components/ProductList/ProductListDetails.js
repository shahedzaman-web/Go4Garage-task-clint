import React from "react";

const ProductListDetails = (props) => {
  const { Description, Title, Price } = props.item;
  console.log(props.item);
  return (
    <div>
      <div class="card m-3">
        <div class="card-body">
          <h5 class="card-title">{Title}</h5>

          <p class="card-text">{Description}</p>
          <h2>${Price}</h2>
          <button className="btn btn-danger">
            Buy Now<i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListDetails;
