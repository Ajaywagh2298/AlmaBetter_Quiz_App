import './CSS/App.css';
import {useRoutes} from "react-router-dom";
import LoginPage from "./Pages/Login-Page";
const App = () => {
    return useRoutes([
        {
            path: "/",
            element: <LoginPage/>,
        },

    ]);
};

export default App;
