import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { withRouter,useParams } from 'react-router-dom';
import ItemResultSearchScond from './ItemResultSearchScond'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import GeolocationService from './../services/geolocation.service'
import { getAllCategories, setSelectedCategoryId, setCategory, getResultOfSearchByCategory } from '../redux/actions/category.action';
import { setSelectedBusinessDetails, addClicksToBusiness, addShereToBusiness } from '../redux/actions/business.action'

const ResultSearckListSecond = (props) => {
     let { result } = useParams();
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
    var arrResultOfSearch = [];
    // debugger;
    debugger;
    Object.keys(props.resultOfSearch).forEach(key => arrResultOfSearch.push({ name: key, value: props.resultOfSearch[key] }))
    console.log("ifarrResult", arrResultOfSearch)
    if (arrResultOfSearch.length > 0 && !arrAfterSort) {
        debugger
        sortbynerlest()
    }

    async function sortbynerlest() {
        debugger
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
        //shinuy
        if (result) {
            var text = result;
            props.getResultosSearchBYText(text);
        }
        { props.getAllCategories() }
        console.log("out", props.category)
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-8 padding-right-30">
                        <div className="row margin-bottom-25">
                            <div className="col-md-6 col-xs-6">

                            </div>
                            <div className="col-md-6 col-xs-6">
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
                        <div className="row">


                            {/* ///////// */}
                            <div className="col-lg-12 col-md-12" onClick={() => {
                                props.history.push('/BusinessDetails')
                            }}>
                                {arrResultOfSearch ? arrResultOfSearch.map((option, i) => (
                                    option.value.map((val, i) => (
                                        <div key={i} className="col-lg-12 col-md-12"  >
                                            <div className="listing-item-container list-layout">
                                                <a className="listing-item">

                                                    <div className="listing-item-image" onClick={() => {

                                                        props.history.push('/BusinessDetails')
                                                        props.setBusinessSelectedDetails(val)
                                                    }}>
                                                        <img src="images/listing-item-06.jpg" alt />
                                                        {/* <span className="tag">Eat &amp; Drink</span> */}
                                                        <span className="tag">{val.description}</span>
                                                    </div>

                                                    <div className="listing-item-content">
                                                        <div className="listing-badge now-closed">Now Closed</div>
                                                        <div className="listing-item-inner">
                                                            {/* <h3>Think Coffee</h3> */}
                                                            <h3>{val.businessName}<i className="verified-icon" /></h3>

                                                            {/* <span>215 Terry Lane, New York</span> */}
                                                            {val.adress ?
                                                                <span>{val.adress.street + " " + val.adress.city + " " + val.adress.state}</span>
                                                                : ""}
                                                            {/* <div className="star-rating" data-rating={5.0}>
                                                        <div className="rating-counter">(31 reviews)</div>
                                                    </div> */}
                                                        </div>
                                                        {/* <span className="like-icon" /> */}
                                                        <span className="like-icon" onClick={() => { props.addShare(val._id, "5fcfa1925163a603f8092c96") }} />

                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                )) : ""}


                            </div>
                        </div>
                        {/* /////// */}

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

                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="sidebar">

                            <div className="widget margin-bottom-40">
                                <h3 className="margin-top-0 margin-bottom-30">Filters</h3>

                                <div className="row with-forms">

                                    <div className="col-md-12">
                                        <input type="text" placeholder="What are you looking for?" defaultValue />
                                    </div>
                                </div>


                                <div className="row with-forms">

                                    <div className="col-md-12">
                                        <select data-placeholder="All Categories" className="chosen-select">
                                            <option>All Categories</option>
                                            <option>Shops</option>
                                            <option>Hotels</option>
                                            <option>Restaurants</option>
                                            <option>Fitness</option>
                                            <option>Events</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row with-forms">

                                    <div className="col-md-12">
                                        <div className="input-with-icon location">
                                            <div id="autocomplete-container">
                                                <input id="autocomplete-input" type="text" placeholder="Location" />
                                            </div>
                                            <a href="#"><i className="fa fa-map-marker" /></a>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="range-slider">
                                    <input className="distance-radius" type="range" min={1} max={100} step={1} defaultValue={50} data-title="Radius around selected destination" />
                                </div>
                                <a href="#" className="more-search-options-trigger margin-bottom-5 margin-top-20" data-open-title="More Filters" data-close-title="More Filters" />
                                <div className="more-search-options relative">

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

                                </div>

                                <button className="button fullwidth margin-top-25">Update</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default connect(
    (state) => {
        return {
            resultOfSearch: state.category.resultOfSearch,
            category: state.category.category,
            selectedCategoryId: state.category.selectedCategoryId,
            lat: state.location.currentUserLocation.latitude,
            lon: state.location.currentUserLocation.longitude
        }
    },
    (disatch) => {
        return {
            addClicks: function (businessId) {
                debugger
                disatch(addClicksToBusiness(businessId))
            },
            setBusinessSelectedDetails: function (business) {
                disatch(setSelectedBusinessDetails(business))
            },
            getAllCategories: function () {
                disatch(getAllCategories())
            },
            setSelectedCategory: function (id) {
                disatch(setSelectedCategoryId(id))
            },
            getResultOfSearchBYCategory: function (text) {
                disatch(getResultOfSearchByCategory(text))
            },
            addShare: function (businessId, idUser) {
                debugger
                disatch(addShereToBusiness(businessId, idUser))
            },
        }
    }
)(withRouter(ResultSearckListSecond))