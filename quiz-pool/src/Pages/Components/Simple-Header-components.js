import {Link} from "react-router-dom";
import '../../CSS/HeaderComponents.css';
let simpleHeaderComponents = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-white rounded">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex" href="#" to={"/"}>
                    <img  className={"img"} src="https://img.freepik.com/free-vector/modern-question-mark-help-support-page_1017-27395.jpg?w=826&t=st=1682613782~exp=1682614382~hmac=0a61dfec45cc451f1b1c2dfd302132de9d964895b1e73b2d87a0055ce3e5858c" alt={'Quiz Pool'} width={"60"} height={"60"}/>
                    <p className={"header-text pt-sm-3"}><span className={"he-1"}>Quiz</span> <span className={"he-2"}>Pool</span> </p>
                   </Link>
            </div>
        </nav>
    )
}

export default simpleHeaderComponents;