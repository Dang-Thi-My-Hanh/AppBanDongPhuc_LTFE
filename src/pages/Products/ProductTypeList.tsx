import types from "../../data/tyles"

//const types = ['T-shirt', 'Polo', 'Shirt', 'Jacket', 'Pants', 'Short Pants'];

const ProductTypeList = () => {
    return (
        <div className="type-list">
            {types.map(type => (
                <div key={type.id} className="type-item">
                    <div className="type-icon">
                        <img src={type.image} alt={type.name}/>
                    </div>
                    <span>{type.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ProductTypeList;
