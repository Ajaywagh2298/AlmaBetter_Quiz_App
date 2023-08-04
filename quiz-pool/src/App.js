import './CSS/App.css';
import {useRoutes} from "react-router-dom";
import DashboardPage from "./Pages/Dashboard-Page";
import LoginPage from "./Pages/Login-Page";
import SignUpPage from "./Pages/SignUp-Page";
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
        }
    ]);
};

export default App;
