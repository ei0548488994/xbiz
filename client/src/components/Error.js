import React from "react";
import "../css/style.css";
import "../css/main-color.css";
import "../fonts/fontawesome-webfont.eot";
export default function Error() {
  return (
    <div>
      <div id="wrapper">
        <header id="header-container">
          <div id="header">
            <div className="container">
              {/* Left Side Content */}
              <div className="left-side">
                {/* Logo */}
                <div id="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt />
                  </a>
                </div>
                {/* Mobile Navigation */}
                <div className="mmenu-trigger">
                  <button
                    className="hamburger hamburger--collapse"
                    type="button"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
                {/* Main Navigation */}
                <nav id="navigation" className="style-1">
                  <ul id="responsive">
                    <li>
                      <a href="#">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2-airbnb.html">Home 2 (Airbnb)</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home 5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home 6</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Listings</a>
                      <ul>
                        <li>
                          <a href="#">List Layout</a>
                          <ul>
                            <li>
                              <a href="listings-list-with-sidebar.html">
                                With Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="listings-list-full-width.html">
                                Full Width
                              </a>
                            </li>
                            <li>
                              <a href="listings-list-full-width-with-map.html">
                                Full Width + Map
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Grid Layout</a>
                          <ul>
                            <li>
                              <a href="listings-grid-with-sidebar-1.html">
                                With Sidebar 1
                              </a>
                            </li>
                            <li>
                              <a href="listings-grid-with-sidebar-2.html">
                                With Sidebar 2
                              </a>
                            </li>
                            <li>
                              <a href="listings-grid-full-width.html">
                                Full Width
                              </a>
                            </li>
                            <li>
                              <a href="listings-grid-full-width-with-map.html">
                                Full Width + Map
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Half Screen Map</a>
                          <ul>
                            <li>
                              <a href="listings-half-screen-map-list.html">
                                List Layout
                              </a>
                            </li>
                            <li>
                              <a href="listings-half-screen-map-grid-1.html">
                                Grid Layout 1
                              </a>
                            </li>
                            <li>
                              <a href="listings-half-screen-map-grid-2.html">
                                Grid Layout 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Single Listings</a>
                          <ul>
                            <li>
                              <a href="listings-single-page.html">
                                Single Listing 1
                              </a>
                            </li>
                            <li>
                              <a href="listings-single-page-2.html">
                                Single Listing 2
                              </a>
                            </li>
                            <li>
                              <a href="listings-single-page-3.html">
                                Single Listing 3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Open Street Map</a>
                          <ul>
                            <li>
                              <a href="listings-half-screen-map-list-OpenStreetMap.html">
                                Half Screen Map List Layout
                              </a>
                            </li>
                            <li>
                              <a href="listings-half-screen-map-grid-1-OpenStreetMap.html">
                                Half Screen Map Grid Layout 1
                              </a>
                            </li>
                            <li>
                              <a href="listings-half-screen-map-grid-2-OpenStreetMap.html">
                                Half Screen Map Grid Layout 2
                              </a>
                            </li>
                            <li>
                              <a href="listings-list-full-width-with-map-OpenStreetMap.html">
                                Full Width List
                              </a>
                            </li>
                            <li>
                              <a href="listings-grid-full-width-with-map-OpenStreetMap.html">
                                Full Width Grid
                              </a>
                            </li>
                            <li>
                              <a href="listings-single-page-OpenStreetMap.html">
                                Single Listing
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">User Panel</a>
                      <ul>
                        <li>
                          <a href="dashboard.html">Dashboard</a>
                        </li>
                        <li>
                          <a href="dashboard-messages.html">Messages</a>
                        </li>
                        <li>
                          <a href="dashboard-bookings.html">Bookings</a>
                        </li>
                        <li>
                          <a href="dashboard-wallet.html">Wallet</a>
                        </li>
                        <li>
                          <a href="dashboard-my-listings.html">My Listings</a>
                        </li>
                        <li>
                          <a href="dashboard-reviews.html">Reviews</a>
                        </li>
                        <li>
                          <a href="dashboard-bookmarks.html">Bookmarks</a>
                        </li>
                        <li>
                          <a href="dashboard-add-listing.html">Add Listing</a>
                        </li>
                        <li>
                          <a href="dashboard-my-profile.html">My Profile</a>
                        </li>
                        <li>
                          <a href="dashboard-invoice.html">Invoice</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="current">
                        Pages
                      </a>
                      <div className="mega-menu mobile-styles three-columns">
                        <div className="mega-menu-section">
                          <ul>
                            <li className="mega-menu-headline">Pages #1</li>
                            <li>
                              <a href="pages-user-profile.html">
                                <i className="sl sl-icon-user" /> User Profile
                              </a>
                            </li>
                            <li>
                              <a href="pages-booking.html">
                                <i className="sl sl-icon-check" /> Booking Page
                              </a>
                            </li>
                            <li>
                              <a href="pages-add-listing.html">
                                <i className="sl sl-icon-plus" /> Add Listing
                              </a>
                            </li>
                            <li>
                              <a href="pages-blog.html">
                                <i className="sl sl-icon-docs" /> Blog
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu-section">
                          <ul>
                            <li className="mega-menu-headline">Pages #2</li>
                            <li>
                              <a href="pages-contact.html">
                                <i className="sl sl-icon-envelope-open" />{" "}
                                Contact
                              </a>
                            </li>
                            <li>
                              <a href="pages-coming-soon.html">
                                <i className="sl sl-icon-hourglass" /> Coming
                                Soon
                              </a>
                            </li>
                            <li>
                              <a href="pages-404.html">
                                <i className="sl sl-icon-close" /> 404 Page
                              </a>
                            </li>
                            <li>
                              <a href="pages-masonry-filtering.html">
                                <i className="sl sl-icon-equalizer" /> Masonry
                                Filtering
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu-section">
                          <ul>
                            <li className="mega-menu-headline">Other</li>
                            <li>
                              <a href="pages-elements.html">
                                <i className="sl sl-icon-settings" /> Elements
                              </a>
                            </li>
                            <li>
                              <a href="pages-pricing-tables.html">
                                <i className="sl sl-icon-tag" /> Pricing Tables
                              </a>
                            </li>
                            <li>
                              <a href="pages-typography.html">
                                <i className="sl sl-icon-pencil" /> Typography
                              </a>
                            </li>
                            <li>
                              <a href="pages-icons.html">
                                <i className="sl sl-icon-diamond" /> Icons
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div className="clearfix" />
                {/* Main Navigation / End */}
              </div>
              {/* Left Side Content / End */}
              {/* Right Side Content / End */}
              <div className="right-side">
                <div className="header-widget">
                  <a
                    href="#sign-in-dialog"
                    className="sign-in popup-with-zoom-anim"
                  >
                    <i className="sl sl-icon-login" /> Sign In
                  </a>
                  <a
                    href="dashboard-add-listing.html"
                    className="button border with-icon"
                  >
                    Add Listing <i className="sl sl-icon-plus" />
                  </a>
                </div>
              </div>
              {/* Right Side Content / End */}
              {/* Sign In Popup */}
              <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
                <div className="small-dialog-header">
                  <h3>Sign In</h3>
                </div>
                {/*Tabs */}
                <div className="sign-in-form style-1">
                  <ul className="tabs-nav">
                    <li className>
                      <a href="#tab1">Log In</a>
                    </li>
                    <li>
                      <a href="#tab2">Register</a>
                    </li>
                  </ul>
                  <div className="tabs-container alt">
                    {/* Login */}
                    <div
                      className="tab-content"
                      id="tab1"
                      style={{ display: "none" }}
                    >
                      <form method="post" className="login">
                        <p className="form-row form-row-wide">
                          <label htmlFor="username">
                            Username:
                            <i className="im im-icon-Male" />
                            <input
                              type="text"
                              className="input-text"
                              name="username"
                              id="username"
                              defaultValue
                            />
                          </label>
                        </p>
                        <p className="form-row form-row-wide">
                          <label htmlFor="password">
                            Password:
                            <i className="im im-icon-Lock-2" />
                            <input
                              className="input-text"
                              type="password"
                              name="password"
                              id="password"
                            />
                          </label>
                          <span className="lost_password">
                            <a href="#">Lost Your Password?</a>
                          </span>
                        </p>
                        <div className="form-row">
                          <input
                            type="submit"
                            className="button border margin-top-5"
                            name="login"
                            defaultValue="Login"
                          />
                          <div className="checkboxes margin-top-10">
                            <input
                              id="remember-me"
                              type="checkbox"
                              name="check"
                            />
                            <label htmlFor="remember-me">Remember Me</label>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Register */}
                    <div
                      className="tab-content"
                      id="tab2"
                      style={{ display: "none" }}
                    >
                      <form method="post" className="register">
                        <p className="form-row form-row-wide">
                          <label htmlFor="username2">
                            Username:
                            <i className="im im-icon-Male" />
                            <input
                              type="text"
                              className="input-text"
                              name="username"
                              id="username2"
                              defaultValue
                            />
                          </label>
                        </p>
                        <p className="form-row form-row-wide">
                          <label htmlFor="email2">
                            Email Address:
                            <i className="im im-icon-Mail" />
                            <input
                              type="text"
                              className="input-text"
                              name="email"
                              id="email2"
                              defaultValue
                            />
                          </label>
                        </p>
                        <p className="form-row form-row-wide">
                          <label htmlFor="password1">
                            Password:
                            <i className="im im-icon-Lock-2" />
                            <input
                              className="input-text"
                              type="password"
                              name="password1"
                              id="password1"
                            />
                          </label>
                        </p>
                        <p className="form-row form-row-wide">
                          <label htmlFor="password2">
                            Repeat Password:
                            <i className="im im-icon-Lock-2" />
                            <input
                              className="input-text"
                              type="password"
                              name="password2"
                              id="password2"
                            />
                          </label>
                        </p>
                        <input
                          type="submit"
                          className="button border fw margin-top-10"
                          name="register"
                          defaultValue="Register"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sign In Popup / End */}
            </div>
          </div>
          {/* Header / End */}
        </header>
        <div className="clearfix" />
        {/* Header Container / End */}
        {/* Titlebar
================================================== */}
        <div id="titlebar">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>404 Not Found</h2>
                {/* Breadcrumbs */}
                <nav id="breadcrumbs">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>404 Not Found</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Content
