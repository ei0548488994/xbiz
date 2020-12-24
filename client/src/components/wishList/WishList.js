import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/main-color.css";
import "../../css/style.css";
import './wishList.css'
import { connect } from 'react-redux';
import { deleteFavoraitsByIdBussiness } from '../../redux/actions/business.action'

 function WishList(props) {
    return (
        <>
        {/* Content
	================================================== */}
<div className="dashboard-content">
  {/* Titlebar */}
  <div id="titlebar">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                  <h2 className="">מועדפים</h2>
                  {/* Breadcrumbs */}
                  <div id="breadcrumbs">
                    <nav className="">
                      <ul>
                        <li>
                          <a href="#">דף הבית</a>
                        </li>
                        <li className="liIcon">
                          <a href="#">ראשי</a>
                        </li>
                        <li className="liIcon">מועדפים</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
  <div className="row">
    {/* Listings */}
    <div className="col-lg-12 col-md-12">
      <div className="dashboard-list-box margin-top-0">
        <h4>רשימת מועדפים</h4>
        <div>
      <h1>wish list here</h1>
         <button type="button" onClick={() => { props.deleteFavoraitsByIdBussine("5fde85af7887212f243ab525", "5fcfa1925163a603f8092c96") }}>click to delete</button>
    </div>
        <ul>
          <li className="d-flex justify-content-between">
            <div className="list-box-listing">
              <div className="list-box-listing-img"><a href="#"><img src="images/listing-item-02.jpg" alt /></a></div>
              <div className="list-box-listing-content">
                <div className="inner">
                  <h3>Sticky Band</h3>
                  <span>Bishop Avenue, New York</span>
                  <div className="star-rating" data-rating={5.0}>
                    <div className="rating-counter">(23 reviews)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons-to-right">
              <a href="#" className="button gray d-flex align-items-center">מחיקה<i className="sl sl-icon-close" /> </a>
            </div>
          </li>
          <li className="d-flex justify-content-between">
            <div className="list-box-listing">
              <div className="list-box-listing-img"><a href="#"><img src="images/listing-item-02.jpg" alt /></a></div>
              <div className="list-box-listing-content">
                <div className="inner">
                  <h3>Sticky Band</h3>
                  <span>Bishop Avenue, New York</span>
                  <div className="star-rating" data-rating={5.0}>
                    <div className="rating-counter">(23 reviews)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons-to-right">
              <a href="#" className="button gray d-flex align-items-center">מחיקה<i className="sl sl-icon-close" /> </a>
            </div>
          </li>
          <li className="d-flex justify-content-between">
            <div className="list-box-listing">
              <div className="list-box-listing-img"><a href="#"><img src="images/listing-item-02.jpg" alt /></a></div>
              <div className="list-box-listing-content">
                <div className="inner">
                  <h3>Sticky Band</h3>
                  <span>Bishop Avenue, New York</span>
                  <div className="star-rating" data-rating={5.0}>
                    <div className="rating-counter">(23 reviews)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons-to-right">
              <a href="#" className="button gray d-flex align-items-center">מחיקה<i className="sl sl-icon-close" /> </a>
            </div>
          </li>
          <li className="d-flex justify-content-between">
            <div className="list-box-listing">
              <div className="list-box-listing-img"><a href="#"><img src="images/listing-item-02.jpg" alt /></a></div>
              <div className="list-box-listing-content">
                <div className="inner">
                  <h3>Sticky Band</h3>
                  <span>Bishop Avenue, New York</span>
                  <div className="star-rating" data-rating={5}>
                    <div className="rating-counter">(23 reviews)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons-to-right">
              <a href="#" className="button gray d-flex align-items-center">מחיקה<i className="sl sl-icon-close" /> </a>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
    {/* Copyrights */}
    <div className="col-md-12">
      <div className="copyrights">© 2019 Listeo. All Rights Reserved.</div>
    </div>
  </div>
</div>
{/* Content / End */}
<script>
<script src="https://use.fontawesome.com/495275a2d2.js"></script>
</script>
        </>
    )
}

export default connect(
  (state) => {
    return {

    }
  },
  (disatch) => {
    return {
      deleteFavoraitsByIdBussine: function (businessId,idUser) {
        debugger
        disatch(deleteFavoraitsByIdBussiness(businessId,idUser))
      },
    }
  }
)(WishList)
