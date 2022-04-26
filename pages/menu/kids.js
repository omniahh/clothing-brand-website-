import React from 'react';
import Image from 'next/image';
import Product from '../../components/Product';
import products from '../../kidsList';
import btnStyle from "../../styles/button.module.css";

const kids = () => {
    return (
     
      <div>
  
      <div className="row">
        {products.map((e) => {
          return (
            <>
            <div className="col-4 ">
              {<Product key={e.id} />}
              <div className="card-group  m-4">
                <div className="card">
                  <Image
                    src={require("../../public/" + e.image + ".jpg")}
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
export default kids;