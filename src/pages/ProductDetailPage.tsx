import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import uniforms from "../data/uniforms";
import "../styles/productDetail.css";
import {reviews} from "../data/reviews";

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    // Tìm product
    const product = uniforms.find((p) => p.id === Number(id));

// Khởi tạo state **sau khi chắc chắn product tồn tại**
    const [mainImage, setMainImage] = useState<string>(product?.images[0]?? "");
    const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0].size?? "");
    const [quantity, setQuantity] = useState<number>(product?.minimumOrderQuantity??1);
    const [selectedGender, setSelectedGender] = useState<string>(
        product?.genders?.[0] ?? ""
    );
    /*LOGO*/
    const [logoOption, setLogoOption] = useState<"no-logo" | "logo">("no-logo");
    const [showLogoMenu, setShowLogoMenu] = useState(false);
    const [logoMode, setLogoMode] = useState<"none" | "logo">("none");
    const [showLogoPanel, setShowLogoPanel] = useState(false);


    // Cập nhật state khi product thay đổi
    useEffect(() => {
        if (!product) return;
        const stock =
            product.sizes.find(s => s.size === selectedSize)?.stock ?? 0;

        const min = product.minimumOrderQuantity;

        if (stock === 0) {
            setQuantity(0);
            return;
        }

        // reset quantity hợp lệ cho size mới
        setQuantity(Math.min(Math.max(min, 1), stock));
    }, [selectedSize]);
    useEffect(() => {
        if (!product) return;
        if (product.genders && product.genders.length > 0) {
            setSelectedGender(product.genders[0]);
        }
    }, [product]);

    if (!product) return <p>Product not found</p>;
    const currentStock =
        product.sizes.find((s) => s.size === selectedSize)?.stock || 0;

    const increase = () => {
        if (quantity < currentStock) setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > product.minimumOrderQuantity) setQuantity(quantity - 1);
    };

    const currentImageIndex = product.images.findIndex(
        (img) => img === mainImage
    );

    const handlePrevImage = () => {
        if (currentImageIndex > 0) {
            setMainImage(product.images[currentImageIndex - 1]);
        }
    };

    const handleNextImage = () => {
        if (currentImageIndex < product.images.length - 1) {
            setMainImage(product.images[currentImageIndex + 1]);
        }
    };
    // review của sản phẩm hiện tại
    const productReviews = reviews.filter(
        (r) => r.productId === product.id
    );
    // tổng số comment
    const totalComments = productReviews.length;
    // trung bình sao
    const averageRating =
        totalComments > 0
            ? productReviews.reduce((sum, r) => sum + r.rating, 0) / totalComments
            : 0;
    // số sao vàng (làm tròn xuống)
    const fullStars = Math.floor(averageRating);
    // sao trắng
    const emptyStars = 5 - fullStars;

    return (
        <div className="product-detail">
            {/* Images */}
            <div className="images">
                <button className="nav-btn left" onClick={handlePrevImage} disabled={currentImageIndex === 0}>
                    &lt;&lt;
                </button>
                <img src={mainImage} alt={product.name} className="main-image"/>
                <button className="nav-btn right" onClick={handleNextImage}
                   disabled={currentImageIndex === product.images.length - 1}>&gt;&gt;</button>
                <div className="thumbnails">
                    {product.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${product.name}-${idx}`}
                            className={`thumb ${mainImage === img ? "active" : ""}`}
                            onClick={() => setMainImage(img)}
                        />
                    ))}
                </div>
            </div>

            {/* Info */}
            <div className="info">
                <h1>{product.name}</h1>
                <div className="rating-row">
                    <div className={"rating-sao"}>
                        <span className="rating-number">
                            {averageRating.toFixed(1)}
                        </span>
                        <div className="stars">
                            {Array.from({ length: fullStars }).map((_, i) => (
                                <span key={`full-${i}`} className="star full">★</span>
                            ))}

                            {Array.from({ length: emptyStars }).map((_, i) => (
                                <span key={`empty-${i}`} className="star empty">☆</span>
                            ))}
                        </div>
                    </div>
                    <span className="comment-count">
                        Comment : {totalComments}
                    </span>
                </div>
                <p className="info-price">{product.price.toLocaleString()} VND</p>
                <div className="shipping-row">
                    <span className="shipping-label">Shipping:</span>
                    <span className="shipping-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4h11v8h4l3 4v4h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V4z" stroke="currentColor"
                                  strokeWidth="2" strokeLinejoin="round"/>
                            <circle cx="7" cy="18" r="2" fill="currentColor" />
                            <circle cx="17" cy="18" r="2" fill="currentColor" />
                        </svg>
                    </span>
                    <span className="shipping-text">Receive between Dec 17 – Dec 19</span>
                    <button className="shipping-change-btn" onClick={() => {
                        console.log("Change shipping method");}}
                            aria-label="Change shipping method">&gt;</button>
                </div>
                {/* Size */}
                <div className="size-logo-row">
                    <div className={"size-row"}>
                        <label className="info-size">Size:</label>
                        <select value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}>
                            {product.sizes.map((s) => (
                                <option key={s.size} value={s.size}>{s.size}</option>))}
                        </select>
                        <span className="size-stock">Stock: {
                            product.sizes.find(s => s.size === selectedSize)?.stock ?? 0}
                    </span>
                    </div>
                   <div className="logo-row">
                       <p className="logo-text">Logo type: </p>
                       <div className="logo-btn-wrapper">
                           <button className="logo-dropdown-btn"
                               onClick={() => setShowLogoMenu(prev => !prev)}>
                               {logoOption === "no-logo" ? "No logo" : "Logo"}
                               <span className={`arrow ${showLogoMenu ? "open" : ""}`}>˅</span>
                           </button>

                           {showLogoMenu && (
                              <div className="logo-dropdown">
                                <button className={logoMode === "none" ? "active" : ""} onClick={() => {
                                    setLogoMode("none");
                                    setShowLogoMenu(false);
                                    setShowLogoPanel(false);
                                    }}>No Logo
                                </button>
                                <button className={logoMode === "logo" ? "active" : ""} onClick={() => {
                                    setLogoMode("logo");
                                    setShowLogoMenu(false);
                                    setShowLogoPanel(true);
                                    }}>Logo
                                </button>
                              </div>
                           )}
                           {showLogoPanel && (
                                <div className="logo-panel-mobile">
                                    <div className="panel-header">
                                        <span>LOGO CUSTOMIZATION</span>
                                        <button onClick={() => setShowLogoPanel(false)}>✕</button>
                                    </div>
                                    <div className="panel-content">
                                        <label>Logo type</label>
                                        <select>
                                            <option>No Logo</option>
                                            <option>Printing</option>
                                            <option>Embroidery</option>
                                        </select>
                                        <label>Position</label>
                                        <select>
                                            <option>Left Chest</option>
                                            <option>Right Chest</option>
                                            <option>Back</option>
                                            <option>Sleeve</option>
                                        </select>
                                        <label>Size (cm)</label>
                                        <div className="inline">
                                            <input placeholder="Width" />
                                            <input placeholder="Height" />
                                        </div>
                                        <label>Upload Logo</label>
                                        <input type="file" />
                                        <label>Notes</label>
                                        <textarea rows={3} />
                                        <div className="panel-actions">
                                            <button className="cancel">Cancel</button>
                                            <button className="save">Save</button>
                                        </div>
                                    </div>
                                </div>
                           )}

                       </div>
                   </div>
                </div>
                {/* Gender */}
                {product.genders && product.genders.length > 0 && (
                    <div className="gender-row">
                        <label className="info-gender">Gender:</label>
                        <div className="gender-options">
                            {product.genders.map((g) => (
                                <button
                                    key={g}
                                    type="button"
                                    className={`gender-btn ${
                                        selectedGender === g ? "active" : ""
                                    }`}
                                    onClick={() => setSelectedGender(g)}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {/* Quantity */}
                <div className="quantity-wrapper">
                    <label>Quantity</label>
                    <div className="quantity-control">
                        <button className="qty-btn" onClick={decrease} disabled={quantity <= product.minimumOrderQuantity}>−</button>
                        <input
                            type="number"
                            value={quantity === 0 ? "" : quantity}
                            min={product.minimumOrderQuantity}
                            max={currentStock}
                            onChange={(e) => {
                                const val = e.target.value;
                                if (val === "") setQuantity(0);
                                else setQuantity(Number(val));
                            }}
                            onBlur={() => {
                                if (quantity < product.minimumOrderQuantity) setQuantity(product.minimumOrderQuantity);
                                else if (quantity > currentStock) setQuantity(currentStock);
                            }}
                        />
                        <button className="qty-btn" onClick={increase} disabled={quantity >= currentStock}>+</button>
                    </div>
                    <small>Minimum order: {product.minimumOrderQuantity}</small>
                    {currentStock === 0 && <span className="out-of-stock">Out of stock</span>}
                </div>

                {/* Buttons */}
                <div className="buttons">
                    <button disabled={currentStock === 0}>Add to Cart</button>
                    <button disabled={currentStock === 0}>Buy Now</button>
                </div>
            </div>
            <p>{product.description}</p>

        </div>
    );
};

export default ProductDetail;
;