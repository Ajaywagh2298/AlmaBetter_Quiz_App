import './CSS/App.css';
import {useRoutes} from "react-router-dom";
import DashboardPage from "./Pages/Dashboard-Page";
const App = () => {
    return useRoutes([
        {
            path: "/",
            element: <DashboardPage/>,
        },

    ]);
};

export default App;
