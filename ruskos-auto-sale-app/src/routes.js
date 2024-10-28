import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Support from "./pages/Support";


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
    }
];

export default routes