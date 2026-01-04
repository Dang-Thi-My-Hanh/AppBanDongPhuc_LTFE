import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/account.css";
import { accountData } from "../data/account";


function Account() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [activeTab, setActiveTab] = useState("info");
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const DEFAULT_AVATAR = "/images/avtAccount/avt.png";
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
        if (!storedUser) {
            setUser({
                username: accountData.user.name,
                email: accountData.user.email,
                avatar: accountData.user.avatar,
                address: { text: accountData.address.text },
                contact: { phone: accountData.contact.phone },
                payment: accountData.payment,
                isMock: true,
            });
            setPaymentMethod(accountData.payment);
            return;
        }
        if (storedUser.isLogin) {
            setUser(storedUser);
            setPaymentMethod(storedUser.payment || "bank");
            return;
        }

        // 👉 CÓ USER NHƯNG CHƯA LOGIN → VẪN CHO XEM MOCK
        setUser({
            username: accountData.user.name,
            email: accountData.user.email,
            avatar: accountData.user.avatar,
            address: accountData.address,
            contact: accountData.contact,
            payment: accountData.payment,
            isMock: true,
        });

        setPaymentMethod(accountData.payment);
        /*if (storedUser && storedUser.isLogin === false) {
            navigate("/login");
            return;
        }*/
        setUser(storedUser);
    }, [navigate]);

    const handleLogout = () => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");

        if (storedUser) {
            localStorage.setItem(
                "user",
                JSON.stringify({ ...storedUser, isLogin: false })
            );
        }

        navigate("/login");
    };

    if (!user) return null;
    console.log("accountData:", accountData);

    return (
        <div className="account-page">
            {/* PROFILE */}
            <section className="account-profile">
                <img
                    className="avatar"
                    src={user.avatar && user.avatar.trim() !== "" ? user.avatar : DEFAULT_AVATAR}
                    alt="avatar"
                />
                <div className="info">
                    <h3>{user.username}</h3>
                    <p>{user.email}</p>
                    <button className="logout-btn" onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            </section>
            {/* TABS */}
            <section className="account-tabs">
        <span
            className={`tab ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
        >
          Information
        </span>
                <span
                    className={`tab ${activeTab === "history" ? "active" : ""}`}
                    onClick={() => setActiveTab("history")}
                >
          Purchase History
        </span>
            </section>

            {/* ACCOUNT INFO */}
            {activeTab === "info" && (
                <section className="account-section">
                    {/* SHIPPING ADDRESS */}
                    <div className="section-header">
                        <h4>Shipping Address</h4>
                        <button>Edit</button>
                    </div>
                    <p className="address-text">
                        {user.address?.text || "Chưa nhập địa chỉ"}
                    </p>

                    {/* CONTACT INFO */}
                    <div className="section-header" style={{ marginTop: "16px" }}>
                        <h4>Contact Information</h4>
                        <button>Edit</button>
                    </div>
                    <input
                        className="contact-input"
                        value={user.contact?.phone || "Chưa nhập số điện thoại"}
                        readOnly
                    />
                    <input
                        className="contact-input"
                        value={user.email}
                        readOnly
                    />
                </section>
            )}

            {/* PURCHASE HISTORY */}
            {activeTab === "history" && (
                <section className="purchase-history">
                    <p>Chưa có đơn hàng</p>
                </section>
            )}

            {/* PAYMENT METHODS */}
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


            {/* CONTACT SUPPORT */}
            <section className="account-support">
                <h4>Contact us</h4>
                <p>
                    <i className="fa fa-envelope" style={{ marginRight: "6px" }}></i>
                    Email: support@domain.com
                </p>
                <p>
                    <i className="fa fa-phone" style={{ marginRight: "6px" }}></i>
                    Hotline: 0777777777
                </p>
                <p>
                    <i className="fa fa-clock-o" style={{ marginRight: "6px" }}></i>
                    Support Hours: 8:30 – 18:00 (Mon–Fri)
                </p>
                <button>
                    <i className="fa fa-comment" style={{ marginRight: "6px" }}></i>
                    Chat Now
                </button>
            </section>

        </div>

    );
}

export default Account;
