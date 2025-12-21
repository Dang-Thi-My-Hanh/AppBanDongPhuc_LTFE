import React from 'react';
import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <Header />
            <div className="content">{children}</div>
            <Navbar />
        </div>
    );
};

export default MainLayout;
