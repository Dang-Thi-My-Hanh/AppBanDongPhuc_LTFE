import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Product } from "../../types/ProductType";
import { LogoCustomization } from "../../types/CartType";
import "../../styles/productDetail.css";

export interface TempOrderItem {
    id: number;
    color: string;
    size: string;
    gender: string;
    quantity: number;
}

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product;
    logoCustomization: LogoCustomization;
    onConfirm: (items: TempOrderItem[]) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({
                                                           isOpen,
                                                           onClose,
                                                           product,
                                                           logoCustomization,
                                                           onConfirm
                                                       }) => {
    // --- STATES ---
    const [modalForm, setModalForm] = useState({
        color: "",
        size: "",
        gender: "",
        quantity: 1
    });

    const [tempOrderItems, setTempOrderItems] = useState<TempOrderItem[]>([]);

    // Reset form khi mở Modal
    useEffect(() => {
        if (isOpen && product) {
            setModalForm({
                color: product.colors?.[0] || "",
                size: product.sizes?.[0].size || "",
                gender: product.genders?.[0] || "",
                quantity: product.minimumOrderQuantity || 1
            });
            setTempOrderItems([]); // Reset list tạm
        }
    }, [isOpen, product]);

    // --- LOGIC HANDLERS ---
    const handleAddVariantToTemp = () => {
        if (modalForm.quantity <= 0) return;

        // Logic gộp dòng nếu chọn trùng biến thể (Optional)
        const existingIndex = tempOrderItems.findIndex(item =>
            item.color === modalForm.color &&
            item.size === modalForm.size &&
            item.gender === modalForm.gender
        );

        if (existingIndex > -1) {
            const updatedItems = [...tempOrderItems];
            updatedItems[existingIndex].quantity += modalForm.quantity;
            setTempOrderItems(updatedItems);
        } else {
            const newItem: TempOrderItem = {
                id: Date.now() + Math.random(),
                color: modalForm.color,
                size: modalForm.size,
                gender: modalForm.gender,
                quantity: modalForm.quantity
            };
            setTempOrderItems([...tempOrderItems, newItem]);
        }
    };

    const handleRemoveVariant = (id: number) => {
        setTempOrderItems(tempOrderItems.filter(item => item.id !== id));
    };

    const handleConfirm = () => {
        if (tempOrderItems.length === 0) return;
        onConfirm(tempOrderItems); // Gửi danh sách về cha
    };

    // Tính toán tổng tiền hiển thị
    const tempTotalQty = tempOrderItems.reduce((acc, item) => acc + item.quantity, 0);
    const tempTotalPrice = tempTotalQty * product.price;

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-confirm-cart">
                <div className="modal-header">
                    <h3>Your Order: </h3>
                    <p>{product.name}</p>
                    <button onClick={onClose} className="close-btn">✕</button>
                </div>

                <div className="modal-body">
                    {/* FORM SECTION */}
                    <div className="section-form">
                        <div className="form-row">
                            {product.colors && product.colors.length > 0 && (
                                <div className="form-group">
                                    <label>Color</label>
                                    <select value={modalForm.color} onChange={e => setModalForm({...modalForm, color: e.target.value})}>
                                        {product.colors.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                            )}

                            {product.genders && product.genders.length > 0 && (
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select value={modalForm.gender} onChange={e => setModalForm({...modalForm, gender: e.target.value})}>
                                        {product.genders.map(g => <option key={g} value={g}>{g}</option>)}
                                    </select>
                                </div>
                            )}

                            <div className="form-group">
                                <label>Size</label>
                                <select value={modalForm.size} onChange={e => setModalForm({...modalForm, size: e.target.value})}>
                                    {product.sizes.map(s => <option key={s.size} value={s.size}>{s.size}</option>)}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    type="number" min={1}
                                    value={modalForm.quantity}
                                    onChange={e => setModalForm({...modalForm, quantity: parseInt(e.target.value) || 0})}
                                />
                            </div>

                            <div className="form-group">
                                <label>&nbsp;</label>
                                <button className="btn-add-line" onClick={handleAddVariantToTemp}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* LIST SECTION */}
                    <div className="section-list">
                        <h5>Selected Items ({tempOrderItems.length})</h5>
                        <div className="table-container">
                            {tempOrderItems.length === 0 ? (
                                <p className="empty-text">No items selected yet.</p>
                            ) : (
                                <table className="section-table">
                                    <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Qty</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {tempOrderItems.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                <span className="badge">{item.color}</span>
                                                <span className="badge">{item.gender}</span>
                                                <span className="badge">{item.size}</span>
                                            </td>
                                            <td><strong>{item.quantity}</strong></td>
                                            <td>
                                                <FaTrash className="trash-icon" onClick={() => handleRemoveVariant(item.id)} />
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>

                    {/* FOOTER SECTION */}
                    <div className="section-footer">
                        <div className="summary-info">
                            <div>Logo: <strong>{logoCustomization.logoType}</strong></div>
                            <div className="total-price">Total: {tempTotalPrice.toLocaleString()} VND</div>
                        </div>
                        <div className="action-buttons">
                            <button className="btn-cancel" onClick={onClose}>Cancel</button>
                            <button className="btn-confirm" onClick={handleConfirm} disabled={tempOrderItems.length === 0}>
                                Add All to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;