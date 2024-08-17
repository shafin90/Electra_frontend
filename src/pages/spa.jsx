import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomNavbar from './CommonComponent/Navbar/Navbar';
import Footer from './CommonComponent/Footer/Footer';


const SPA = () => {
    return (
        <div>
            <CustomNavbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default SPA;