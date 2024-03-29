import React from "react";
import "../Styles/Crousel.css";
import img1 from "../Assets/Images/banner_img_01.png";
import img2 from "../Assets/Images/banner_img_02.png";
import img3 from "../Assets/Images/banner_img_03.png";

const Crousel = () => {
  return (
    <>
      <div className="container-fluid text-dark">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6 col-12 d-lg-flex-none d-flex justify-content-center order-lg-last order-md-last img-class">
                        <img src={img1} className="Logo" alt="Logo" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <h1 className="h1-class">Upto 70% Sale Offer</h1>
                        <p>Stunning handcrafted dining table, perfect for elegant gatherings. Solid wood construction ensures durability and sophistication. Don't miss out on this limited-time offer!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div class="carousel-item">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6 col-12 d-lg-flex-none d-flex justify-content-center order-lg-last order-md-last img-class">
                        <img src={img2} className="Logo" alt="Logo" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <h1 className="h1-class">Upto 40% Sale Offer</h1>
                        <p>
                          Stunning handcrafted dining table, perfect for elegant gatherings. Solid wood construction ensures durability and sophistication. Don't miss out on this limited-time offer!
                        </p>
                      </div>
                    </div>
                  </div>
                </div> 
                 <div class="carousel-item">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6 col-12 d-lg-flex-none d-flex justify-content-center order-lg-last order-md-last img-class">
                        <img src={img3} className="Logo mt-lg-4 mt-md-3 mt-sm-3 mt-2" alt="Logo" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <h1 className="h1-class">Upto 50% Sale Offer</h1>
                        <p>
                          Stunning handcrafted dining table, perfect for elegant gatherings. Solid wood construction ensures durability and sophistication. Don't miss out on this limited-time offer!
                        </p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crousel;
