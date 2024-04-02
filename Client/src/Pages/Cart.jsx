import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  itemselctor,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../Redux/slices/CartSlice";
import { Button, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

function Cart() {
  const items = useSelector(itemselctor);
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();

  const handleQuantityChange = (e, index) => {
    const newQuantity = parseInt(e.target.value);
    const action =
      newQuantity > items[index].quantity ? increaseQuantity : decreaseQuantity;
    dispatch(action({ index }));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem({ index }));
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container bg-white mt-4">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h2 style={{ fontWeight: "bold" }} className="pt-3">
                My Cart
              </h2>
              {items.map((item, index) => (
                <div className="card mb-3" key={index}>
                  <div className="row g-0">
                    <div className="col-md-3 col-sm-4 col-12">
                      <img
                        style={{ maxWidth: "100%" }}
                        src={item.image}
                        alt="Product"
                      />
                    </div>
                    <div className="col-md-8 col-sm-8 col-12 mt-2 ms-sm-3">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <b>Product Name: {item.name}</b>
                        <b className="mt-2">Product Price: {item.price}</b>
                        <b className="mt-2">
                          Quantity:
                          <select
                            name=""
                            id=""
                            className="ms-2"
                            onChange={(e) => handleQuantityChange(e, index)}
                            value={item.quantity}
                          >
                            {[1, 2, 3, 4].map((val) => (
                              <option key={val} value={val}>
                                {val}
                              </option>
                            ))}
                          </select>{" "}
                        </b>
                        <Popconfirm
                          className="my-2"
                          title="Delete the Item"
                          description="Are you sure to delete this Item?"
                          icon={
                            <QuestionCircleOutlined
                              style={{
                                color: "red",
                              }}
                            />
                          }
                          onConfirm={() => handleRemoveItem(index)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button style={{ width: "100px" }} danger>Delete</Button>
                        </Popconfirm>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <b>Sub Total: {total}</b>
                <br />
                <b>Total Items in Cart: {items.length} </b>
                <p>Shipping and taxes calculated at checkout.</p>
              </div>
              <button className="btn btn-primary mb-3">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
