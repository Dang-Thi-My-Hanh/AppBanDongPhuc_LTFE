import React from "react";
import { ReactComponent as CartIcon } from "../../assets/icon/products/cart.svg"
const ProductCard = ({ name, price, image }: any) => {
    return (
        <div className="product-card">
            <img src={image} alt="name" />
            <p className="product-name">{name}</p>

          <div className="product-footer">
             <span className="product-price">{price.toLocaleString()}VND</span>
              <div className="cart">
                  <CartIcon width="20px" height="20px"/>
              </div>
          </div>
        </div>
    );
};
export default ProductCard;