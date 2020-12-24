import React, { useState, useEffect } from "react";
import '../css/style.css'
import '../css/main-color.css'
import Pricing from "./Pricing";
import Footer from "./Footer";
import Reviews from './Reviews';
import AddReviews from './AddReviews';
import OpenHours from "./OpenHours";
import Booking from "./Booking";
import { connect } from 'react-redux';
import Contact from './Contact';
import { withRouter, useParams } from 'react-router-dom';
import MapContainer from './MapContainer'
import { getBusinessBybId } from '../redux/actions/business.action'

// import { getAllCategories, setSelectedCategoryId, setCategory, getResultOfSearchByCategory } from '../redux/actions/category.action';
const BusinessDetails = (props) => {
  debugger
  let { id } = useParams();
  console.log(id);
  console.log(props.CheckedBusinessDetails)
  // debugger;
  //localStorage.setItem('lat', props.CheckedBusinessDetails["location"]["lat"]);
  //localStorage.setItem('lng', props.CheckedBusinessDetails["location"]["lng"]);
  useEffect(() => {
    if (id) {
      debugger
      props.getBusinessById(id)
      console.log(props.CheckedBusinessDetails)
    }
  }, []);
  return (
    <>
      {/* {id ? props.getBusinessById(id) : ""} */}
      <div>
        <title>Listeo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/main-color.css" id="colors" />
        {/* Wrapper */}
        <div id="wrapper">
          <div className="listing-slider mfp-gallery-container margin-bottom-0">
            <a href="images/single-listing-01.jpg" data-background-image="images/single-listing-01.jpg" className="item mfp-gallery" title="Title 1" />
            <a href="images/single-listing-02.jpg" data-background-image="images/single-listing-02.jpg" className="item mfp-gallery" title="Title 3" />
            <a href="images/single-listing-03.jpg" data-background-image="images/single-listing-03.jpg" className="item mfp-gallery" title="Title 2" />
            <a href="images/single-listing-04.jpg" data-background-image="images/single-listing-04.jpg" className="item mfp-gallery" title="Title 4" />
          </div>
          {/* <h1>{props.CheckedBusinessDetails}</h1> */}

          <div className="container">
            <div className="row sticky-wrapper">
{/* <p>{props.CheckedBusinessDetails}</p> */}
              <div className="col-lg-8 col-md-8 padding-right-30">
                {/* Titlebar */}
                <div id="titlebar" className="listing-titlebar">
                  {props.CheckedBusinessDetails?
                    <div className="listing-titlebar-title">
                      <h2>{props.CheckedBusinessDetails.businessName}<span className="listing-tag">{props.CheckedBusinessDetails.description}</span></h2>
                      <span>
                        <a href="#listing-location" className="listing-address">
                          <i className="fa fa-map-marker" />
                          {props.CheckedBusinessDetails.adress ?
                            props.CheckedBusinessDetails.adress.street +
                            " " + props.CheckedBusinessDetails.adress.city
                            + " " + props.CheckedBusinessDetails.adress.state : ""}
                        </a>
                      </span>
                      <div className="star-rating" data-rating={5}>
                        <div className="rating-counter"><a href="#listing-reviews">(31 תגובות)</a></div>
                      </div>
                    </div>
                  :""}</div>
                
                {/* Listing Nav */}
                <div id="listing-nav" className="listing-nav-container">
                  <ul className="listing-nav">
                    <li><a href="#listing-overview" className="active">
                      סקירה כללית</a></li>
                    <li><a href="#listing-pricing-list">מחירים</a></li>
                    <li><a href="#listing-location">מיקום</a></li>
                    <li><a href="#listing-reviews">תגובות</a></li>
                    <li><a href="#add-review">הוסף תגובה</a></li>
                  </ul>
                </div>
                {/* Overview */}
                <div id="listing-overview" className="listing-section">
                  {/* Description */}
                  <p>
                    שלום אני עדין לא יודעת מה התוכן שאמור ליהות כתוב כאן אבל בגלל שאני רוצה לבנות העיצוב רצת שיראה נורמלי אז אני כותבת סתם תוכן אח"כ אני ישנה אותו ע"י קבלת התוכן מהשרת
            </p>
                  <p>
                    שלום אני עדין לא יודעת מה התוכן שאמור ליהות כתוב כאן אבל בגלל שאני רוצה לבנות העיצוב רצת שיראה נורמלי אז אני כותבת סתם תוכן אח"כ אני ישנה אותו ע"י קבלת התוכן מהשרת
            </p>
                  {/* Listing Contacts */}
                  <div className="listing-links-container">
                    <ul className="listing-links contact-links">
                      <li><a href="tel:12-345-678" className="listing-links"><i className="fa fa-phone" />{props.CheckedBusinessDetails.phone}</a></li>
                      <li><a href="mailto:mail@example.com" className="listing-links"><i className="fa fa-envelope-o" /> {props.CheckedBusinessDetails.email}</a>
                      </li>
                      <li><a href="#" target="_blank" className="listing-links"><i className="fa fa-link" /> www.example.com</a></li>
                    </ul>
                    <div className="clearfix" />
                    <ul className="listing-links">
                      <li><a href="#" target="_blank" className="listing-links-fb"><i className="fa fa-facebook-square" /> Facebook</a></li>
                      <li><a href="#" target="_blank" className="listing-links-yt"><i className="fa fa-youtube-play" /> YouTube</a></li>
                      <li><a href="#" target="_blank" className="listing-links-ig"><i className="fa fa-instagram" /> Instagram</a></li>
                      <li><a href="#" target="_blank" className="listing-links-tt"><i className="fa fa-twitter" /> Twitter</a></li>
                    </ul>
                    <div className="clearfix" />
                  </div>
                  <div className="clearfix" />
                  {/* Amenities */}
                  <h3 className="listing-desc-headline">שירותים</h3>
                  <ul className="listing-features checkboxes margin-top-0">
                    <li>מעלית בבנין</li>
                    <li>פינת עבודה ידידותית</li>
                    <li>הזמנה מיידית</li>
                    <li>חניה חינם במקום</li>
                    <li> אינטרנט אלחוטי</li>
                    <li> חניה חינם ברחוב</li>
                  </ul>
                </div>
                {/* Food Menu */}
                <Pricing />
                {/* Food Menu / End */}
                {/* Location */}
                {/* <Location /> */}
                <div id="listing-location" className="listing-section">
                  <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>
                  <div id="singleListingMap-container">
                    <div id="singleListingMap" />
                    <a href="#" id="streetView">Street View</a>
                  </div>
                </div>
                <MapContainer />
                {/* Reviews */}
                <div id="listing-reviews" className="listing-section">
                  <h3 className="listing-desc-headline margin-top-75 margin-bottom-20">תגובות <span>(12)</span></h3>
                  {/* Rating Overview */}
                  <div className="rating-overview">
                    <div className="rating-overview-box">
                      <span className="rating-overview-box-total">4.2</span>
                      <span className="rating-overview-box-percent">out of 5.0</span>
                      <div className="star-rating" data-rating={5} />
                    </div>
                    <div className="rating-bars">
                      <div className="rating-bars-item">
                        <span className="rating-bars-name">Service <i className="tip" data-tip-content="Quality of customer service and attitude to work with you" /></span>
                        <span className="rating-bars-inner">
                          <span className="rating-bars-rating" data-rating="4.2">
                            <span className="rating-bars-rating-inner" />
                          </span>
                          <strong>4.2</strong>
                        </span>
                      </div>
                      <div className="rating-bars-item">
                        <span className="rating-bars-name">Value for Money <i className="tip" data-tip-content="Overall experience received for the amount spent" /></span>
                        <span className="rating-bars-inner">
                          <span className="rating-bars-rating" data-rating="4.8">
                            <span className="rating-bars-rating-inner" />
                          </span>
                          <strong>4.8</strong>
                        </span>
                      </div>
                      <div className="rating-bars-item">
                        <span className="rating-bars-name">Location <i className="tip" data-tip-content="Visibility, commute or nearby parking spots" /></span>
                        <span className="rating-bars-inner">
                          <span className="rating-bars-rating" data-rating="3.7">
                            <span className="rating-bars-rating-inner" />
                          </span>
                          <strong>3.7</strong>
                        </span>
                      </div>
                      <div className="rating-bars-item">
                        <span className="rating-bars-name">Cleanliness <i className="tip" data-tip-content="The physical condition of the business" /></span>
                        <span className="rating-bars-inner">
                          <span className="rating-bars-rating" data-rating={4.0}>
                            <span className="rating-bars-rating-inner" />
                          </span>
                          <strong>4.0</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Rating Overview / End */}
                  <div className="clearfix" />
                  {/* Reviews */}
                  <Reviews />
                  {/* Pagination */}
                  <div className="clearfix" />
                  <div className="row">
                    <div className="col-md-12">
                      {/* Pagination */}
                      <div className="pagination-container margin-top-30">
                        <nav className="pagination">
                          <ul>
                            <li><a href="#" className="current-page">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#"><i className="sl sl-icon-arrow-right" /></a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                  {/* Pagination / End */}
                </div>
                {/* Add Review Box */}
                <AddReviews />
                {/* Add Review Box / End */}
              </div>
              {/* Sidebar*/}
              <div className="col-lg-4 col-md-4 margin-top-75 sticky">
                {/* Verified Badge */}
                <div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
                  <i className="sl sl-icon-check" /> Verified Listing
          </div>
                {/* Book Now */}
                <Booking />
                {/* Book Now / End */}
                {/* Coupon Widget */}
                <div className="coupon-widget" style={{ backgroundImage: 'url(http://localhost/listeo_html/images/single-listing-01.jpg)' }}>
                  <a href="#" className="coupon-top">
                    <span className="coupon-link-icon" />
                    <h3>Order 1 burger and get 50% off on second!</h3>
                    <div className="coupon-valid-untill">Expires 25/10/2019</div>
                    <div className="coupon-how-to-use"><strong>How to use?</strong> Just show us this coupon on a screen of your smartphone!</div>
                  </a>
                  <div className="coupon-bottom">
                    <div className="coupon-scissors-icon" />
                    <div className="coupon-code">L1ST30</div>
                  </div>
                </div>
                {/* Opening Hours */}
                <OpenHours />
                {/* Opening Hours / End */}
                {/* Contact */}
                <Contact />
                {/* Contact / End*/}
                {/* Share / Like */}
                <div className="listing-share margin-top-40 margin-bottom-40 no-border">
                  <button className="like-button"><span className="like-icon" />הוסף את הרישום לסימניות</button>
                  <span> 159 אנשים סימנו את המקום הזה</span>
                  {/* Share Buttons */}
                  <ul className="share-buttons margin-top-40 margin-bottom-0">
                    <li><a className="fb-share" href="#"><i className="fa fa-facebook" /> Share</a></li>
                    <li><a className="twitter-share" href="#"><i className="fa fa-twitter" /> Tweet</a></li>
                    <li><a className="gplus-share" href="#"><i className="fa fa-google-plus" /> Share</a></li>
                    {/* <li><a class="pinterest-share" href="#"><i class="fa fa-pinterest-p"></i> Pin</a></li> */}
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
              {/* Sidebar / End */}
            </div>
          </div>
          {/* Footer */}
          <Footer />
          {/* Footer / End */}
          {/* Back To Top Button */}
          <div id="backtotop"><a href="#" /></div>
          {/* Booking Sticky Footer */}
          <div className="booking-sticky-footer">
            <div className="container">
              <div className="bsf-left">
                <h4>Starting from $29</h4>
                <div className="star-rating" data-rating={5}>
                  <div className="rating-counter" />
                </div>
              </div>
              <div className="bsf-right">
                <a href="#booking-widget-anchor" className="button">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <div id="style-switcher">
          <h2>Color Switcher <a href="#"><i className="sl sl-icon-settings" /></a></h2>
          <div>
            <ul className="colors" id="color1">
              <li><a href="#" className="main" title="Main" /></li>
              <li><a href="#" className="blue" title="Blue" /></li>
              <li><a href="#" className="green" title="Green" /></li>
              <li><a href="#" className="orange" title="Orange" /></li>
              <li><a href="#" className="navy" title="Navy" /></li>
              <li><a href="#" className="yellow" title="Yellow" /></li>
              <li><a href="#" className="peach" title="Peach" /></li>
              <li><a href="#" className="beige" title="Beige" /></li>
              <li><a href="#" className="purple" title="Purple" /></li>
              <li><a href="#" className="celadon" title="Celadon" /></li>
              <li><a href="#" className="red" title="Red" /></li>
              <li><a href="#" className="brown" title="Brown" /></li>
              <li><a href="#" className="cherry" title="Cherry" /></li>
              <li><a href="#" className="cyan" title="Cyan" /></li>
              <li><a href="#" className="gray" title="Gray" /></li>
              <li><a href="#" className="olive" title="Olive" /></li>
            </ul>
          </div>
        </div>
        {/* Style Switcher / End */}
      </div>

    </>
  );
}
export default connect(
  (state) => {
    return {
      CheckedBusinessDetails: state.business.CheckedBusinessDetails,
      // category: state.category.category,
      // selectedCategoryId: state.category.selectedCategoryId
    }
  },
  (disatch) => {
    return {
      // getAllCategories: function () {
      //   disatch(getAllCategories())
      // },
      // setSelectedCategory: function (id) {
      //   disatch(setSelectedCategoryId(id))
      // },
      // getResultOfSearchBYCategory: function (text) {
      //   disatch(getResultOfSearchByCategory(text))
      // }
      getBusinessById: function (id) {
        debugger
        disatch(getBusinessBybId(id))
      }
    }
  }
)(withRouter(BusinessDetails));