================================================== */}
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section id="not-found" className="center">
                <h2>
                  404 <i className="fa fa-question-circle" />
                </h2>
                <p>
                  We're sorry, but the page you were looking for doesn't exist.
                </p>
                {/* Search */}
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="main-search-input gray-style margin-top-50 margin-bottom-10">
                      <div className="main-search-input-item">
                        <input
                          type="text"
                          placeholder="What are you looking for?"
                          defaultValue
                        />
                      </div>
                      <button className="button">Search</button>
                    </div>
                  </div>
                </div>
                {/* Search Section / End */}
              </section>
            </div>
          </div>
        </div>
        {/* Container / End */}
        {/* Footer
================================================== */}
        <div id="footer" className="margin-top-60">
          {/* Main */}
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-6">
                <img className="footer-logo" src="images/logo.png" alt />
                <br />
                <br />
                <p>
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                  ultricies laoreet ullamcorper phasellus semper.
                </p>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <h4>Helpful Links</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Add Listing</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                <ul className="footer-links">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Our Partners</a>
                  </li>
                  <li>
                    <a href="#">How It Works</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="col-md-3  col-sm-12">
                <h4>Contact Us</h4>
                <div className="text-widget">
                  <span>12345 Little Lonsdale St, Melbourne</span> <br />
                  Phone: <span>(123) 123-456 </span>
                  <br />
                  E-Mail:
                  <span>
                    {" "}
                    <a href="#">office@example.com</a>{" "}
                  </span>
                  <br />
                </div>
                <ul className="social-icons margin-top-20">
                  <li>
                    <a className="facebook" href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="gplus" href="#">
                      <i className="icon-gplus" />
                    </a>
                  </li>
                  <li>
                    <a className="vimeo" href="#">
                      <i className="icon-vimeo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Copyright */}
            <div className="row">
              <div className="col-md-12">
                <div className="copyrights">
                  © 2019 Listeo. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer / End */}
        {/* Back To Top Button */}
        <div id="backtotop">
          <a href="#" />
        </div>
      </div>
      {/* Wrapper / End */}
      {/* Scripts
================================================== */}
      {/* Style Switcher
================================================== */}
      <div id="style-switcher">
        <h2>
          Color Switcher{" "}
          <a href="#">
            <i className="sl sl-icon-settings" />
          </a>
        </h2>
        <div>
          <ul className="colors" id="color1">
            <li>
              <a href="#" className="main" title="Main" />
            </li>
            <li>
              <a href="#" className="blue" title="Blue" />
            </li>
            <li>
              <a href="#" className="green" title="Green" />
            </li>
            <li>
              <a href="#" className="orange" title="Orange" />
            </li>
            <li>
              <a href="#" className="navy" title="Navy" />
            </li>
            <li>
              <a href="#" className="yellow" title="Yellow" />
            </li>
            <li>
              <a href="#" className="peach" title="Peach" />
            </li>
            <li>
              <a href="#" className="beige" title="Beige" />
            </li>
            <li>
              <a href="#" className="purple" title="Purple" />
            </li>
            <li>
              <a href="#" className="celadon" title="Celadon" />
            </li>
            <li>
              <a href="#" className="red" title="Red" />
            </li>
            <li>
              <a href="#" className="brown" title="Brown" />
            </li>
            <li>
              <a href="#" className="cherry" title="Cherry" />
            </li>
            <li>
              <a href="#" className="cyan" title="Cyan" />
            </li>
            <li>
              <a href="#" className="gray" title="Gray" />
            </li>
            <li>
              <a href="#" className="olive" title="Olive" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
