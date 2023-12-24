import React, { useEffect } from 'react';
import Navbar from '../pages/share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../pages/share/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
    useEffect(() => {
        AOS.init(
            {
                offset: 200,
                duration: 600,
                easing: 'ease-in-sine',
                delay: 100, 
            }
        );
        AOS.refresh();
      }, []);
    return (
        <div>  <ToastContainer></ToastContainer>
        
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;