import {Link} from "react-router-dom";
import '../../CSS/HeaderComponents.css';
import React from "react";
import  logos  from "../../assets/Icon/logos.jpg";

let simpleHeaderComponents = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary shadow-lg p-1 mb-2 m-2 bg-white rounded">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex" href="#" to={"/"}>
                    <img src={ logos } alt="quiz" width="50" height="50" className="logo align-top"/>
                </Link>
            </div>
        </nav>
    )
}

export default simpleHeaderComponents;