
import Navigator from "../navigtor/Navigator";
import "../../css/style.css";
import "../../css/main-color.css";
import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
// import "./dist/add_buisness.css";
import '../add_business/add_business.css';
import {
  getAllCategories,
} from '../../redux/actions/category.action';
import { createNewBusiness } from '../../redux/actions/business.action';
function Add_buisness(props) {

  //A statement of variables for a new business
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState([]);
  const [keyWords, setKeyWords] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [elevator, setElevator] = useState("");
  const [InstantBook, setInstantBook] = useState("");
  const [FriendlyWorkspace, setFriendlyWorkspace] = useState("");
  const [WirelessInternet, setWirelessInternet] = useState("");
  const [freeParkingOnPremises, setFreeParkingOnPremises] = useState("");
  //category check box
  const [isSelected, setIsSelected] = useState();
  var selected = false;
  // freeParkingOnStreet: { type: Boolean },
  // smokingAllowed: { type: Boolean },
  // events: { type: Boolean },
  // website: { type: String, maxlength: 35 },
  // facebook: { type: String, maxlength: 35 },
  // twitter: { type: String, maxlength: 35 },
  // googleplus: 
  //get mainCategory from state to props
  var mainCategoriesArr = [];
  if (props.category != undefined) {
    Object.keys(props.category).forEach(key => mainCategoriesArr.push({ name: key, value: props.category[key] }))
    console.log("if", mainCategoriesArr)
  }
  //functions:

  //this function push and slice 
  //the categories of the new business 
  //according to the business owner's settings
  function setOfCategory(categoryName) {
    var arrCategory = category;
    if (arrCategory.length == 0) {
      selected = true;
      //לבדוק למה UNDIFINE
      setIsSelected(selected);
    }
    else {
      arrCategory.map((item, i) => (
        <div key={i} >
          {item}
          {item == categoryName ? selected == false : selected == true}
        </div>

      ))
      console.log(selected);

      setIsSelected(selected);
    }
    if (selected == true) {
      arrCategory.push(categoryName);
      setCategory(u => arrCategory);
    }
    else {
      var index = arrCategory.indexOf(categoryName);
      arrCategory.slice(index,1);
      setCategory(u => arrCategory);
    }
  }
  function create() {
    debugger
    const newBusiness = {
      user: "",
      businessName: businessName,
      categoryList: category,
      description: description,
      adress: adress,
      location: "",
      email: email,
      phone: phone,
    };
    debugger
    props.createNewBusiness(newBusiness);
  }
  useEffect(() => {
    { props.getAllCategories() }
    console.log("out", props.category)
  }, [])

  return (
    <>
      {/* Wrapper */}
      <div className="wrapper d-flex justify-content-between">
        <div className="wrapper_Navigator">
          {/* <Navigator /> */}
        </div>
        {/* Dashboard */}
        <div className="dashboard">
          {/* Content
	================================================== */}
          <div className="dashboard-content">
            {/* Titlebar */}
            <div id="titlebar">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                  <h2 className="">הוסף עסק</h2>
                  {/* Breadcrumbs */}
                  <div id="breadcrumbs">
                    <nav className="">
                      <ul>
                        <li>
                          <a href="#">דף הבית</a>
                        </li>
                        <li>
                          <a href="#">ראשי</a>
                        </li>
                        <li>הוסף עסק</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div id="add-listing">
                  {/* Section */}
                  <div className="add-listing-section">
                    {/* Headline */}
                    <div className="add-listing-headline">
                      <h3>
                        <i className="sl sl-icon-doc" />
                        פרטים בסיסיים
                      </h3>
                    </div>
                    {/* Title */}
                    <div className="row with-forms">
                      <div className="col-md-12">
                        <h5>
                          שם עסק
                          <i
                            className="tip"
                            data-tip-content="Name of your business"
                          />
                        </h5>
                        <input
                          className="search-field"
                          type="text"
                          onChange={(e) => { setBusinessName(e.target.value) }}
                        />
                      </div>
                    </div>
                    {/* Row */}
                    <div className="row with-forms">
                      {/* Status */}
                      <div className="main-search-input-item">
                        <h5>קטגוריה</h5>
                        <div className="checkboxes in-row margin-bottom-20">
                          {mainCategoriesArr ?
                            mainCategoriesArr.map((option, i) => (
                              <div key={i} >
                                <input id={i} type="checkbox"
                                  onChange={() => { setOfCategory(option.value.mainCategoryName) }}
                                  name="check" />
                                <label htmlFor={i}>{option.value.mainCategoryName}</label>
                              </div>
                            ))
                            : ""}
                        </div>
                      </div>
                      {/* Type */}
                      <div className="col-md-6">
                        <h5>
                          מילות מפתח{" "}
                          <i
                            className="tip"
                            data-tip-content="Maximum of 15 keywords related with your business"
                          />
                        </h5>
                        <input
                          type="text"
                          placeholder="Keywords should be separated by commas"
                          onChange={(e) => { setKeyWords(e.target.value) }}
                        />
                      </div>
                    </div>
                    {/* Row / End */}
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="add-listing-section margin-top-45">
                    {/* Headline */}
                    <div className="add-listing-headline">
                      <h3>
                        <i className="sl sl-icon-location" /> מיקום
                      </h3>
                    </div>
                    <div className="submit-section">
                      {/* Row */}
                      <div className="row with-forms">
                        {/* City */}
                        <div className="col-md-6">
                          <h5>עיר</h5>
                          <select onChange={(e) => { setCity(e.target.value) }} className="chosen-select-no-single">
                            <option label="blank">בחר עיר</option>
                            <option>בני ברק</option>
                            <option>ירושלים</option>
                            <option>תל אביב</option>
                            <option>חיפה</option>
                            <option>ביתר</option>
                            <option>אלעד</option>
                            <option>אשדוד</option>
                          </select>
                        </div>
                        {/* Address */}
                        <div className="col-md-6">
                          <h5>כתובת</h5>
                          <input
                            type="text"
                            placeholder="e.g. 964 School Street"
                            onChange={(e) => { setAdress(e.target.value) }}
                          />
                        </div>
                        {/* City */}
                        <div className="col-md-6">
                          <h5>מדינה</h5>
                          <input type="text"
                            onChange={(e) => { setCountry(e.target.value) }}
                          />
                        </div>
                        {/* Zip-Code */}
                        <div className="col-md-6">
                          <h5>מיקוד</h5>
                          <input type="text"
                            onChange={(e) => { setPostalCode(e.target.value) }}
                          />
                        </div>
                      </div>
                      {/* Row / End */}
                    </div>
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="add-listing-section margin-top-45">
                    {/* Headline */}
                    <div className="add-listing-headline">
                      <h3>
                        <i className="sl sl-icon-picture" /> גלריה
                      </h3>
                    </div>
                    {/* Dropzone */}
                    <div className="submit-section">
                      <form action="/file-upload" className="dropzone" />
                    </div>
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="add-listing-section margin-top-45">
                    {/* Headline */}
                    <div className="add-listing-headline">
                      <h3>
                        <i className="sl sl-icon-docs" /> פרטים
                      </h3>
                    </div>
                    {/* Description */}
                    <div className="form">
                      <h5>תיאור</h5>
                      <textarea
                        className="WYSIWYG"
                        name="summary"
                        cols={40}
                        rows={3}
                        id="summary"
                        spellCheck="true"
                        defaultValue={""}
                        onChange={(e) => { setDescription(e.target.value) }}
                      />
                    </div>
                    {/* Row */}

                    {/* try */}
                    <div className="row with-forms">
                      {/* Phone */}
                      <div className="col-md-4">
                        <h5>
                          טלפון <span>(אופציונאלי)</span>
                        </h5>
                        <input onChange={(e) => { setPhone(e.target.value) }} type="text" />
                      </div>
                      {/* Website */}
                      <div className="col-md-4">
                        <h5>
                          אתר <span>(אופציונאלי)</span>
                        </h5>
                        <input onChange={(e) => { setWebsite(e.target.value) }} type="text" />
                      </div>
                      {/* Email Address */}
                      <div className="col-md-4">
                        <h5>
                          מייל <span>(אופציונאלי)</span>
                        </h5>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="text" />
                      </div>
                    </div>
                    {/* Row / End */}
                    {/* Row */}
                    <div className="row with-forms">
                      {/* Phone */}
                      <div className="col-md-4">
                        <h5 className="fb-input">
                          <i className="fa fa-facebook-square" /> Facebook{" "}
                          <span>(אופציונאלי)</span>
                        </h5>
                        <input
                          type="text"
                          placeholder="https://www.facebook.com/"
                        />
                      </div>
                      {/* Website */}
                      <div className="col-md-4">
                        <h5 className="twitter-input">
                          <i className="fa fa-twitter" /> Twitter{" "}
                          <span>(אופציונאלי)</span>
                        </h5>
                        <input
                          type="text"
                          placeholder="https://www.twitter.com/"
                        />
                      </div>
                      {/* Email Address */}
                      <div className="col-md-4">
                        <h5 className="gplus-input">
                          <i className="fa fa-google-plus" />
                          +גוגל <span>(אופציונאלי)</span>
                        </h5>
                        <input
                          type="text"
                          placeholder="https://plus.google.com"
                        />
                      </div>
                    </div>
                    {/* Row / End */}
                    {/* Checkboxes */}
                    <h5 className="margin-top-30 margin-bottom-10">
                      שירותים <span>(אופציונאלי)</span>
                    </h5>
                    <div className="checkboxes in-row margin-bottom-20">
                      <input id="check-a" type="checkbox" name="check" />
                      <label htmlFor="check-a">מעלית בבנין</label>
                      <input id="check-b" type="checkbox" name="check" />
                      <label htmlFor="check-b">פינת עבודה ידידותית</label>
                      <input id="check-c" type="checkbox" name="check" />
                      <label htmlFor="check-c">Instant Book</label>
                      <input id="check-d" type="checkbox" name="check" />
                      <label htmlFor="check-d">אינטרנט אלחוטי</label>
                      <input id="check-e" type="checkbox" name="check" />
                      <label htmlFor="check-e">Free parking on premises</label>
                      <input id="check-f" type="checkbox" name="check" />
                      <label htmlFor="check-f">חניה חינם במקום</label>
                      <input id="check-g" type="checkbox" name="check" />
                      <label htmlFor="check-g">עישון מותר</label>
                      <input id="check-h" type="checkbox" name="check" />
                      <label htmlFor="check-h">אירועים</label>
                    </div>
                    {/* Checkboxes / End */}
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="add-listing-section margin-top-45">
                    {/* Headline */}
                    <div className="add-listing-headline d-flex justify-content-between">
                      <h3>
                        <i className="fa fa-calendar-check-o" /> זמינות
                      </h3>
                      {/* Switcher */}
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                    {/* Switcher ON-OFF Content */}
                    <div className="switcher-content">
                      {/* Availablity Slots */}
                      {/* Set data-clock-type="24hr" to enable 24 hours clock type */}
                      <div
                        className="availability-slots"
                        data-clock-type="24hr"
                      >
                        {/* Single Day Slots */}
                        <div className="day-slots">
                          <div className="day-slot-headline">יום ראשון</div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          <div className="single-slot cloned">
                            <div className="single-slot-left">
                              <div className="single-slot-time" />
                              <button className="remove-slot">
                                <i className="fa fa-close" />
                              </button>
                            </div>
                            <div className="single-slot-right">
                              <strong>Slots:</strong>
                              <div className="plusminus horiz">
                                <button />
                                <input
                                  type="number"
                                  name="slot-qty"
                                  defaultValue={1}
                                  min={1}
                                  max={99}
                                />
                                <button />
                              </div>
                            </div>
                          </div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          {/* No slots */}
                          <div className="no-slots">No slots added</div>
                          {/* Slots Container */}
                          <div className="slots-container">
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  8:30 <i className="am-pm">am</i> - 9:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:00 <i className="am-pm">am</i> - 9:30{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:30 <i className="am-pm">am</i> - 10:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Slots Container / End */}
                          {/* Add Slot */}
                          <div className="add-slot">
                            <div className="add-slot-inputs">
                              <input
                                type="time"
                                className="time-slot-start"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-start twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                              <span>-</span>
                              <input
                                type="time"
                                className="time-slot-end"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-end twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                            </div>
                            <div className="add-slot-btn">
                              <button>Add</button>
                            </div>
                          </div>
                        </div>
                        {/* Single Day Slots / End */}
                        {/* Single Day Slots */}
                        <div className="day-slots">
                          <div className="day-slot-headline">יום שני</div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          <div className="single-slot cloned">
                            <div className="single-slot-left">
                              <div className="single-slot-time" />
                              <button className="remove-slot">
                                <i className="fa fa-close" />
                              </button>
                            </div>
                            <div className="single-slot-right">
                              <strong>Slots:</strong>
                              <div className="plusminus horiz">
                                <button />
                                <input
                                  type="number"
                                  name="slot-qty"
                                  defaultValue={1}
                                  min={1}
                                  max={99}
                                />
                                <button />
                              </div>
                            </div>
                          </div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          {/* No slots */}
                          <div className="no-slots">No slots added</div>
                          {/* Slots Container */}
                          <div className="slots-container">
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  8:30 <i className="am-pm">am</i> - 9:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:00 <i className="am-pm">am</i> - 9:30{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:30 <i className="am-pm">am</i> - 10:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Slots Container / End */}
                          {/* Add Slot */}
                          <div className="add-slot">
                            <div className="add-slot-inputs">
                              <input
                                type="time"
                                className="time-slot-start"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-start twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                              <span>-</span>
                              <input
                                type="time"
                                className="time-slot-end"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-end twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                            </div>
                            <div className="add-slot-btn">
                              <button>Add</button>
                            </div>
                          </div>
                        </div>
                        {/* Single Day Slots / End */}
                        {/* Single Day Slots */}
                        <div className="day-slots">
                          <div className="day-slot-headline">יום רביעי</div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          <div className="single-slot cloned">
                            <div className="single-slot-left">
                              <div className="single-slot-time" />
                              <button className="remove-slot">
                                <i className="fa fa-close" />
                              </button>
                            </div>
                            <div className="single-slot-right">
                              <strong>Slots:</strong>
                              <div className="plusminus horiz">
                                <button />
                                <input
                                  type="number"
                                  name="slot-qty"
                                  defaultValue={1}
                                  min={1}
                                  max={99}
                                />
                                <button />
                              </div>
                            </div>
                          </div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          {/* No slots */}
                          <div className="no-slots">No slots added</div>
                          {/* Slots Container */}
                          <div className="slots-container">
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  8:30 <i className="am-pm">am</i> - 9:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:00 <i className="am-pm">am</i> - 9:30{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:30 <i className="am-pm">am</i> - 10:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Slots Container / End */}
                          {/* Add Slot */}
                          <div className="add-slot">
                            <div className="add-slot-inputs">
                              <input
                                type="time"
                                className="time-slot-start"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-start twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                              <span>-</span>
                              <input
                                type="time"
                                className="time-slot-end"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-end twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                            </div>
                            <div className="add-slot-btn">
                              <button>Add</button>
                            </div>
                          </div>
                        </div>
                        {/* Single Day Slots / End */}
                        {/* Single Day Slots */}
                        <div className="day-slots">
                          <div className="day-slot-headline">יום חמישי</div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          <div className="single-slot cloned">
                            <div className="single-slot-left">
                              <div className="single-slot-time" />
                              <button className="remove-slot">
                                <i className="fa fa-close" />
                              </button>
                            </div>
                            <div className="single-slot-right">
                              <strong>Slots:</strong>
                              <div className="plusminus horiz">
                                <button />
                                <input
                                  type="number"
                                  name="slot-qty"
                                  defaultValue={1}
                                  min={1}
                                  max={99}
                                />
                                <button />
                              </div>
                            </div>
                          </div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          {/* No slots */}
                          <div className="no-slots">No slots added</div>
                          {/* Slots Container */}
                          <div className="slots-container">
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  8:30 <i className="am-pm">am</i> - 9:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:00 <i className="am-pm">am</i> - 9:30{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:30 <i className="am-pm">am</i> - 10:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Slots Container / End */}
                          {/* Add Slot */}
                          <div className="add-slot">
                            <div className="add-slot-inputs">
                              <input
                                type="time"
                                className="time-slot-start"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-start twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                              <span>-</span>
                              <input
                                type="time"
                                className="time-slot-end"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-end twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                            </div>
                            <div className="add-slot-btn">
                              <button>Add</button>
                            </div>
                          </div>
                        </div>
                        {/* Single Day Slots / End */}
                        {/* Single Day Slots */}
                        <div className="day-slots">
                          <div className="day-slot-headline">יום שישי</div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          <div className="single-slot cloned">
                            <div className="single-slot-left">
                              <div className="single-slot-time" />
                              <button className="remove-slot">
                                <i className="fa fa-close" />
                              </button>
                            </div>
                            <div className="single-slot-right">
                              <strong>Slots:</strong>
                              <div className="plusminus horiz">
                                <button />
                                <input
                                  type="number"
                                  name="slot-qty"
                                  defaultValue={1}
                                  min={1}
                                  max={99}
                                />
                                <button />
                              </div>
                            </div>
                          </div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          {/* No slots */}
                          <div className="no-slots">No slots added</div>
                          {/* Slots Container */}
                          <div className="slots-container">
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  8:30 <i className="am-pm">am</i> - 9:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:00 <i className="am-pm">am</i> - 9:30{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                            {/* Single Slot */}
                            <div className="single-slot">
                              <div className="single-slot-left">
                                <div className="single-slot-time">
                                  9:30 <i className="am-pm">am</i> - 10:00{" "}
                                  <i className="am-pm">am</i>
                                </div>
                                <button className="remove-slot">
                                  <i className="fa fa-close" />
                                </button>
                              </div>
                              <div className="single-slot-right">
                                <strong>Slots:</strong>
                                <div className="plusminus horiz">
                                  <button />
                                  <input
                                    type="number"
                                    name="slot-qty"
                                    defaultValue={1}
                                    min={1}
                                    max={99}
                                  />
                                  <button />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Slots Container / End */}
                          {/* Add Slot */}
                          <div className="add-slot">
                            <div className="add-slot-inputs">
                              <input
                                type="time"
                                className="time-slot-start"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-start twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                              <span>-</span>
                              <input
                                type="time"
                                className="time-slot-end"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-end twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                            </div>
                            <div className="add-slot-btn">
                              <button>Add</button>
                            </div>
                          </div>
                        </div>
                        {/* Single Day Slots / End */}
                        {/* Single Day Slots */}
                        <div className="day-slots">
                          <div className="day-slot-headline">Saturday</div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          <div className="single-slot cloned">
                            <div className="single-slot-left">
                              <div className="single-slot-time" />
                              <button className="remove-slot">
                                <i className="fa fa-close" />
                              </button>
                            </div>
                            <div className="single-slot-right">
                              <strong>Slots:</strong>
                              <div className="plusminus horiz">
                                <button />
                                <input
                                  type="number"
                                  name="slot-qty"
                                  defaultValue={1}
                                  min={1}
                                  max={99}
                                />
                                <button />
                              </div>
                            </div>
                          </div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          {/* No slots */}
                          <div className="no-slots">No slots added</div>
                          {/* Slots Container */}
                          <div className="slots-container"></div>
                          {/* Slots Container / End */}
                          {/* Add Slot */}
                          <div className="add-slot">
                            <div className="add-slot-inputs">
                              <input
                                type="time"
                                className="time-slot-start"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-start twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                              <span>-</span>
                              <input
                                type="time"
                                className="time-slot-end"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-end twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                            </div>
                            <div className="add-slot-btn">
                              <button>Add</button>
                            </div>
                          </div>
                        </div>
                        {/* Single Day Slots / End */}
                        {/* Single Day Slots */}
                        <div className="day-slots">
                          <div className="day-slot-headline">יום ראשון</div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          <div className="single-slot cloned">
                            <div className="single-slot-left">
                              <div className="single-slot-time" />
                              <button className="remove-slot">
                                <i className="fa fa-close" />
                              </button>
                            </div>
                            <div className="single-slot-right">
                              <strong>Slots:</strong>
                              <div className="plusminus horiz">
                                <button />
                                <input
                                  type="number"
                                  name="slot-qty"
                                  defaultValue={1}
                                  min={1}
                                  max={99}
                                />
                                <button />
                              </div>
                            </div>
                          </div>
                          {/* Slot For Cloning / Do NOT Remove*/}
                          {/* No slots */}
                          <div className="no-slots">No slots added</div>
                          {/* Slots Container */}
                          <div className="slots-container"></div>
                          {/* Slots Container / End */}
                          {/* Add Slot */}
                          <div className="add-slot">
                            <div className="add-slot-inputs">
                              <input
                                type="time"
                                className="time-slot-start"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-start twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                              <span>-</span>
                              <input
                                type="time"
                                className="time-slot-end"
                                min="00:00"
                                max="12:00"
                              />
                              <select className="time-slot-end twelve-hr" id>
                                <option>am</option>
                                <option>pm</option>
                              </select>
                            </div>
                            <div className="add-slot-btn">
                              <button>Add</button>
                            </div>
                          </div>
                        </div>
                        {/* Single Day Slots / End */}
                      </div>
                      {/* Availablity Slots / End */}
                    </div>
                    {/* Switcher ON-OFF Content / End */}
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="add-listing-section margin-top-45">
                    {/* Headline */}
                    <div className="add-listing-headline d-flex justify-content-between">
                      <h3>
                        <i className="sl sl-icon-clock" /> שעות פתיחה
                      </h3>
                      {/* Switcher */}
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                    {/* Switcher ON-OFF Content */}
                    <div className="switcher-content">
                      {/* Day */}
                      <div className="row opening-day">
                        <div className="col-md-2">
                          <h5>יום ראשון</h5>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Opening Time"
                          >
                            <option label="Opening Time" />
                            <option>פתיחה</option>
                            <option>1 AM</option>
                            <option>2 AM</option>
                            <option>3 AM</option>
                            <option>4 AM</option>
                            <option>5 AM</option>
                            <option>6 AM</option>
                            <option>7 AM</option>
                            <option>8 AM</option>
                            <option>9 AM</option>
                            <option>10 AM</option>
                            <option>11 AM</option>
                            <option>12 AM</option>
                            <option>1 PM</option>
                            <option>2 PM</option>
                            <option>3 PM</option>
                            <option>4 PM</option>
                            <option>5 PM</option>
                            <option>6 PM</option>
                            <option>7 PM</option>
                            <option>8 PM</option>
                            <option>9 PM</option>
                            <option>10 PM</option>
                            <option>11 PM</option>
                            <option>12 PM</option>
                          </select>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Closing Time"
                          >
                            <option label="Closing Time" />
                            <option>סגירה</option>
                            <option>1 AM</option>
                            <option>2 AM</option>
                            <option>3 AM</option>
                            <option>4 AM</option>
                            <option>5 AM</option>
                            <option>6 AM</option>
                            <option>7 AM</option>
                            <option>8 AM</option>
                            <option>9 AM</option>
                            <option>10 AM</option>
                            <option>11 AM</option>
                            <option>12 AM</option>
                            <option>1 PM</option>
                            <option>2 PM</option>
                            <option>3 PM</option>
                            <option>4 PM</option>
                            <option>5 PM</option>
                            <option>6 PM</option>
                            <option>7 PM</option>
                            <option>8 PM</option>
                            <option>9 PM</option>
                            <option>10 PM</option>
                            <option>11 PM</option>
                            <option>12 PM</option>
                          </select>
                        </div>
                      </div>
                      {/* Day / End */}
                      {/* Day */}
                      <div className="row opening-day js-demo-hours">
                        <div className="col-md-2">
                          <h5>יום שני</h5>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Opening Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Closing Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                      </div>
                      {/* Day / End */}
                      {/* Day */}
                      <div className="row opening-day js-demo-hours">
                        <div className="col-md-2">
                          <h5>יום שלישי</h5>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Opening Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Closing Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                      </div>
                      {/* Day / End */}
                      {/* Day */}
                      <div className="row opening-day js-demo-hours">
                        <div className="col-md-2">
                          <h5>יום רביעי</h5>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Opening Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Closing Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                      </div>
                      {/* Day / End */}
                      {/* Day */}
                      <div className="row opening-day js-demo-hours">
                        <div className="col-md-2">
                          <h5>יום חמישי</h5>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Opening Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Closing Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                      </div>
                      {/* Day / End */}
                      {/* Day */}
                      <div className="row opening-day js-demo-hours">
                        <div className="col-md-2">
                          <h5>יום שישי</h5>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Opening Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Closing Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                      </div>
                      {/* Day / End */}
                      {/* Day */}
                      <div className="row opening-day js-demo-hours">
                        <div className="col-md-2">
                          <h5>שבת</h5>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Opening Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="chosen-select"
                            data-placeholder="Closing Time"
                          >
                            {/* Hours added via JS (this is only for demo purpose) */}
                          </select>
                        </div>
                      </div>
                      {/* Day / End */}
                    </div>
                    {/* Switcher ON-OFF Content / End */}
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="add-listing-section margin-top-45">
                    {/* Headline */}
                    <div className="add-listing-headline d-flex justify-content-between">
                      <h3>
                        <i className="sl sl-icon-book-open" /> תמחור
                      </h3>
                      {/* Switcher */}
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                    {/* Switcher ON-OFF Content */}
                    <div className="switcher-content">
                      <div className="row">
                        <div className="col-md-12">
                          <table id="pricing-list-container">
                            <tbody>
                              <tr className="pricing-list-item pattern">
                                <td>
                                  <div className="fm-move">
                                    <i className="sl sl-icon-cursor-move" />
                                  </div>
                                  <div className="fm-input pricing-name">
                                    <input type="text" placeholder="Title" />
                                  </div>
                                  <div className="fm-input pricing-ingredients">
                                    <input
                                      type="text"
                                      placeholder="Description"
                                    />
                                  </div>
                                  <div className="fm-input pricing-price">
                                    <input
                                      type="text"
                                      placeholder="Price"
                                      data-unit="USD"
                                    />
                                  </div>
                                  <div className="fm-close">
                                    <a className="delete" href="#">
                                      <i className="fa fa-remove" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="wrapper-pricing-button d-flex justify-content-end p-3">
                            <a href="#" className="button add-pricing-list-item">
                              הוסף מוצר                          </a>
                            <a href="#" className="button add-pricing-submenu">
                              הוסף קטגוריה                          </a></div>
                        </div>
                      </div>
                    </div>
                    {/* Switcher ON-OFF Content / End */}
                  </div>
                  {/* Section / End */}
                  <div className="wrapper-preview-button d-flex justify-content-end pl-4">
                    <a href="#" className="button preview">
                      תצוגה מקדימה <i className="fa fa-arrow-circle-right" />
                    </a></div>
                </div>
                <div className="wrapper-preview-button d-flex justify-content-end pl-4 ">
                  <button className="button preview" onChange={create}>
                    יצירת קשר <i className="fa fa-arrow-circle-right" />
                  </button></div>
              </div>
              {/* Copyrights */}
              <div className="col-md-12">
                <div className="copyrights">
                  © 2019 Listeo. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
          {/* Content / End */}
        </div>
        {/* Dashboard / End */}
      </div>
      {/* Wrapper / End */}
      <script type="text/javascript" src="scripts/dropzone.js"></script>
    </>
  );
}
export default connect(
  (state) => {
    return {
      category: state.category.category,
      // selectedCategoryId: state.category.selectedCategoryId
    }
  },
  (disatch) => {

    return {
      getAllCategories: function () {
        disatch(getAllCategories())
      },

      createNewBusiness: function (business) {
        disatch(createNewBusiness(business));
      },
      // setSelectedCategory: function (id) {
      //     disatch(setSelectedCategoryId(id))
      // },
      // getResultOfSearchBYCategory: function (text) {
      //     disatch(getResultOfSearchByCategory(text))
      // },
      // getResultosSearchBYText: function (text) {
      //     disatch(getResultofSearchByText(text))
      // }
    }
  }
  // withRouter
)((Add_buisness))
