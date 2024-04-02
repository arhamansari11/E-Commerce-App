import React from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { addItem } from "../Redux/slices/CartSlice";

const Card = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const selectedItem = {
      name: props.productName,
      price: props.price,
      image: props.image,
      quantity: 1 
    };
    dispatch(addItem(selectedItem));
    message.success("Product added to cart");
  };

  return (
    <div className="col-3 mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.image}
          className="card-img-top"
          alt={props.productName}
        />
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">Rs {props.price}/-</p>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
