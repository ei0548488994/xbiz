import React, { useEffect,useState } from 'react'
import Footer from './Footer'
import { withRouter } from 'react-router-dom';
import ItemResultSearchScond from './ItemResultSearchScond'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { getAllCategories, setSelectedCategoryId, setCategory, getResultOfSearchByCategory } from '../redux/actions/category.action';
import { setSelectedBusinessDetails } from '../redux/actions/business.action'
import GeolocationService from './../services/geolocation.service'

const ResultSearckListSecond = (props) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [arrAfterSort, setArrAfterSort] = useState([]);

    var mainCategoriesArr = [];
    // debugger;
    if (props.category != undefined) {
        Object.keys(props.category).forEach(key => mainCategoriesArr.push({ name: key, value: props.category[key] }))
        console.log("if", mainCategoriesArr)
    }
    var arrResultOfSearch = [];
    Object.keys(props.resultOfSearch).forEach(key => arrResultOfSearch.push({ name: key, value: props.resultOfSearch[key] }))
    if (arrResultOfSearch.length > 0 && !arrAfterSort) {
        debugger
        sortbynerlest()
    }
    var arr2 = [];
    // debugger;
    if (props.category.length > 0) {
        Object.keys(props.category).forEach(key => arr2.push({ name: key, value: props.category[key] }))
        console.log("if", arr2)
    }

    async function sortbynerlest() {
        let myarr = []
        let scoundArr = []
        myarr = await GeolocationService.beginSort(props.lat, props.lon, arrResultOfSearch)
        for (let i = 0; i < myarr.length; i++) {
            scoundArr[myarr[i].index] = props.resultOfSearch["MainCategories"][i]
        }
        setArrAfterSort([...scoundArr]);
        arrResultOfSearch = arrAfterSort
        debugger
    }
    function setSelectedCatgory(e) {
        var SelectedCategoryId;
        debugger
        mainCategoriesArr.forEach(element => {
            if (element.value.mainCategoryName == e) {
                var SelectedCategoryId = element.value._id
                console.log(SelectedCategoryId)
                setSelectedCategory(SelectedCategoryId);
            }
        });
    }
    // function searchClick() {
    //     {
    //         debugger
    //         props.history.push('/ResultOfSearchList')
    //         if (selectedCategory != "") {
    //             props.setSelectedCategory(selectedCategory)
    //             debugger
    //             props.getResultOfSearchBYCategory(selectedCategory)
    //         }
            // if (selectedText != "") {
            //     props.getResultosSearchBYText(selectedText)
            // }

    //     }
    // }
    
    useEffect(() => {
        { props.getAllCategories() }
        console.log("out", props.category)
    }, [])

    return (
        <>
            <div className="clearfix" >
                {/* Header Container / End */}
                {/* Titlebar
================================================== */}
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Listings</h2><span>Grid Layout With Sidebar</span>
                                {/* Breadcrumbs */}
                                <nav id="breadcrumbs">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li>Listings</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-8 padding-right-30">
                            {/* Sorting / Layout Switcher */}
                            <div className="row margin-bottom-25">
                                <div className="col-md-6 col-xs-6">
                                    {/* Sort by */}
                                    <div className="sort-by">
                                        <div className="sort-by-select">
                                            <select data-placeholder="Default order" className="chosen-select-no-single">
                                                <option>Default Order</option>
                                                <option>Highest Rated</option>
                                                <option>Most Reviewed</option>
                                                <option>Newest Listings</option>
                                                <option>Oldest Listings</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sorting / Layout Switcher / End */}



                            <div className="row">
                                <div className="col-lg-12 col-md-12" onClick={() => {
                                    props.history.push('/BusinessDetails')
                                }}>

                                    {arrResultOfSearch ?
                                        arrResultOfSearch.map((option, i) => (
                                            option.value.map((val, i) => (
                                                <div key={i} className="col-lg-6 col-md-12">
                                                    <a
                                                        //  href="listings-single-page.html"
                                                        className="listing-item-container">
                                                        <div onClick={() => {
                                                            props.history.push('/BusinessDetails')
                                                            props.setBusinessSelectedDetails(val)
                                                        }} className="listing-item">
                                                            <img src="images/listing-item-01.jpg" alt />
                                                            <div className="listing-badge now-open">OPEN NOW</div>
                                                            <div className="listing-item-content">
                                                                {/* <span className="tag">Eat &amp; Drink</span> */}
                                                                <span className="tag">{val.description}</span>
                                                                <h3>{val.businessName}<i className="verified-icon" /></h3>
                                                                {val.adress ?
                                                                    <span>{val.adress.street + " " + val.adress.city + " " + val.adress.state}</span>
                                                                    : ""}</div>
                                                            <span className="like-icon" />
                                                        </div>
                                                        <div className="star-rating" data-rating="3.5">
                                                            <div className="rating-counter">(12 reviews)</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            ))
                                            // <div key={i} className="col-lg-6 col-md-12">
                                            //     <a
                                            //         //  href="listings-single-page.html"
                                            //         className="listing-item-container">
                                            //         <div onClick={() => {
                                            //             props.history.push('/BusinessDetails')
                                            //             props.setBusinessSelectedDetails(option)
                                            //         }} className="listing-item">
                                            //             <img src="images/listing-item-01.jpg" alt />
                                            //             <div className="listing-badge now-open">OPEN NOW</div>
                                            //             <div className="listing-item-content">
                                            //                 {/* <span className="tag">Eat &amp; Drink</span> */}
                                            //                 <span className="tag">{option.value.description}</span>
                                            //                 <h3>{option.value.businessName}<i className="verified-icon" /></h3>
                                            //                 {option.value.adress ?
                                            //                     <span>{option.value.adress.street + " " + option.value.adress.city + " " + option.value.adress.state}</span>
                                            //                     : ""}</div>
                                            //             <span className="like-icon" />
                                            //         </div>
                                            //         <div className="star-rating" data-rating="3.5">
                                            //             <div className="rating-counter">(12 reviews)</div>
                                            //         </div>
                                            //     </a>
                                            // </div>
                                        ))
                                        : ""}
                                </div>
                            </div>



                            {/* <div className="row"> */}
                            {/* Listing Item */}
                            {/* <ItemResultSearchScond /> */}
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            {/* <ItemResultSearchScond /> */}
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            {/* <div className="col-lg-6 col-md-12">
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
                                </div> */}
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            {/* <div className="col-lg-6 col-md-12">
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
                                </div> */}
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            {/* <div className="col-lg-6 col-md-12">
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
                                </div> */}
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            {/* <div className="col-lg-6 col-md-12">
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
                                        <div className="star-rating" data-rating={5.0}>
                                            <div className="rating-counter">(31 reviews)</div>
                                        </div>
                                    </a>
                                </div> */}
                            {/* Listing Item / End */}
                            {/* </div> */}
                            {/* Pagination */}
                            <div className="clearfix" />
                            <div className="row">
                                <div className="col-md-12">
                                    {/* Pagination */}
                                    <div className="pagination-container margin-top-20 margin-bottom-40">
                                        <nav className="pagination">
                                            <ul>
                                                <li><a href="#" className="current-page">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#"><i className="sl sl-icon-arrow-right" /></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination / End */}
                        </div>
                        {/* Sidebar
		================================================== */}
                        <div className="col-lg-3 col-md-4">
                            <div className="sidebar">
                                {/* Widget */}
                                <div className="widget margin-bottom-40">
                                    <h3 className="margin-top-0 margin-bottom-30">Filters</h3>
                                    {/* Row */}
                                    <div className="row with-forms">
                                        {/* Cities */}
                                        <div className="col-md-12">
                                            <input type="text" placeholder="What are you looking for?" />
                                        </div>
                                    </div>
                                    {/* Row / End */}
                                    {/* Row */}
                                    <div className="row with-forms">
                                        {/* Type */}
                                        <div className="col-md-12">
                                        
                                            <select data-placeholder="All Categories" className="chosen-select" onClick={(e) => { setSelectedCatgory(e.target.value) }}>
                                                {mainCategoriesArr ?
                                                    mainCategoriesArr.map((option, i) => (
                                                        <option key={i}>

                                                            {option.value.mainCategoryName}
                                                        </option>
                                                    ))
                                                    : ""}
                                            </select>

                                            {/* <select data-placeholder="All Categories" className="chosen-select">
                                                <option>All Categories</option>
                                                <option>Shops</option>
                                                <option>Hotels</option>
                                                <option>Restaurants</option>
                                                <option>Fitness</option>
                                                <option>Events</option>
                                            </select> */}
                                            {/* <select
                                                // onChange={(e) => { setSelectedCatgory(e.target.value) }}
                                                data-placeholder="All Categories" className="chosen-select">
                                                {arr2 ?
                                                    arr2.map((option, i) => (
                                                        <option key={i} >
                                                            {option.value.categoryName}
                                                        </option>
                                                    ))
                                                    : ""}
                                            </select> */}
                                        </div>
                                    </div>
                                    {/* Row / End */}
                                    {/* Row */}

                                    <div className="row with-forms">
                                        {/* Cities */}
                                        <div className="col-md-12">
                                            <div className="input-with-icon location">
                                                <div id="autocomplete-container">
                                                    <input id="autocomplete-input" type="text" placeholder="Location" />
                                                </div>
                                                <a href="#"><i className="fa fa-map-marker" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Row / End */}
                                    <br />
                                    {/* Area Range */}
                                    <div className="range-slider">
                                        <input className="distance-radius" type="range" min={1} max={100} step={1} defaultValue={50} data-title="Radius around selected destination" />
                                    </div>
                                    {/* More Search Options */}
                                    <a href="#" className="more-search-options-trigger margin-bottom-5 margin-top-20" data-open-title="More Filters" data-close-title="More Filters" />
                                    <div className="more-search-options relative">
                                        {/* Checkboxes */}
                                        <div className="checkboxes one-in-row margin-bottom-15">
                                            <input id="check-a" type="checkbox" name="check" />
                                            <label htmlFor="check-a">Elevator in building</label>
                                            <input id="check-b" type="checkbox" name="check" />
                                            <label htmlFor="check-b">Friendly workspace</label>
                                            <input id="check-c" type="checkbox" name="check" />
                                            <label htmlFor="check-c">Instant Book</label>
                                            <input id="check-d" type="checkbox" name="check" />
                                            <label htmlFor="check-d">Wireless Internet</label>
                                            <input id="check-e" type="checkbox" name="check" />
                                            <label htmlFor="check-e">Free parking on premises</label>
                                            <input id="check-f" type="checkbox" name="check" />
                                            <label htmlFor="check-f">Free parking on street</label>
                                            <input id="check-g" type="checkbox" name="check" />
                                            <label htmlFor="check-g">Smoking allowed</label>
                                            <input id="check-h" type="checkbox" name="check" />
                                            <label htmlFor="check-h">Events</label>
                                        </div>
                                        {/* Checkboxes / End */}
                                    </div>
                                    {/* More Search Options / End */}
                                    <button className="button fullwidth margin-top-25">Update</button>
                                </div>
                                {/* Widget / End */}
                            </div>
                        </div>
                        {/* Sidebar / End */}
                    </div>
                </div>
                {/* Footer
================================================== */}
                <Footer />
                {/* Footer / End */}
                {/* Back To Top Button */}
                <div id="backtotop"><a href="#" /></div>
            </div>
        </>
    )
}
export default connect(
    (state) => {
        return {
            category: state.category.category,
            selectedCategoryId: state.category.selectedCategoryId,
            resultOfSearch: state.category.resultOfSearch,
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
            setBusinessSelectedDetails: function (businessId) {
                disatch(setSelectedBusinessDetails(businessId))
            },
        }
    }
)(withRouter(ResultSearckListSecond))