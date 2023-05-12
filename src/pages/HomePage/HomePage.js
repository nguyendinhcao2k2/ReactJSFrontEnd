import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import ProductList from "../../components/ProductList/ProductList";
import Loader from "../../components/Loader/Loader";
import { STATUS } from "../../utils/status";
import { useApi } from "../../apis/productApi";

const HomePage = () => {
  const [products, setProduct] = useState([]);
  const api = useApi();

  useEffect(() => {
    const getProduct = async () => {
      const data = await api.getAllProduct();
      console.log(data);
      setProduct(data);
    };
    getProduct();
  }, []);

  // randomizing the products in the list
  // const tempProducts = [];
  // if (products.length > 0) {
  //   for (let i in products) {
  //     let randomIndex = Math.floor(Math.random() * products.length);

  //     while (tempProducts.includes(products[randomIndex])) {
  //       randomIndex = Math.floor(Math.random() * products.length);
  //     }
  //     tempProducts[i] = products[randomIndex];
  //   }
  // }

  // let catProductsOne = products.filter(
  //   (product) => product.brandName === categories[0].ten
  // );
  // let catProductsTwo = products.filter(
  //   (product) => product.brandName === categories[1].ten
  // );
  // let catProductsThree = products.filter(
  //   (product) => product.brandName === categories[2].ten
  // );

  // div className="categories-item">
  //             <div className="title-md">
  //               <h3>{categories[2].ten}</h3>
  //             </div>
  //             {productStatus === STATUS.LOADING ? (
  //               <Loader />
  //             ) : (
  //               <ProductList products={catProductsThree} />
  //             )}

  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
          <h3>See our products</h3>
            
          <ProductList products={products}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
