import React from "react";
import uniforms from '../../data/uniforms';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {uniforms.slice(0, 6).map(item => (
                <ProductCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.images[0]}
                />
            ))}
        </div>
    );
};

export default ProductGrid;