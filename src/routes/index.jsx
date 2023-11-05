import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood";

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
            }
        ]
    }
])

export default routes;