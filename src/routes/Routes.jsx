import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import ErrorPage from "../errorPage/ErrorPage";
import Property from "../Pages/Property";
import Visit from "../Pages/Visit";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile";
import NavHouses from "../NavHouse/NavHouses";
import SingleHouseProperty from "../NavHouse/SingleHousesProperty";
import MultyHouseProperty from "../NavHouse/MultyHouseProperty";
import ApartmentHouseProperty from "../NavHouse/ApartmentHouseProperty";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Houses.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/house/:propertyId',
                element: <PrivateRoute><Property></Property></PrivateRoute>,
                loader: () => fetch('/Houses.json')
            },
            {
                path: '/contact',
                element: <PrivateRoute><Visit></Visit></PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/houses',
                element: <NavHouses></NavHouses>
            },
            {
                path: '/single-family/:houseId',
                element: <PrivateRoute><SingleHouseProperty></SingleHouseProperty></PrivateRoute>,
                loader: ()=>fetch('/SingleHouses.json')
            },
            {
                path: '/multy-family/:houseId',
                element: <PrivateRoute><MultyHouseProperty></MultyHouseProperty></PrivateRoute>,
                loader: () =>fetch('/MultiHouses.json')
            },
            {
                path: '/apartment/:houseId',
                element: <PrivateRoute><ApartmentHouseProperty></ApartmentHouseProperty></PrivateRoute>,
                loader: () =>fetch('/ApartmentHouses.json')
            }
        ]
    },
]);
export default router;