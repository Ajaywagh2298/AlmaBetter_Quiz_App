import './CSS/App.css';
import {useRoutes} from "react-router-dom";
import DashboardPage from "./Pages/Dashboard-Page";
import LoginPage from "./Pages/Login-Page";
import SignUpPage from "./Pages/SignUp-Page";
import UserDataPage from "./Pages/userData-Page";
const App = () => {
    return useRoutes([
        {
            path: "/",
            element: <LoginPage/>,
        },{
            path: "/dashboard",
            element: <DashboardPage/>,
        },{
            path:"/signup",
            element: <SignUpPage/>,
        },{
            path:'/user-table',
            element:<UserDataPage/>,
        }
    ]);
};

export default App;
