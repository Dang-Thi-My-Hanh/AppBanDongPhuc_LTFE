import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountData } from "../data/account";
import "../styles/Account.css";

function Account() {
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="account-page">
            {/* 1. USER PROFILE */}
            <section className="account-profile">
                <img
                    className="avatar"
                    src={accountData.user.avatar}
                    alt="avatar"
                />
                <div className="info">
                    <h3>{accountData.user.name}</h3>
                    <p>{accountData.user.email}</p>
                    <button className="logout-btn" onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            </section>

            {/* 2. TABS */}
            <section className="account-tabs">
                <span className="tab active">Information</span>
                <span className="tab">Purchase History</span>
            </section>

            {/* 3. SHIPPING ADDRESS */}
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
            </section>

            {/* 4. CONTACT INFO */}
            <section className="account-section">
                <div className="section-header">
                    <h4>Contact Information</h4>
                    <button>Edit</button>
                </div>
                <input value={accountData.contact.email} readOnly />
                <input value={accountData.contact.phone} readOnly />
            </section>

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
