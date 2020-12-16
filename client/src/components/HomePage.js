import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main-color.css';
import '../css/style.css';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import Footer from './Footer';
import {
    getAllCategories, setSelectedCategoryId, setCategory, getResultofSearchByText
    , getResultOfSearchByCategory
} from '../redux/actions/category.action';

// import { getAllCategoriesAction } from '../actions/index'
function HomePage(props) {
    // const { allCategories } = useSelector(state => ({
    //     allCategories: state.allCategories,
    // }));
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedText, setSelectedText] = useState("");

    //const home = useSelector((state) => state.home)
    // console.log(allCategories);
    var mainCategoriesArr = [];
    // debugger;
    if (props.category != undefined) {
        Object.keys(props.category).forEach(key => mainCategoriesArr.push({ name: key, value: props.category[key] }))
        console.log("if", mainCategoriesArr)
    }
    // Header hero text
    let textRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    textRotate.prototype.tick = function () {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        let that = this;
        let delta = 300 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };
    function setSelectedCatgory(e) {
        setSelectedCategory(e);
        debugger
    }
    function flagSearchByText(e) {
        setSelectedText(e);
        console.log(e)
    }
    function searchClick() {
        {
            debugger
            props.history.push('/ResultOfSearchList')
            if (selectedCategory != "") {
                props.setSelectedCategory(selectedCategory)
                props.getResultOfSearchBYCategory(selectedCategory)
            }
            if (selectedText != "") {
                props.getResultosSearchBYText(selectedText)
            }

        }
    }
    useEffect(() => {
        { props.getAllCategories() }
        console.log("out", props.category)



        // dispatch(getAllCategoriesAction(2));
        // if (allCategories.length > 0) {
        //     Object.keys(allCategories).forEach(key => mainCategoriesArr.push({ name: key, value: allCategories[key] }))
        //     debugger;
        //     console.log(allCategories);
        //     console.log(mainCategoriesArr)
        // }
        // let elements = document.getElementsByClassName('text-rotate');
        // for (let i = 0; i < elements.length; i++) {
        //     let toRotate = elements[i].getAttribute('data-rotate');
        //     let period = elements[i].getAttribute('data-period');
        //     if (toRotate) {
        //         new textRotate(elements[i], JSON.parse(toRotate), period);
        //     }
        // }
        // // INJECT CSS
        // let css = document.createElement("style");
        // css.type = "text/css";
        // css.innerHTML = ".text-rotate > .wrap { border-right: 0.08em solid #666 }";
        // document.body.appendChild(css);

    }, [])

    return (
        <div>
            {/* <button onClick={() => {
                props.getAllCategories();
            }}>
                press
      </button> */}
            <div id="wrapper">
                {/* <img className="imgBackGroung" src="category-box-06.jpg" alt="Second slide"/> */}
                {/* Header Container================================================== */}
                {/* Header */}

                {/* Header / End */}
                <div className="clearfix" />
                {/* Header Container / End */}
                {/* Banner
================================================== */}
                <div className="main-search-container centered" data-background-image="images/main-search-background-01.jpg">
                    <div className="main-search-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <i class="sl sl-icon-login"></i>
                                    <i class="bi bi-basket2-fill"></i>


                                    <h2>
                                        מצא קרוב
        {/* Typed words can be configured in script settings at the bottom of this HTML file */}
                                        <span className="typed-words" />
                                    </h2>
                                    <h4>את האטרקציות הכי שוות, עסקים ועוד</h4>
                                    <div className="main-search-input">
                                        <div className="main-search-input-item">
                                            <input type="text" onChange={(e) => flagSearchByText(e.target.value)} placeholder="מה אתה מחפש?" />
                                        </div>
                                        <div className="main-search-input-item location">
                                            <div id="autocomplete-container">
                                                <input id="autocomplete-input" type="text" placeholder="Location" />
                                            </div>
                                            <a href="#"><i className="fa fa-map-marker" /></a>
                                        </div>
                                        <div className="main-search-input-item">
                                            <select onChange={(e) => { setSelectedCatgory(e.target.value) }} data-placeholder="All Categories" className="chosen-select">
                                                {mainCategoriesArr ?
                                                    mainCategoriesArr.map((option, i) => (
                                                        <option key={i} >

                                                            {option.value.mainCategoryName}
                                                        </option>
                                                    ))
                                                    : ""}
                                            </select>
                                        </div>
                                        <button className="button"
                                            onClick={searchClick}
                                        >Search</button>
                                    </div>
                                </div>
                            </div>
                            {/* Features Categories */}
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="highlighted-categories-headline">או עיין בקטגוריות מוצגות:</h5>
                                    <div className="highlighted-categories">
                                        {mainCategoriesArr ?
                                            mainCategoriesArr.map((option, i) => (
                                               
                                                  <a key={i} href="listings-list-with-sidebar.html" className="highlighted-category">
                                                  <i className={option.value.icons} />
                                                  <h4>{option.value.mainCategoryName}</h4>
                                                  
                                              </a>
                                            ))
                                            : ""}
                                        {/* Box
                                        <a href="listings-list-with-sidebar.html" className="highlighted-category">
                                            <i className="im im-icon-Home" />
                                            <h4>Apartments</h4>
                                        </a> */}
                                        {/* Box */}
                                        {/* <a href="listings-list-full-width.html" className="highlighted-category">
                                            <i className="im im-icon-Hamburger" />
                                            <h4>Eat &amp; Drink</h4>
                                        </a> */}
                                        {/* Box */}
                                        {/* <a href="listings-half-screen-map-list.html" className="highlighted-category">
                                            <i className="im im-icon-Electric-Guitar" />
                                            <h4>Events</h4>
                                        </a> */}
                                        {/* Box */}
                                        {/* <a href="listings-half-screen-map-list.html" className="highlighted-category">
                                            <i className="im im-icon-Dumbbell" />
                                            <h4>Fitness</h4>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            {/* Featured Categories - End */}
                        </div>
                    </div>
                </div>
                {/* Content
================================================== */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="headline centered margin-top-75">
                                <strong className="headline-with-separator">קטגוריות פופולריות</strong>
                            </h3>
                        </div>
                        <div className="col-md-12">
                            <div className="categories-boxes-container margin-top-5 margin-bottom-30">
                                {/* Box */}
                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Hamburger" />
                                    <h4>אוכל &amp; שתיה</h4>
                                    <span className="category-box-counter">12</span>
                                </a>
                                {/* Box */}
                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im  im-icon-Sleeping" />
                                    <h4>מלונות</h4>
                                    <span className="category-box-counter">32</span>
                                </a>
                                {/* Box */}
                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Shopping-Bag" />
                                    <h4>חנויות</h4>
                                    <span className="category-box-counter">11</span>
                                </a>
                                {/* Box */}
                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Cocktail" />
                                    <h4>Nightlife</h4>
                                    <span className="category-box-counter">15</span>
                                </a>
                                {/* Box */}
                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Electric-Guitar" />
                                    <h4>ארועים</h4>
                                    <span className="category-box-counter">21</span>
                                </a>
                                {/* Box */}
                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Dumbbell" />
                                    <h4>ספורט</h4>
                                    <span className="category-box-counter">28</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category Boxes / End */}
                {/* Fullwidth Section */}
                <section className="fullwidth margin-top-65 padding-top-75 padding-bottom-70" data-background-color="#f8f8f8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="headline centered margin-bottom-45">
                                    <strong className="headline-with-separator">המוקומות המתויירים ביותר</strong>
                                    <span>צפה בעסקים המקומיים המובילים ביותר</span>
                                </h3>
                            </div>
                            <div className="col-md-12">
                                <div className="simple-slick-carousel dots-nav">
                                    {/* Listing Item */}
                                    <div className="carousel-item">
                                        <a href="listings-single-page.html" className="listing-item-container">
                                            <div className="listing-item">
                                                <img src="images/listing-item-01.jpg" alt />
                                                <div className="listing-badge now-open">Now Open</div>
                                                <div className="listing-item-content">
                                                    <span className="tag">Eat &amp; Drink</span>
                                                    <h3>Tom's Restaurant <i className="verified-icon" /></h3>
                                                    <span>964 School Street, New York</span>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                            <div className="star-rating" data-rating="3.5">
                                                <div className="rating-counter">(12 reviews)</div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Listing Item / End */}
                                    {/* Listing Item */}
                                    <div className="carousel-item">
                                        <a href="listings-single-page.html" className="listing-item-container">
                                            <div className="listing-item">
                                                <img src="images/listing-item-02.jpg" alt />
                                                <div className="listing-item-details">
                                                    <ul>
                                                        <li>Friday, August 10</li>
                                                    </ul>
                                                </div>
                                                <div className="listing-item-content">
                                                    <span className="tag">Events</span>
                                                    <h3>Sticky Band</h3>
                                                    <span>Bishop Avenue, New York</span>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                            <div className="star-rating" data-rating={5.0}>
                                                <div className="rating-counter">(23 reviews)</div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Listing Item / End */}
                                    {/* Listing Item */}
                                    <div className="carousel-item">
                                        <a href="listings-single-page.html" className="listing-item-container">
                                            <div className="listing-item">
                                                <img src="images/listing-item-03.jpg" alt />
                                                <div className="listing-item-details">
                                                    <ul>
                                                        <li>Starting from $59 per night</li>
                                                    </ul>
                                                </div>
                                                <div className="listing-item-content">
                                                    <span className="tag">Hotels</span>
                                                    <h3>Hotel Govendor</h3>
                                                    <span>778 Country Street, New York</span>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                            <div className="star-rating" data-rating={2.0}>
                                                <div className="rating-counter">(17 reviews)</div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Listing Item / End */}
                                    {/* Listing Item */}
                                    <div className="carousel-item">
                                        <a href="listings-single-page.html" className="listing-item-container">
                                            <div className="listing-item">
                                                <img src="images/listing-item-04.jpg" alt />
                                                <div className="listing-badge now-open">Now Open</div>
                                                <div className="listing-item-content">
                                                    <span className="tag">Eat &amp; Drink</span>
                                                    <h3>Burger House <i className="verified-icon" /></h3>
                                                    <span>2726 Shinn Street, New York</span>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                            <div className="star-rating" data-rating={5.0}>
                                                <div className="rating-counter">(31 reviews)</div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Listing Item / End */}
                                    {/* Listing Item */}
                                    <div className="carousel-item">
                                        <a href="listings-single-page.html" className="listing-item-container">
                                            <div className="listing-item">
                                                <img src="images/listing-item-05.jpg" alt />
                                                <div className="listing-item-content">
                                                    <span className="tag">Other</span>
                                                    <h3>Airport</h3>
                                                    <span>1512 Duncan Avenue, New York</span>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                            <div className="star-rating" data-rating="3.5">
                                                <div className="rating-counter">(46 reviews)</div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Listing Item / End */}
                                    {/* Listing Item */}
                                    <div className="carousel-item">
                                        <a href="listings-single-page.html" className="listing-item-container">
                                            <div className="listing-item">
                                                <img src="images/listing-item-06.jpg" alt />
                                                <div className="listing-badge now-closed">Now Closed</div>
                                                <div className="listing-item-content">
                                                    <span className="tag">Eat &amp; Drink</span>
                                                    <h3>Think Coffee</h3>
                                                    <span>215 Terry Lane, New York</span>
                                                </div>
                                                <span className="like-icon" />
                                            </div>
                                            <div className="star-rating" data-rating="4.5">
                                                <div className="rating-counter">(15 reviews)</div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Listing Item / End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Fullwidth Section / End */}
                <section className="fullwidth padding-top-75 padding-bottom-30" data-background-color="#fff">
                    {/* Info Section */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <h3 className="headline centered headline-extra-spacing">
                                    <strong className="headline-with-separator">What Our Users Say</strong>
                                    <span className="margin-top-25">We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* Info Section / End */}
                    {/* Categories Carousel */}
                    <div className="fullwidth-carousel-container margin-top-20 no-dots">
                        <div className="testimonial-carousel testimonials">
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution user generated content.</div>
                                </div>
                                <div className="testimonial-author">
                                    <img src="images/happy-client-01.jpg" alt />
                                    <h4>Jennie Smith <span>Coffee Shop Owner</span></h4>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop.</div>
                                </div>
                                <div className="testimonial-author">
                                    <img src="images/happy-client-02.jpg" alt />
                                    <h4>Tom Baker <span>Clothing Store Owner</span></h4>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view.</div>
                                </div>
                                <div className="testimonial-author">
                                    <img src="images/happy-client-03.jpg" alt />
                                    <h4>Jack Paden <span>Restaurant Owner</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Categories Carousel / End */}
                </section>
                {/* Info Section */}
                <section className="fullwidth padding-top-75 padding-bottom-70" data-background-color="#f9f9f9">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <h3 className="headline centered headline-extra-spacing">
                                    <strong className="headline-with-separator">Plan The Vacation of Your Dreams</strong>
                                    <span className="margin-top-25">Explore some of the best tips from around the world from our partners and friends. Discover some of the most popular listings!</span>
                                </h3>
                            </div>
                        </div>
                        <div className="row icons-container">
                            {/* Stage */}
                            <div className="col-md-4">
                                <div className="icon-box-2 with-line">
                                    <i className="im im-icon-Map2" />
                                    <h3>Find Interesting Place</h3>
                                    <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin.</p>
                                </div>
                            </div>
                            {/* Stage */}
                            <div className="col-md-4">
                                <div className="icon-box-2 with-line">
                                    <i className="im im-icon-Mail-withAtSign" />
                                    <h3>Contact a Few Owners</h3>
                                    <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam viverra purus.</p>
                                </div>
                            </div>
                            {/* Stage */}
                            <div className="col-md-4">
                                <div className="icon-box-2">
                                    <i className="im im-icon-Checked-User" />
                                    <h3>Make a Reservation</h3>
                                    <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat consectetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Info Section / End */}
                {/* Recent Blog Posts */}
                <section className="fullwidth margin-top-0 padding-top-75 padding-bottom-75" data-background-color="#fff">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="headline centered margin-bottom-55">
                                    <strong className="headline-with-separator">From The Blog</strong>
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            {/* Blog Post Item */}
                            <div className="col-md-4">
                                <a href="pages-blog-post.html" className="blog-compact-item-container">
                                    <div className="blog-compact-item">
                                        <img src="images/blog-compact-post-01.jpg" alt />
                                        <span className="blog-item-tag">Tips</span>
                                        <div className="blog-compact-item-content">
                                            <ul className="blog-post-tags">
                                                <li>22 August 2019</li>
                                            </ul>
                                            <h3>Hotels for All Budgets</h3>
                                            <p>Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* Blog post Item / End */}
                            {/* Blog Post Item */}
                            <div className="col-md-4">
                                <a href="pages-blog-post.html" className="blog-compact-item-container">
                                    <div className="blog-compact-item">
                                        <img src="images/blog-compact-post-02.jpg" alt />
                                        <span className="blog-item-tag">Tips</span>
                                        <div className="blog-compact-item-content">
                                            <ul className="blog-post-tags">
                                                <li>18 August 2019</li>
                                            </ul>
                                            <h3>The 50 Greatest Street Arts In London</h3>
                                            <p>Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* Blog post Item / End */}
                            {/* Blog Post Item */}
                            <div className="col-md-4">
                                <a href="pages-blog-post.html" className="blog-compact-item-container">
                                    <div className="blog-compact-item">
                                        <img src="images/blog-compact-post-03.jpg" alt />
                                        <span className="blog-item-tag">Tips</span>
                                        <div className="blog-compact-item-content">
                                            <ul className="blog-post-tags">
                                                <li>10 August 2019</li>
                                            </ul>
                                            <h3>The Best Cofee Shops In Sydney Neighborhoods</h3>
                                            <p>Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* Blog post Item / End */}
                            <div className="col-md-12 centered-content">
                                <a href="pages-blog.html" className="button border margin-top-10">View Blog</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Recent Blog Posts / End */}
                {/* Footer
================================================== */}
                <Footer />
                {/* Footer / End */}
                {/* Back To Top Button */}
                <div id="backtotop"><a href="#" /></div>
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
    )
}

export default connect(
    (state) => {
        return {
            category: state.category.category,
            selectedCategoryId: state.category.selectedCategoryId
        }
    },
    (disatch) => {
        return {
            getAllCategories: function () {
                disatch(getAllCategories())
            },
            setSelectedCategory: function (id) {
                disatch(setSelectedCategoryId(id))
            },
            getResultOfSearchBYCategory: function (text) {
                disatch(getResultOfSearchByCategory(text))
            },
            getResultosSearchBYText: function (text) {
                disatch(getResultofSearchByText(text))
            }
        }
    }
)(withRouter(HomePage))