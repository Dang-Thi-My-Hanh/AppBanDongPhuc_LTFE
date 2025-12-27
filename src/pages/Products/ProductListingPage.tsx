import React from 'react';
import CategoryCard from './CategoryCard';
import ProductGrid from './ProductGrid';
import ProductTypeList from './ProductTypeList';

import '../../styles/products.css'
const Products: React.FC = () => {
    return (
        <div className="products-page">
            <CategoryCard />

            <h3 className="section-title">PRODUCT TYPES</h3>
            <ProductTypeList />

            <h3 className="section-title">MOST POPULAR UNIFORMS</h3>
            <ProductGrid />

        </div>
    );
};
export default Products;