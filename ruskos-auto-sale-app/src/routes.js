import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Support from "./pages/Support";
import CarSellerPm from "./pages/CarSellerPm";


const routes = [
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorPage />
    },
    {
        path:'/about',
        element:<About/>,
        errorElement:<ErrorPage />
    },
    {
        path:'/support',
        element:<Support/>,
        errorElement:<ErrorPage />
    },
    {
        path:'/carseller/:id',
        element:<CarSellerPm />,
        errorElement:<ErrorPage />
    }

];

export default routes
