import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood";
import AvailableFoods from "../pages/AvailableFoods";
import AvailableFoodDetail from "../components/AvailableFoodDetail";

const routes = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                index : true,
                // path : "/",
                element : <Home></Home>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            },
            {
                path : 'addfood',
                element : <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path : 'availableFoods',
                element : <PrivateRoute><AvailableFoods></AvailableFoods></PrivateRoute>,
                loader :() => fetch('http://localhost:5000/foods')
            },
            {
                path : "availableFoods/details/:id",
                element : <PrivateRoute><AvailableFoodDetail></AvailableFoodDetail></PrivateRoute>,
                loader :({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            }
        ]
    }
])

export default routes;