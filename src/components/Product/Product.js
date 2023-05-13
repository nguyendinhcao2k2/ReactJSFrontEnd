import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import "./Product.scss";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="product-item bg-white">
        <div className="category">{product?.cateName}</div>
        <div className="product-item-img">
          <img
            className="img-cover"
            src={product?.sanPhamImg}
            alt={product.moTa}
          />
        </div>
        <div className="product-item-info fs-14">
          <div className="brand">
            <span>Brand: </span>
            <span className="fw-7">{product?.nsx}</span>
          </div>
          <div className="title py-2">{product?.moTa}</div>
          <div className="price flex align-center justify-center">
            <span className="old-price">{formatPrice(product?.price)}</span>
            {/* <span className='new-price'>
              {formatPrice(product?.discountedPrice)}
            </span>
            <span className='discount fw-6'>
              ({product?.discountedPercentage}% Off)
            </span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
