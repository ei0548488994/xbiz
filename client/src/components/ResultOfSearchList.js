import React from 'react'
export default function ResultSearch() {
    return (
        <>
            <div className="clearfix" />
            {/* Header Container / End */}
            {/* Slider
================================================== */}
            <div className="listing-slider mfp-gallery-container margin-bottom-0">
                <a href="images/single-listing-01.jpg" data-background-image="images/single-listing-01.jpg" className="item mfp-gallery" title="Title 1" />
                <a href="images/single-listing-02.jpg" data-background-image="images/single-listing-02.jpg" className="item mfp-gallery" title="Title 3" />
                <a href="images/single-listing-03.jpg" data-background-image="images/single-listing-03.jpg" className="item mfp-gallery" title="Title 2" />
                <a href="images/single-listing-04.jpg" data-background-image="images/single-listing-04.jpg" className="item mfp-gallery" title="Title 4" />
            </div>
            {/* Content
================================================== */}
            <div className="container">
                <div className="row sticky-wrapper">
                    <div className="col-lg-8 col-md-8 padding-right-30">
                        {/* Titlebar */}
                        <div id="titlebar" className="listing-titlebar">
                            <div className="listing-titlebar-title">
                                <h2>Burger House <span className="listing-tag">Eat &amp; Drink</span></h2>
                                <span>
                                    <a href="#listing-location" className="listing-address">
                                        <i className="fa fa-map-marker" />
                                        2726 Shinn Street, New York
                </a>
                                </span>
                                <div className="star-rating" data-rating={5}>
                                    <div className="rating-counter"><a href="#listing-reviews">(31 reviews)</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Listing Nav */}
                        <div id="listing-nav" className="listing-nav-container">
                            <ul className="listing-nav">
                                <li><a href="#listing-overview" className="active">Overview</a></li>
                                <li><a href="#listing-pricing-list">Pricing</a></li>
                                <li><a href="#listing-location">Location</a></li>
                                <li><a href="#listing-reviews">Reviews</a></li>
                                <li><a href="#add-review">Add Review</a></li>
                            </ul>
                        </div>
                        {/* Overview */}
                        <div id="listing-overview" className="listing-section">
                            {/* Description */}
                            <p>
                                Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
            </p>
                            {/* Listing Contacts */}
                            <div className="listing-links-container">
                                <ul className="listing-links contact-links">
                                    <li><a href="tel:12-345-678" className="listing-links"><i className="fa fa-phone" /> +12 345 6578</a></li>
                                    <li><a href="mailto:mail@example.com" className="listing-links"><i className="fa fa-envelope-o" /> mail@example.com</a>
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
                            <h3 className="listing-desc-headline">Amenities</h3>
                            <ul className="listing-features checkboxes margin-top-0">
                                <li>Elevator in building</li>
                                <li>Friendly workspace</li>
                                <li>Instant Book</li>
                                <li>Wireless Internet</li>
                                <li>Free parking on premises</li>
                                <li>Free parking on street</li>
                            </ul>
                        </div>
                        {/* Food Menu */}
                        <div id="listing-pricing-list" className="listing-section">
                            <h3 className="listing-desc-headline margin-top-70 margin-bottom-30">Pricing</h3>
                            <div className="show-more">
                                <div className="pricing-list-container">
                                    {/* Food List */}
                                    <h4>Burgers</h4>
                                    <ul>
                                        <li>
                                            <h5>Classic Burger</h5>
                                            <p>Beef, salad, mayonnaise, spicey relish, cheese</p>
                                            <span>$6</span>
                                        </li>
                                        <li>
                                            <h5>Cheddar Burger</h5>
                                            <p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
                                            <span>$6</span>
                                        </li>
                                        <li>
                                            <h5>Veggie Burger</h5>
                                            <p>Panko crumbed and fried, grilled peppers and mushroom</p>
                                            <span>$6</span>
                                        </li>
                                        <li>
                                            <h5>Chicken Burger</h5>
                                            <p>Cheese, chicken fillet, avocado, bacon, tomatoes, basil</p>
                                            <span>$6</span>
                                        </li>
                                    </ul>
                                    {/* Food List */}
                                    <h4>Drinks</h4>
                                    <ul>
                                        <li>
                                            <h5>Frozen Shake</h5>
                                            <span>$4</span>
                                        </li>
                                        <li>
                                            <h5>Orange Juice</h5>
                                            <span>$4</span>
                                        </li>
                                        <li>
                                            <h5>Beer</h5>
                                            <span>$4</span>
                                        </li>
                                        <li>
                                            <h5>Water</h5>
                                            <span>Free</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" className="show-more-button" data-more-title="Show More" data-less-title="Show Less"><i className="fa fa-angle-down" /></a>
                        </div>
                        {/* Food Menu / End */}
                        {/* Location */}
                        <div id="listing-location" className="listing-section">
                            <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>
                            <div id="singleListingMap-container">
                                <div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger" />
                                <a href="#" id="streetView">Street View</a>
                            </div>
                        </div>
                        {/* Reviews */}
                        <div id="listing-reviews" className="listing-section">
                            <h3 className="listing-desc-headline margin-top-75 margin-bottom-20">Reviews <span>(12)</span></h3>
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
                            <section className="comments listing-reviews">
                                <ul>
                                    <li>
                                        <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70" alt /></div>
                                        <div className="comment-content"><div className="arrow-comment" />
                                            <div className="comment-by">Kathy Brown <i className="tip" data-tip-content="Person who left this review actually was a customer" /> <span className="date">June 2019</span>
                                                <div className="star-rating" data-rating={5} />
                                            </div>
                                            <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                            <div className="review-images mfp-gallery-container">
                                                <a href="images/review-image-01.jpg" className="mfp-gallery"><img src="images/review-image-01.jpg" alt /></a>
                                            </div>
                                            <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review <span>12</span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70" alt /> </div>
                                        <div className="comment-content"><div className="arrow-comment" />
                                            <div className="comment-by">John Doe<span className="date">May 2019</span>
                                                <div className="star-rating" data-rating={4} />
                                            </div>
                                            <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                                            <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review <span>2</span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70" alt /></div>
                                        <div className="comment-content"><div className="arrow-comment" />
                                            <div className="comment-by">Kathy Brown<span className="date">June 2019</span>
                                                <div className="star-rating" data-rating={5} />
                                            </div>
                                            <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                            <div className="review-images mfp-gallery-container">
                                                <a href="images/review-image-02.jpg" className="mfp-gallery"><img src="images/review-image-02.jpg" alt /></a>
                                                <a href="images/review-image-03.jpg" className="mfp-gallery"><img src="images/review-image-03.jpg" alt /></a>
                                            </div>
                                            <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review <span>4</span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70" alt /> </div>
                                        <div className="comment-content"><div className="arrow-comment" />
                                            <div className="comment-by">John Doe<span className="date">May 2019</span>
                                                <div className="star-rating" data-rating={5} />
                                            </div>
                                            <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                                            <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review</a>
                                        </div>
                                    </li>
                                </ul>
                            </section>
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
                        <div id="add-review" className="add-review-box">
                            {/* Add Review */}
                            <h3 className="listing-desc-headline margin-bottom-10">Add Review</h3>
                            <p className="comment-notes">Your email address will not be published.</p>
                            {/* Subratings Container */}
                            <div className="sub-ratings-container">
                                {/* Subrating #1 */}
                                <div className="add-sub-rating">
                                    <div className="sub-rating-title">Service <i className="tip" data-tip-content="Quality of customer service and attitude to work with you" /></div>
                                    <div className="sub-rating-stars">
                                        {/* Leave Rating */}
                                        <div className="clearfix" />
                                        <form className="leave-rating">
                                            <input type="radio" name="rating" id="rating-1" defaultValue={1} />
                                            <label htmlFor="rating-1" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-2" defaultValue={2} />
                                            <label htmlFor="rating-2" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-3" defaultValue={3} />
                                            <label htmlFor="rating-3" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-4" defaultValue={4} />
                                            <label htmlFor="rating-4" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-5" defaultValue={5} />
                                            <label htmlFor="rating-5" className="fa fa-star" />
                                        </form>
                                    </div>
                                </div>
                                {/* Subrating #2 */}
                                <div className="add-sub-rating">
                                    <div className="sub-rating-title">Value for Money <i className="tip" data-tip-content="Overall experience received for the amount spent" /></div>
                                    <div className="sub-rating-stars">
                                        {/* Leave Rating */}
                                        <div className="clearfix" />
                                        <form className="leave-rating">
                                            <input type="radio" name="rating" id="rating-11" defaultValue={1} />
                                            <label htmlFor="rating-11" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-12" defaultValue={2} />
                                            <label htmlFor="rating-12" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-13" defaultValue={3} />
                                            <label htmlFor="rating-13" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-14" defaultValue={4} />
                                            <label htmlFor="rating-14" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-15" defaultValue={5} />
                                            <label htmlFor="rating-15" className="fa fa-star" />
                                        </form>
                                    </div>
                                </div>
                                {/* Subrating #3 */}
                                <div className="add-sub-rating">
                                    <div className="sub-rating-title">Location <i className="tip" data-tip-content="Visibility, commute or nearby parking spots" /></div>
                                    <div className="sub-rating-stars">
                                        {/* Leave Rating */}
                                        <div className="clearfix" />
                                        <form className="leave-rating">
                                            <input type="radio" name="rating" id="rating-21" defaultValue={1} />
                                            <label htmlFor="rating-21" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-22" defaultValue={2} />
                                            <label htmlFor="rating-22" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-23" defaultValue={3} />
                                            <label htmlFor="rating-23" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-24" defaultValue={4} />
                                            <label htmlFor="rating-24" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-25" defaultValue={5} />
                                            <label htmlFor="rating-25" className="fa fa-star" />
                                        </form>
                                    </div>
                                </div>
                                {/* Subrating #4 */}
                                <div className="add-sub-rating">
                                    <div className="sub-rating-title">Cleanliness <i className="tip" data-tip-content="The physical condition of the business" /></div>
                                    <div className="sub-rating-stars">
                                        {/* Leave Rating */}
                                        <div className="clearfix" />
                                        <form className="leave-rating">
                                            <input type="radio" name="rating" id="rating-31" defaultValue={1} />
                                            <label htmlFor="rating-31" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-32" defaultValue={2} />
                                            <label htmlFor="rating-32" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-33" defaultValue={3} />
                                            <label htmlFor="rating-33" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-34" defaultValue={4} />
                                            <label htmlFor="rating-34" className="fa fa-star" />
                                            <input type="radio" name="rating" id="rating-35" defaultValue={5} />
                                            <label htmlFor="rating-35" className="fa fa-star" />
                                        </form>
                                    </div>
                                </div>
                                {/* Uplaod Photos */}
                                <div className="uploadButton margin-top-15">
                                    <input className="uploadButton-input" type="file" name="attachments[]" accept="image/*, application/pdf" id="upload" multiple />
                                    <label className="uploadButton-button ripple-effect" htmlFor="upload">Add Photos</label>
                                    <span className="uploadButton-file-name" />
                                </div>
                                {/* Uplaod Photos / End */}
                            </div>
                            {/* Subratings Container / End */}
                            {/* Review Comment */}
                            <form id="add-comment" className="add-comment">
                                <fieldset>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name:</label>
                                            <input type="text" defaultValue />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Email:</label>
                                            <input type="text" defaultValue />
                                        </div>
                                    </div>
                                    <div>
                                        <label>Review:</label>
                                        <textarea cols={40} rows={3} defaultValue={""} />
                                    </div>
                                </fieldset>
                                <button className="button">Submit Review</button>
                                <div className="clearfix" />
                            </form>
                        </div>
                        {/* Add Review Box / End */}
                    </div>
                    {/* Sidebar
		================================================== */}
                    <div className="col-lg-4 col-md-4 margin-top-75 sticky">
                        {/* Verified Badge */}
                        <div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
                            <i className="sl sl-icon-check" /> Verified Listing
          </div>
                        {/* Book Now */}
                        <div id="booking-widget-anchor" className="boxed-widget booking-widget margin-top-35">
                            <h3><i className="fa fa-calendar-check-o " /> Booking</h3>
                            <div className="row with-forms  margin-top-0">
                                {/* Date Range Picker - docs: http://www.daterangepicker.com/ */}
                                <div className="col-lg-12">
                                    <input type="text" id="date-picker" placeholder="Date" readOnly="readonly" />
                                </div>
                                {/* Panel Dropdown */}
                                <div className="col-lg-12">
                                    <div className="panel-dropdown time-slots-dropdown">
                                        <a href="#">Time Slots</a>
                                        <div className="panel-dropdown-content padding-reset">
                                            <div className="panel-dropdown-scrollable">
                                                {/* Time Slot */}
                                                <div className="time-slot">
                                                    <input type="radio" name="time-slot" id="time-slot-1" />
                                                    <label htmlFor="time-slot-1">
                                                        <strong>8:30 am - 9:00 am</strong>
                                                        <span>1 slot available</span>
                                                    </label>
                                                </div>
                                                {/* Time Slot */}
                                                <div className="time-slot">
                                                    <input type="radio" name="time-slot" id="time-slot-2" />
                                                    <label htmlFor="time-slot-2">
                                                        <strong>9:00 am - 9:30 am</strong>
                                                        <span>2 slots available</span>
                                                    </label>
                                                </div>
                                                {/* Time Slot */}
                                                <div className="time-slot">
                                                    <input type="radio" name="time-slot" id="time-slot-3" />
                                                    <label htmlFor="time-slot-3">
                                                        <strong>9:30 am - 10:00 am</strong>
                                                        <span>1 slots available</span>
                                                    </label>
                                                </div>
                                                {/* Time Slot */}
                                                <div className="time-slot">
                                                    <input type="radio" name="time-slot" id="time-slot-4" />
                                                    <label htmlFor="time-slot-4">
                                                        <strong>10:00 am - 10:30 am</strong>
                                                        <span>3 slots available</span>
                                                    </label>
                                                </div>
                                                {/* Time Slot */}
                                                <div className="time-slot">
                                                    <input type="radio" name="time-slot" id="time-slot-5" />
                                                    <label htmlFor="time-slot-5">
                                                        <strong>13:00 pm - 13:30 pm</strong>
                                                        <span>2 slots available</span>
                                                    </label>
                                                </div>
                                                {/* Time Slot */}
                                                <div className="time-slot">
                                                    <input type="radio" name="time-slot" id="time-slot-6" />
                                                    <label htmlFor="time-slot-6">
                                                        <strong>13:30 pm - 14:00 pm</strong>
                                                        <span>1 slots available</span>
                                                    </label>
                                                </div>
                                                {/* Time Slot */}
                                                <div className="time-slot">
                                                    <input type="radio" name="time-slot" id="time-slot-7" />
                                                    <label htmlFor="time-slot-7">
                                                        <strong>14:00 pm - 14:30 pm</strong>
                                                        <span>1 slots available</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Panel Dropdown / End */}
                                {/* Panel Dropdown */}
                                <div className="col-lg-12">
                                    <div className="panel-dropdown">
                                        <a href="#">Guests <span className="qtyTotal" name="qtyTotal">1</span></a>
                                        <div className="panel-dropdown-content">
                                            {/* Quantity Buttons */}
                                            <div className="qtyButtons">
                                                <div className="qtyTitle">Adults</div>
                                                <input type="text" name="qtyInput" defaultValue={1} />
                                            </div>
                                            <div className="qtyButtons">
                                                <div className="qtyTitle">Childrens</div>
                                                <input type="text" name="qtyInput" defaultValue={0} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Panel Dropdown / End */}
                            </div>
                            {/* Book Now */}
                            <a href="pages-booking.html" className="button book-now fullwidth margin-top-5">Request To Book</a>
                        </div>
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
                        <div className="boxed-widget opening-hours margin-top-35">
                            <div className="listing-badge now-open">Now Open</div>
                            <h3><i className="sl sl-icon-clock" /> Opening Hours</h3>
                            <ul>
                                <li>Monday <span>9 AM - 5 PM</span></li>
                                <li>Tuesday <span>9 AM - 5 PM</span></li>
                                <li>Wednesday <span>9 AM - 5 PM</span></li>
                                <li>Thursday <span>9 AM - 5 PM</span></li>
                                <li>Friday <span>9 AM - 5 PM</span></li>
                                <li>Saturday <span>9 AM - 3 PM</span></li>
                                <li>Sunday <span>Closed</span></li>
                            </ul>
                        </div>
                        {/* Opening Hours / End */}
                        {/* Contact */}
                        <div className="boxed-widget margin-top-35">
                            <div className="hosted-by-title">
                                <h4><span>Hosted by</span> <a href="pages-user-profile.html">Tom Perrin</a></h4>
                                <a href="pages-user-profile.html" className="hosted-by-avatar"><img src="images/dashboard-avatar.jpg" alt /></a>
                            </div>
                            <ul className="listing-details-sidebar">
                                <li><i className="sl sl-icon-phone" /> (123) 123-456</li>
                                {/* <li><i class="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> */}
                                <li><i className="fa fa-envelope-o" /> <a href="#">tom@example.com</a></li>
                            </ul>
                            <ul className="listing-details-sidebar social-profiles">
                                <li><a href="#" className="facebook-profile"><i className="fa fa-facebook-square" /> Facebook</a></li>
                                <li><a href="#" className="twitter-profile"><i className="fa fa-twitter" /> Twitter</a></li>
                                {/* <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> */}
                            </ul>
                            {/* Reply to review popup */}
                            <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                                <div className="small-dialog-header">
                                    <h3>Send Message</h3>
                                </div>
                                <div className="message-reply margin-top-0">
                                    <textarea cols={40} rows={3} placeholder="Your message to Tom" defaultValue={""} />
                                    <button className="button">Send Message</button>
                                </div>
                            </div>
                            <a href="#small-dialog" className="send-message-to-owner button popup-with-zoom-anim"><i className="sl sl-icon-envelope-open" /> Send Message</a>
                        </div>
                        {/* Contact / End*/}
                        {/* Share / Like */}
                        <div className="listing-share margin-top-40 margin-bottom-40 no-border">
                            <button className="like-button"><span className="like-icon" /> Bookmark this listing</button>
                            <span>159 people bookmarked this place</span>
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

        </>
    )
}
