import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import "./AllProducts.css";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://claytone-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <Fade bottom>
        <div className="bg-clr p-1">
          <div className="container mt-5">
            <h1 className="headers-title">Products</h1>
          </div>
        </div>

        <div className="container mb-3">
          <div className="row">
            {allProducts.map((allProduct) => (
              <div key={allProduct?._id} className="col-md-4">
                <div className="card mt-3">
                  <img
                    src={allProduct?.img}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{allProduct?.name}</h5>
                    <p className="card-text">{allProduct?.material}</p>
                    <p className="card-text price">$ {allProduct?.price}</p>
                    <Link to={`/purchase/${allProduct?._id}`}>
                      <button className="btn product-btn">BUY NOW</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div></div>
          </div>
        </div>
      </Fade>
      <Footer></Footer>
    </>
  );
};

export default AllProducts;
