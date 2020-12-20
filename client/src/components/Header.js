import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
/*import './business/Business.css';*/
import BusinessDetails from "./BusinessDetails";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import '../css/style.css'
import '../css/main-color.css'
import LogIn from './LogIn';
import { Button, Modal } from 'react-bootstrap';
import HomePage from "./home_page/HomePage";
import MyModal from "./MyModal";
import { connect } from 'react-redux';
import { getAllCategories } from '../redux/actions/category.action';
import logo from '../images/logo.png'
function Header(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <header id="header-container">
        <div id="header" className="not-sticky">
          <div className="container">
            <div className="left-side">
              <div id="logo">
                <Link to="/" class="nav-link"><img src={logo} alt /></Link>
              </div>
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
              <nav id="navigation" className="style-1">
                <ul id="responsive">
                  <li>
                    {/* <Link to="/HomePage" class="nav-link">דף הבית<span class="sr-only">(current)</span></Link> */}
                  </li>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>
            <div className="right-side">
              <div className="header-widget">
                <label>
                  <a href="#sign-in-dialog" class="nav-link" class="sign-in popup-with-zoom-anim"
                    onClick={() => setModalShow(true)}><i class="sl sl-icon-login"></i> כניסה</a>
                </label>
                <MyModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
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
      category: state.category.category
    }
  },
  (disatch) => {
    return {
      getAllCategories: function () {
        disatch(getAllCategories())
      }
    }
  }
)(Header);

