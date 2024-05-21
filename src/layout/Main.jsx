import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen container mx-auto px-4 ">
            <Outlet></Outlet>
            </div>
        </div>
    );
};


Main.propTypes = {

};


export default Main;
