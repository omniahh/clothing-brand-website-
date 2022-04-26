import React from "react";
import Image from "next/image";
import boxStyle from "../styles/landing.module.css";
import landing4 from "../public/landing4.jpg";
import landing6 from "../public/landing6.jpg";
import Product from "../components/Product";
import products from "../list";
import btnStyle from "../styles/button.module.css";

const landing = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src={landing4}
              className="d-block w-100"
              alt="Landscape picture"
              width={1550}
              height={800}
            />

            <div className={boxStyle.box}>
              <div className="border border-0">
                <h2 className="box-slide-title fs-4 fw-lighter text-light">
                  Your Favorite
                </h2>
                <h3 className="box-slide-sub-title fs-1 fw-bolder text-light ">
                  CLOTHING BRAND
                </h3>
                <p className="box-slide-description text-light">
                  You have ideas, goals, and dreams. We have a culturally
                  diverse, forward thinking team looking for talent like.
                </p>
                <p>
                  <a
                    href="about.html"
                    className="slider btn btn-dark text-light fw-bold"
                    aria-label="about-us"
                    tabIndex="-1"
                  >
                    Know Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src={landing6}
              className="d-block w-100"
              alt="Landscape picture"
              width={1550}
              height={800}
            />

            <div className={boxStyle.box}>
              <div className="border border-0">
                <h2 className="box-slide-title fs-4 fw-lighter text-light">
                  YOUR FAVORITE
                </h2>
                <h3 className="box-slide-sub-title fs-1 fw-bolder text-light ">
                  CLOTHING BRAND
                </h3>
                <p className="box-slide-description text-light">
                  You have ideas, goals, and dreams. We have a culturally
                  diverse, forward thinking team looking for talent like.
                </p>
                <p>
                  <a
                    href="about.html"
                    className="slider btn btn-dark text-light fw-bold"
                    aria-label="about-us"
                    tabIndex="-1"
                  >
                    Know Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h3 className="box-slide-sub-title fs-1 fw-bolder text-dark text-center text-decoration-underline mt-5 mb-5 ">
        New Arrivals
      </h3>

  
      <div className="row">
        {products.map((e) => {
          return (
            <>
            <div className="col-4 ">
              {<Product key={e.id} />}
              <div className="card-group  m-4">
                <div className="card">
                  <Image
                    src={require("../public/" + e.image + ".jpg")}
                    className="d-block w-100"
                    alt="Landscape picture"
                    width={300}
                    height={500}
                  />{" "}
                  <div className="card-body">
                    <h5 className="card-title">{e.price}</h5>
                    <p className="card-text  text-truncate ">{e.title}</p>
                    <p className="card-text  card-link">
                      <small className="text-muted">
                        {" "}
                        <button type="submit" className={btnStyle.myBtn}>
                          Add To Cart
                        </button>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
               </div> 
            </>
          );
        })}
      </div>
      </div>
  );
};

export default landing;
