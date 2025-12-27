const types = ['T-shirt', 'Polo', 'Shirt', 'Jacket', 'Pants', 'Short'];

const ProductTypeList = () => {
    return (
        <div className="type-list">
            {types.map(type => (
                <div key={type} className="type-item">
                    <div className="type-icon"></div>
                    <span>{type}</span>
                </div>
            ))}
        </div>
    );
};

export default ProductTypeList;
