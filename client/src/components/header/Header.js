import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
/*import './business/Business.css';*/
import BusinessDetails from "../BusinessDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import "../../css/style.css";
import "../../css/main-color.css";
import LogIn from "../LogIn";
import { Button, Modal } from "react-bootstrap";
import HomePage from "../home_page/HomePage";
import MyModal from "../MyModal";
import { connect } from "react-redux";
import { getAllCategories } from "../../redux/actions/category.action";
import logo from "../../images/logo.png";
import img from "../../images/dashboard-avatar.jpg";
import "./header.css";
function Header(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <header
        id="header-container"
        // className="transParentHeader"
        // className={""+setIsHomePage===true?'darkHeader':'transParentHeader'}
        // style={{backgroundColor:backgroundColor}}
      >
        <div id="header" className="not-sticky">
          <div className="container d-flex justify-content-between">
            <div className="left-side d-flex">
              <div id="logo">
                <Link to="/" class="nav-link">
                  <img src={logo} alt />
                </Link>
              </div>
              
              {/* <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div> */}
            </div>
            <div className="right-side d-flex">
            <div className="user-menu">
                <div className="user-name">
                  <span>
                    <img src={img} alt />
                  </span>
                  Hi, Tom!
                </div>
              </div>
              <div className="header-widget align-items-center justify-content-center d-flex m-0 p-3 pr-5 pl-5">
                <a
                  href="#sign-in-dialog"
                  class="nav-link"
                  class="sign-in popup-with-zoom-anim"
                  onClick={() => setModalShow(true)}
                >
                  כניסה<i class="fa fa-sign-in" aria-hidden="true"></i>
                </a>
                <MyModal show={modalShow} onHide={() => setModalShow(false)} />
              </div>
            </div>
            {/* <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide"> */}
            {/* <div className="small-dialog-header">
                  <h3>Sign In</h3>
                </div> */}
            {/* <div className="sign-in-form style-1">
                  <ul className="tabs-nav">
                    <li className><a href="#tab1">Log In</a></li>
                    <li><a href="#tab2">Register</a></li>
                  </ul>
                  <div className="tabs-container alt">
                  
                  </div>
                </div> */}
            {/* </div> */}
          </div>
        </div>
      </header>
      {/* <div className="clearfix" /> */}
    </>
  );
}

export default connect(
  (state) => {
    return {
      category: state.category.category,
    };
  },
  (disatch) => {
    return {
      getAllCategories: function () {
        disatch(getAllCategories());
      },
    };
  }
)(Header);
