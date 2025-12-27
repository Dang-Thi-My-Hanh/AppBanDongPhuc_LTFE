import React from "react";
import cart from "../../assets/icon/products/cart.svg"
const ProductCard = ({ name, price, image }: any) => {
    return (
        <div className="ProductCard">
            <img src={image} alt="name" />
            <p className="product-name">{name}</p>

          <div className="product-footer">
             <span className="product-price">{price} VND</span>
              <button className="cart">{cart}</button>
          </div>
        </div>
    );
};
export default ProductCard;