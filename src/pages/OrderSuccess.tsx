import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../components/common/Navbar";
import '../styles/orderSuccess.css';

// SVG Check icon (hoặc bạn có thể import từ assets của bạn)
const CheckIcon = () => (
    <svg viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
);

const OrderSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Lấy dữ liệu vừa gửi qua
    const { order } = location.state || {};

    // Nếu người dùng truy cập trực tiếp mà không có data, đẩy về trang chủ
    if (!order) {
        return (
            <div className="success-page">
                <div className="success-container">
                    <h3>No Order Found</h3>
                    <button className="btn-continue" onClick={() => navigate("/")}>Go Home</button>
                </div>
                <Navbar/>
            </div>
        );
    }

    return (
        <div className="success-page">
            <div className="success-container">
                {/* Icon Animated */}
                <div className="success-icon-box">
                    <CheckIcon />
                </div>

                <h1 className="success-title">Order Successful!</h1>
                <p className="success-desc">
                    Thank you <b>{order.address.name}</b>! Your order has been placed successfully and is being processed.
                </p>

                {/* Tóm tắt đơn hàng */}
                <div className="summary-box">
                    <div className="summary-row">
                        <span>Order ID:</span>
                        <b>{order.id}</b>
                    </div>
                    <div className="summary-row">
                        <span>Date:</span>
                        <span>{order.date}</span>
                    </div>
                    <div className="summary-row">
                        <span>Payment:</span>
                        <span style={{textTransform: 'capitalize'}}>{order.paymentMethod}</span>
                    </div>
                    {/* Nếu có ngày dự kiến giao hàng thì hiển thị */}
                    {order.estimatedArrival && (
                        <div className="summary-row">
                            <span>Est. Delivery:</span>
                            <span>{order.estimatedArrival}</span>
                        </div>
                    )}
                    <div className="summary-row total">
                        <span>Total Amount:</span>
                        <span style={{color: '#27ae60'}}>{order.total.toLocaleString()} VND</span>
                    </div>
                </div>

                {/* Các nút điều hướng */}
                <div className="btn-group">
                    <button className="btn-continue" onClick={() => navigate("/cart")}>
                        Continue Shopping
                    </button>

                    <button className="btn-history" onClick={() => navigate("/orders")}>
                        View Order History
                    </button>
                </div>
            </div>

            <Navbar/>
        </div>
    );
};

export default OrderSuccess;