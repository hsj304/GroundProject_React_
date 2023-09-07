import {Fragment, useEffect} from "react";
import {NavLink} from "react-router-dom";



function Header(){


    return(
        <Fragment>
            <header className="main-header">

                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">

                        <div className="navbar-header">

                            <NavLink className="navbar-brand" to="/" style={{"font-size":"40px","font-weight":"bold"}}>FB Ground</NavLink>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                                <li className="nav-item"><a className="nav-link" href="/ground/list">Ground</a></li>
                                <li className="nav-item"><a className="nav-link" href="/board/list">Board</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>

                <div className="side">
                    <a href="#" className="close-side"><i className="fa fa-times"></i></a>
                    <li className="cart-box">
                        <ul className="cart-list">
                            <li>
                                <a href="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Delica omtantur </a></h6>
                                <p>1x - <span className="price">$80.00</span></p>
                            </li>
                            <li>
                                <a href="#" className="photo"><img src="images/img-pro-02.jpg" className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Omnes ocurreret</a></h6>
                                <p>1x - <span className="price">$60.00</span></p>
                            </li>
                            <li>
                                <a href="#" className="photo"><img src="images/img-pro-03.jpg" className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Agam facilisis</a></h6>
                                <p>1x - <span className="price">$40.00</span></p>
                            </li>
                            <li className="total">
                                <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                <span className="float-right"><strong>Total</strong>: $180.00</span>
                            </li>
                        </ul>
                    </li>
                </div>

            </header>
        </Fragment>


    )
}
export default Header