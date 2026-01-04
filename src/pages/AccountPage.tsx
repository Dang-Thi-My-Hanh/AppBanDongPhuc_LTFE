import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountData } from "../data/account";
import {orderHistory} from "../data/orderHistory";
import "../styles/account.css";

function Account() {
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };
    const [activeTab, setActiveTab] = useState("info");
    const deliveredOrders = orderHistory.filter((orderHistory: { status: string; }) => orderHistory.status === "Delivered");

    return (
        <div className="account-page">
            {/* 1. USER PROFILE */}
            <section className="account-profile">
                <img className="avatar" src={accountData.user.avatar} alt="avatar"/>
                <div className="info">
                    <h3>{accountData.user.name}</h3>
                    <p>{accountData.user.email}</p>
                    <button className="logout-btn" onClick={handleLogout}>Log out</button>
                </div>
            </section>

            {/* 2. TABS */}
            <section className="account-tabs">
                <span className={`tab ${activeTab === "info" ? "active" : ""}`}
                    onClick={() => setActiveTab("info")}>Information</span>
                <span className={`tab ${activeTab === "history" ? "active" : ""}`}
                    onClick={() => setActiveTab("history")}>Purchase History</span>
            </section>
            {/* 3. SHIPPING ADDRESS */}
            {activeTab === "info" && (
                <section className="account-section">
                    <div className="section-header">
                        <h4>Shipping Address</h4>
                        <button>Edit</button>
                    </div>
                    <p className="address-text">{accountData.address.text}</p>
                    <img
                        className="map-placeholder"
                        src={accountData.address.map}
                        alt="map"
                    />

            {/* 4. CONTACT INFO */}
                    <section className="account-section">
                        <div className="section-header">
                            <h4>Contact Information</h4>
                            <button>Edit</button>
                        </div>
                        <input className="contact-input" value={accountData.contact.email} readOnly />
                        <input className="contact-input" value={accountData.contact.phone} readOnly />
                    </section>
                </section>
            )}
            {/* 4. PURCHASE HISTORY */}
            {activeTab === "history" && (
                <section className="purchase-history">
                    {deliveredOrders.length === 0 ? (
                        <p>Không có đơn hàng đã giao</p>
                    ) : (
                        deliveredOrders.map((order) => (
                            <div className="order-card" key={order.id}>
                                <div className="order-header">
                                    <img
                                        src={order.product.images[0]}
                                        alt={order.product.name}
                                        className="order-image"
                                    />
                                    <div className="order-info">

                                        <h5>{order.product.name}</h5>
                                        <p className="order-price">{order.product.price.toLocaleString()} VND</p>
                                        <p className="order-date">Order date: {order.orderDate || "14 Sep 2025"}</p>
                                    </div>
                                </div>

                                <div className="order-details">
                                    <div className="order-detail-item">
                                        <span className="detail-label">Size</span>
                                        <div className="detail-value">
                                            {order.items.map((item, index) => (
                                            <p key={index}>{item.size}</p>))}
                                    </div>

                                    </div>
                                    <div className="order-detail-item">
                                        <span className="detail-label">Quantity</span>
                                        <div className="detail-value">
                                            {order.items.map((item, index) => (
                                                <p key={index}>{item.quantity}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="order-detail-item">
                                        <span className="detail-label">Gender</span>
                                        <div className="detail-value">
                                            {order.items.map((item, index) => (
                                                <p key={index}>{item.gender}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="order-detail-item">
                                        <span className="detail-label">Logo type</span>
                                        <div className="detail-value logo">
                                            {order.logo ? "Custom logo" : "No logo"}
                                        </div>
                                    </div>
                                    <div className={"order-detail-price"}>
                                        <span className="left">Total quantity: {order.quantity || 1}</span>
                                        <span className="right">Total: <strong>{((order.quantity || 1) * order.product.price).toLocaleString()} VND</strong></span>
                                    </div>
                                </div>

                                <div className="order-footer">
                                    <div className="order-actions">
                                        <button className="btn-outline">Trả hàng / hoàn tiền</button>
                                        <button className="btn-primary">Đánh giá</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            )}


            {/* 5. PAYMENT METHODS */}
            <section className="account-section">
                <h4>Payment Methods</h4>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "bank"}
                        onChange={() => setPaymentMethod("bank")}
                    />
                    <span className="payment-text">Bank Transfer (BIDV)</span>
                </label>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "online"}
                        onChange={() => setPaymentMethod("online")}
                    />
                    <span className="payment-text">Online Payment</span>
                </label>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                    />
                    <span className="payment-text">Cash on Delivery</span>
                </label>
            </section>

            {/* 6. CONTACT US */}
            <section className="account-support">
                <h4>Contact us</h4>
                <p>📧 Email: support@domain.com</p>
                <p>📞 Hotline: 0777777777</p>
                <p>⏱ Support Hours: 8:30 – 18:00 (Mon–Fri)</p>
                <button>💬 Chat Now</button>
            </section>
        </div>
    );
}

export default Account;
