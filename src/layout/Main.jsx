import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className="">
            <Navbar></Navbar>
            </div>
            <div className="min-h-screen  ">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};


Main.propTypes = {

};


export default Main;
