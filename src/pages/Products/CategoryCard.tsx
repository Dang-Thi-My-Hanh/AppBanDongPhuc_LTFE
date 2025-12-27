import React from 'react';

import { categories } from '../../data/categories';

const CategoryCard = () => {
    return (
        <div className="category-card">
            {categories.map(cat => (
                <div key={cat.id} className="category-item">
                    <img src={cat.image} alt={cat.name} />
                    <span>{cat.name}</span>
                </div>
            ))}
        </div>
    );
};

export default CategoryCard;

