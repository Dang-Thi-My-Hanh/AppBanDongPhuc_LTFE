import { Outlet } from "react-router-dom";

const WelcomeLayout = () => {
    return (
        <div className="welcome-layout">
            <Outlet />
        </div>
    );
};

export default WelcomeLayout;
