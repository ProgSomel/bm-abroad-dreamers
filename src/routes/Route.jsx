import { createBrowserRouter } from "react-router-dom";
// import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import Service from "../pages/Service/Service";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/services',
                element: <Service></Service>
            }
        ]
    }
])
export default router;
