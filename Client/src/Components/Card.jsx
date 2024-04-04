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
      quantity: 1,
    };
    dispatch(addItem(selectedItem));
    message.success("Product added to cart");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card" style={{ width: "18rem;", margin: "10px" }}>
              <img
                className="card-img-top"
                src={props.image}
                alt={props.productName}
              />
              <div className="card-body">
                <h5 class="card-title">{props.productName}</h5>
                <p class="card-text">Rs. {props.price}/-</p>
                <button onClick={handleSubmit} className="btn btn-primary">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
