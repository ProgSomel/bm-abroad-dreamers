import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"

const MainLayout = () => {
    return (
        <div>
             <Navbar></Navbar>
           
            <div className="min-h-screen  max-w-7xl mx-auto px-4 lg:px-7 ">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};


MainLayout.propTypes = {

};


export default MainLayout;
