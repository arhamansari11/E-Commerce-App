import React from "react";
import { useDispatch } from "react-redux";

import { message } from "antd";

const Card = () => {
  const dispatch = useDispatch();
 

  const handlesubmit = (e)=>{
    dispatch({ type: "addtocart" });
    message.success("Product added to cart");
    
  }
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 d-flex">
            <div class="card" style={{ width: " 18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={(e) => handlesubmit()}
                >
                  Add to Cart
                </a>
              </div>
            </div>
            <div class="card" style={{ width: " 18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={(e) => handlesubmit()}
                >
                  Add to Cart
                </a>
              </div>
            </div>
            <div class="card" style={{ width: " 18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  class="btn btn-primary"
                  onClick={(e) => handlesubmit()}
                >
                  Add to Cart
                </a>
              </div>
            </div>
            <div class="card" style={{ width: " 18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={(e) => handlesubmit()}
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
