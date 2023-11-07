import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood";
import AvailableFoods from "../pages/AvailableFoods";
import AvailableFoodDetail from "../components/AvailableFoodDetail";
import ManageMyFood from "../pages/ManageMyFood";
import UpdateFood from "../components/UpdateFood";
import ManageSingleFood from "../components/ManageSingleFood";
import MyFoodRequest from "../pages/MyFoodRequest";

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
                element : <AvailableFoods></AvailableFoods>,
                loader :() => fetch('https://a11-hunger-help-server.vercel.app/foods')
            },
            {
                path : "availableFoods/details/:id",
                element : <PrivateRoute><AvailableFoodDetail></AvailableFoodDetail></PrivateRoute>,
                loader :({params}) => fetch(`https://a11-hunger-help-server.vercel.app/foods/${params.id}`)
            },
            {
                path : "managemyfoods",
                element : <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>,
                loader :() => fetch('https://a11-hunger-help-server.vercel.app/foods')
            },
            {
                path : "managemyfoods/update/:id",
                element : <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader :({params}) => fetch(`https://a11-hunger-help-server.vercel.app/foods/${params.id}`)
            },
            {
                path : "managemyfoods/manage/:id",
                element : <PrivateRoute><ManageSingleFood></ManageSingleFood></PrivateRoute>,
                loader :({params}) => fetch(`https://a11-hunger-help-server.vercel.app/reqfoods?foodId=${params.id}`)

            },
            {
                path : "myfoodrequest/:mail",
                element : <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>,
                loader :({params}) => fetch(`https://a11-hunger-help-server.vercel.app/reqfoods?reqEmail=${params.mail}`)

            }
        ]
    }
])

export default routes;