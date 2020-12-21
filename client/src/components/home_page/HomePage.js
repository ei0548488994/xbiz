import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/main-color.css";
import "../../css/style.css";
import backgroundImage from '../../images/main-search-background-01.jpg'
//import Header from "../Header";
import UserLocation from "../UserLocation";
import AutoCompleteSearch from "../AutoCompleteSearch";
import { setUserLocation } from '../../redux/actions/location.action'
import ResultOfSearchListFirst from "../ResultSearckListFirst";
import {
  withRouter,
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import Footer from "../Footer";
import {
  getAllCategories,
  setSelectedCategoryId,
  setCategory,
  getResultofSearchByText,
  getResultOfSearchByCategory,
  PopularCategories,
} from "../../redux/actions/category.action";
import { getBusinessBybId } from '../../redux/actions/business.action'
import Typed from "react-typed";
import "./homePage.css";
// import { getAllCategoriesAction } from '../actions/index'
function HomePage(props) {
  // const { allCategories } = useSelector(state => ({
  //     allCategories: state.allCategories,
  // }));
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [CurrentUserLocation, setCurrentUserLocationLng] = useState({ "lat": 0, "lng": 0 });
  const [ChangedUserLocation, setChangedUserLocation] = useState(false);
  console.log("vhbjnk");
  console.log(props.popularCategories);
  localStorage.setItem('flag', "false");
  //const home = useSelector((state) => state.home)
  // console.log(allCategories);
  var mainCategoriesArr = [];
  // debugger;
  if (props.category != undefined) {
    Object.keys(props.category).forEach((key) =>
      mainCategoriesArr.push({ name: key, value: props.category[key] })
    );
    console.log("if", mainCategoriesArr);
  }
  // Header hero text
  // let textRotate = function (el, toRotate, period) {
  //     this.toRotate = toRotate;
  //     this.el = el;
  //     this.loopNum = 0;
  //     this.period = parseInt(period, 10) || 2000;
  //     this.txt = '';
  //     this.tick();
  //     this.isDeleting = false;
  // };
  // textRotate.prototype.tick = function () {
  //     let i = this.loopNum % this.toRotate.length;
  //     let fullTxt = this.toRotate[i];
  //     if (this.isDeleting) {
  //         this.txt = fullTxt.substring(0, this.txt.length - 1);
  //     } else {
  //         this.txt = fullTxt.substring(0, this.txt.length + 1);
  //     }
  //     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  //     let that = this;
  //     let delta = 300 - Math.random() * 100;
  //     if (this.isDeleting) { delta /= 2; }
  //     if (!this.isDeleting && this.txt === fullTxt) {
  //         delta = this.period;
  //         this.isDeleting = true;
  //     } else if (this.isDeleting && this.txt === '') {
  //         this.isDeleting = false;
  //         this.loopNum++;
  //         delta = 500;
  //     }

  //     setTimeout(function () {
  //         that.tick();
  //     }, delta);
  // };
  function setSelectedCatgory(e) {
    var SelectedCategoryId;
    debugger;
    mainCategoriesArr.forEach((element) => {
      if (element.value.mainCategoryName == e) {
        var SelectedCategoryId = element.value._id;
        console.log(SelectedCategoryId);
        setSelectedCategory(SelectedCategoryId);
      }
    });
  }
  function flagSearchByText(e) {
    setSelectedText(e);
    console.log(e);
  }
  function searchClick() {
    {
      if (localStorage.getItem('changedLocation') == "false") {
        debugger
        var change = "true"
        setChangedUserLocation(change);
        console.log("change")
        console.log(ChangedUserLocation)
      }
      setCurrentUserLocationLng({ "lat": localStorage.getItem('CurrentUserLocationLat'), "lng": localStorage.getItem('CurrentUserLocationLng') })
      props.setUserLocation(CurrentUserLocation)
      debugger;
      if (localStorage.getItem('changedLocation') == "true") {
        props.history.push("/ResultOfSearchList");
      }
      if (selectedCategory != "") {
        props.setSelectedCategory(selectedCategory);
        debugger;
        props.getResultOfSearchBYCategory(selectedCategory);
      }
      if (selectedText != "") {
        debugger;
        props.getResultosSearchBYText(selectedText);
      }
    }
  }
  function userLocation() {
    debugger
    setCurrentUserLocationLng({ "lat": localStorage.getItem('CurrentUserLocationLat'), "lng": localStorage.getItem('CurrentUserLocationLng') })
    props.setUserLocation(CurrentUserLocation)
  }

  useEffect(() => {
    {
      props.getAllCategories();
    }
    localStorage.setItem('changedLocation', "false");
    console.log("out", props.category);
    props.PopularCategories();

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
  }, []);

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
        <div
          className="main-search-container centered"

        //data-background-image={backgroundImage}
        //style={{ backgroundImage: { backgroundImage } }}  >

        // data-background-image={backgroundImge}
        // style ={ { backgroundImage:`url(${backgroundImge})` } } 
        >
          {/* a3104e3aded293e5e0be6a227d864e6cbd744c8e */}
          <div className="main-search-inner">
            <div className="container">
              <div>
                <div className="col-md-12">
                  <h2>
                    מצא קרוב&nbsp;
                    {/* Typed words can be configured in script settings at the bottom of this HTML file */}
                    <span className="typed-words">
                      <Typed
                        loop
                        typeSpeed={180}
                        backSpeed={150}
                        strings={["ספורט", "אירועים", "מלונות", "מסעדות"]}
                        smartBackspace
                        shuffle={false}
                        backDelay={1500}
                        fadeOut={false}
                        fadeOutDelay={100}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                      />
                    </span>
                  </h2>
                  <h4>את האטרקציות הכי שוות, עסקים ועוד</h4>
                  <div className="main-search-input">
                    <div className="main-search-input-item text">
                      {/* <AutoCompleteSearch /> */}
                      <input
                        type="text"
                        onChange={(e) => flagSearchByText(e.target.value)}
                        placeholder="מה לחפש?"
                        className="col-6"
                      />
                    </div>
                    <div className="main-search-input-item location d-flex align-content-center">
                      <a href="#">
                        <i className="fa fa-map-marker" />
                      </a>
                      <div id="autocomplete-container">
                        <AutoCompleteSearch />
                        {ChangedUserLocation == "true" ? <UserLocation /> : ""}
                      </div>

                    </div>
                    {/* <div className="main-search-input-item" >
                                            <select data-placeholder="All Categories" className="chosen-select" onClick={(e) => { setSelectedCatgory(e.target.value) }}>
                                                {mainCategoriesArr ?
                                                    mainCategoriesArr.map((option, i) => (
                                                        <option key={i}>

                                                            {option.value.mainCategoryName}
                                                        </option>
                                                    ))
                                                    : ""}
                                            </select>
                                        </div> */}
                    <button className="button" onClick={searchClick} disabled={selectedText==''}>
                      חפש
                    </button>
                  </div>
                </div>
              </div>
              {/* Features Categories */}
              {/* onClick={(e) => { setSelectedCatgory(option.value.mainCategoryName) },searchClick}  */}
              <div className="row">
                <div className="col-md-12">
                  <h5 className="highlighted-categories-headline">
                    או עיין בקטגוריות מוצגות:
                  </h5>
                  <div className="highlighted-categories">
                    {mainCategoriesArr
                      ? mainCategoriesArr.map((option, i) =>
                        option.value.icons ? (
                          <Link
                            to="/ResultOfSearchList"
                            key={i}
                            onClick={() => {
                              props.getResultosSearchBYText(
                                option.value.mainCategoryName
                              );
                            }}
                            // href="listings-list-with-sidebar.html"
                            className="highlighted-category"
                          >
                            <i className={option.value.icons} />
                            <h4>{option.value.mainCategoryName}</h4>
                          </Link>
                        ) : (
                            ""
                          )
                      )
                      : ""}
                  </div>
                </div>
              </div>
              <Router>
                <Switch>
                  <Route path="/ResultOfSearchList">
                    <ResultOfSearchListFirst />
                  </Route>
                </Switch>
              </Router>
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
                <strong className="headline-with-separator">
                  קטגוריות פופולריות
                </strong>
              </h3>
            </div>
            <div className="col-md-12">
              <div className="categories-boxes-container margin-top-5 margin-bottom-30 d-flex justify-content-center">
                {props.popularCategories
                  ? props.popularCategories.map((category, i) => (
                    <Link
                      key={i}
                      to="/ResultOfSearchList"
                      onClick={() => {
                        props.getResultosSearchBYText(
                          category.value.mainCategoryName
                        );
                      }}
                      className="category-small-box"
                    >
                      <i className={category.value.icons} />
                      <h4>{category.value.mainCategoryName}</h4>
                      <span className="category-box-counter">
                        {category.value.countBusiness}
                      </span>
                    </Link>
                  ))
                  : ""}
                {/* Box
                                <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Hamburger" />
                                    <h4>אוכל &amp; שתיה</h4>
                                    <span className="category-box-counter">12</span>
                                </a> */}
                {/* Box */}
                {/* <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im  im-icon-Sleeping" />
                                    <h4>מלונות</h4>
                                    <span className="category-box-counter">32</span>
                                </a> */}
                {/* Box */}
                {/* <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Shopping-Bag" />
                                    <h4>חנויות</h4>
                                    <span className="category-box-counter">11</span>
                                </a> */}
                {/* Box */}
                {/* <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Cocktail" />
                                    <h4>Nightlife</h4>
                                    <span className="category-box-counter">15</span>
                                </a> */}
                {/* Box */}
                {/* <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Electric-Guitar" />
                                    <h4>ארועים</h4>
                                    <span className="category-box-counter">21</span>
                                </a> */}
                {/* Box */}
                {/* <a href="listings-list-with-sidebar.html" className="category-small-box">
                                    <i className="im im-icon-Dumbbell" />
                                    <h4>ספורט</h4>
                                    <span className="category-box-counter">28</span>
                                </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* Category Boxes / End */}
        {/* Fullwidth Section */}
        <section
          className="fullwidth margin-top-65 padding-top-75 padding-bottom-70"
          data-background-color="#f8f8f8"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="headline centered margin-bottom-45">
                  <strong className="headline-with-separator">
                    המוקומות המתויירים ביותר
                  </strong>
                  <span>צפה בעסקים המקומיים המובילים ביותר</span>
                </h3>
              </div>
              <div className="col-md-12">
                <div className="simple-slick-carousel dots-nav">
                  {/* Listing Item */}
                  <div className="carousel-item">
                    <a
                      href="listings-single-page.html"
                      className="listing-item-container"
                    >
                      <div className="listing-item">
                        <img src="images/listing-item-01.jpg" alt />
                        <div className="listing-badge now-open">Now Open</div>
                        <div className="listing-item-content">
                          <span className="tag">Eat &amp; Drink</span>
                          <h3>
                            Tom's Restaurant <i className="verified-icon" />
                          </h3>
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
                    <a
                      href="listings-single-page.html"
                      className="listing-item-container"
                    >
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
                    <a
                      href="listings-single-page.html"
                      className="listing-item-container"
                    >
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
                    <a
                      href="listings-single-page.html"
                      className="listing-item-container"
                    >
                      <div className="listing-item">
                        <img src="images/listing-item-04.jpg" alt />
                        <div className="listing-badge now-open">Now Open</div>
                        <div className="listing-item-content">
                          <span className="tag">Eat &amp; Drink</span>
                          <h3>
                            Burger House <i className="verified-icon" />
                          </h3>
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
                    <a
                      href="listings-single-page.html"
                      className="listing-item-container"
                    >
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
                    <a
                      href="listings-single-page.html"
                      className="listing-item-container"
                    >
                      <div className="listing-item">
                        <img src="images/listing-item-06.jpg" alt />
                        <div className="listing-badge now-closed">
                          Now Closed
                        </div>
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
        <section
          className="fullwidth padding-top-75 padding-bottom-30"
          data-background-color="#fff"
        >
          {/* Info Section */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h3 className="headline centered headline-extra-spacing">
                  <strong className="headline-with-separator">
                    מה המשתמשים שלנו אומרים
                  </strong>
                  <span className="margin-top-25">
                    אספנו ביקורות מהמשתמשים שלנו כדי <br></br>
                    שתוכלו לקבל חוות דעת כנה על החוויה באתר שלנו
                  </span>
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
                  <div className="testimonial">
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation is on the
                    runway heading towards a streamlined cloud solution user
                    generated content.
                  </div>
                </div>
                <div className="testimonial-author">
                  <img src="images/happy-client-01.jpg" alt />
                  <h4>
                    Jennie Smith <span>Coffee Shop Owner</span>
                  </h4>
                </div>
              </div>
              {/* Item */}
              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop.
                  </div>
                </div>
                <div className="testimonial-author">
                  <img src="images/happy-client-02.jpg" alt />
                  <h4>
                    Tom Baker <span>Clothing Store Owner</span>
                  </h4>
                </div>
              </div>
              {/* Item */}
              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view.
                  </div>
                </div>
                <div className="testimonial-author">
                  <img src="images/happy-client-03.jpg" alt />
                  <h4>
                    Jack Paden <span>Restaurant Owner</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Categories Carousel / End */}
        </section>
        {/* Info Section */}
        <section
          className="fullwidth padding-top-75 padding-bottom-70"
          data-background-color="#f9f9f9"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h3 className="headline centered headline-extra-spacing">
                  <strong className="headline-with-separator">
                    תכנן את חופשת חלומותיך
                  </strong>
                  <span className="margin-top-25">
                    גלה כמה מהטיפים הטובים ביותר מרחבי העולם מצד השותפים והחברים
                    שלנו.<br></br>
                    גלה כמה מהרשומות הפופולריות ביותר!
                  </span>
                </h3>
              </div>
            </div>
            <div className="row icons-container">
              {/* Stage */}
              <div className="col-md-4">
                <div className="icon-box-2 with-line">
                  <i className="im im-icon-Map2" />
                  <h3>מצא מקום מעניין</h3>
                  <p>
                    Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                    luctus, finibus tellus ut, convallis eros sollicitudin.
                  </p>
                </div>
              </div>
              {/* Stage */}
              <div className="col-md-4">
                <div className="icon-box-2 with-line">
                  <i className="im im-icon-Mail-withAtSign" />
                  <h3>צרו קשר עם כמה בעלים</h3>
                  <p>
                    Maecenas pulvinar, risus in facilisis dignissim, quam nisi
                    hendrerit nulla, id vestibulum metus nullam viverra purus.
                  </p>
                </div>
              </div>
              {/* Stage */}
              <div className="col-md-4">
                <div className="icon-box-2">
                  <i className="im im-icon-Checked-User" />
                  <h3>בצע הזמנה</h3>
                  <p>
                    Faucibus ante, in porttitor tellus blandit et. Phasellus
                    tincidunt metus lectus sollicitudin feugiat consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Info Section / End */}

        {/* Footer
================================================== */}
        <Footer />
        {/* Footer / End */}
        {/* Back To Top Button */}
        <div id="backtotop">
          <a href="#" />
        </div>
      </div>
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
      {/* Style Switcher / End */}
    </div>
  );
}

export default connect(
  (state) => {
    return {
      category: state.category.category,
      selectedCategoryId: state.category.selectedCategoryId,
      popularCategories: state.category.popularCategories,
    };
  },
  (disatch) => {
    return {
      getAllCategories: function () {
        disatch(getAllCategories());
      },
      PopularCategories: function () {
        disatch(PopularCategories());
      },
      setSelectedCategory: function (id) {
        disatch(setSelectedCategoryId(id));
      },
      getResultOfSearchBYCategory: function (text) {
        debugger;
        disatch(getResultOfSearchByCategory(text));
      },
      getResultosSearchBYText: function (text) {
        disatch(getResultofSearchByText(text));
      },
      setUserLocation: function (CurrentUserLocation) {
        debugger
        disatch(setUserLocation(CurrentUserLocation))
      },
      setUserLocation: function (CurrentUserLocation) {
        debugger
        disatch(setUserLocation(CurrentUserLocation))
      },
    };
  }
)(withRouter(HomePage));
