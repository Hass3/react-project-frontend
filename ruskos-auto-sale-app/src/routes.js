import Home from "./pages/Home";
import About from "./pages/About";
import ListCar from './pages/ListCar'
import ErrorPage from "./pages/ErrorPage";


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
        path:'/listcar',
        element:<ListCar/>,
        errorElement:<ErrorPage />
    }
];

export default routes