import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getAllCategories, setSelectedCategoryId, getResultOfSearchByCategory, getResultofSearchByText } from '../redux/actions/category.action';
import { setSelectedBusinessDetails, addClicksToBusiness, getBusinessBybId } from '../redux/actions/business.action'
import {setUserLocation} from '../redux/actions/location.action'
import GeolocationService from './../services/geolocation.service'

const ResoltSearckListFirst = (props) => {
    const [arrAfterSort, setArrAfterSort] = useState([]);
    const [CurrentUserLocation, setCurrentUserLocationLatLng] = useState({ "lat": 0, "lng": 0 });
    const [selectedText, setSelectedText] = useState("");
    // const resultOfSearch = useSelector((state) => state.resultOfSearch)
    // console.log(resultOfSearch);
    let arrResultOfSearch = [];
    //  Object.keys(props.category).forEach(key => arr2.push({ name: key, value: props.category[key] }))
    //  if(arr2!=undefined){
    //      arr3=arr2[0].value;}
    // console.log("if", arr2)
    // debugger
    // console.log("props resultofsearch", props.resultOfSearch);
    // console.log("props arr", props.category);
    // debugger
    // if(arrResultOfSearch)
    // {
    //     arr4=arrResultOfSearch[0].value;
    // }
    debugger;
    Object.keys(props.resultOfSearch).forEach(key => arrResultOfSearch.push({ name: key, value: props.resultOfSearch[key] }))
    console.log("ifarrResult", arrResultOfSearch)
    if (arrResultOfSearch.length > 0 && !arrAfterSort) {
        debugger
        sortbynerlest()
    }
    // aa();
    function flagSearchByText(e) {
        setSelectedText(e);
        console.log(e)
    }
    ////change
    function searchClick() {
        {
            debugger
            if (selectedText != "") {
                debugger
                props.getResultosSearchBYText(selectedText)
            }

        }
    }
    useEffect(() => {
        debugger
        setCurrentUserLocationLatLng({ "lat": localStorage.getItem('CurrentUserLocationLat'), "lng": localStorage.getItem('CurrentUserLocationLng') })
        props.setUserLocation(CurrentUserLocation)
    }, [])
    async function sortbynerlest() {
        let myarr = []
        let scoundArr = []
        myarr = await GeolocationService.beginSort(props.lat, props.lon, arrResultOfSearch)
        console.log(myarr, "uyuyuyuyyyyyyyyyyyyyyyyyy")
        for (let i = 0; i < myarr.length; i++) {
            scoundArr[myarr[i].index] = props.resultOfSearch["MainCategories"][i]
        }
        setArrAfterSort([...scoundArr]);
        arrResultOfSearch = arrAfterSort
        debugger
        console.log(arrAfterSort, "fgfgfgfgfgfgfgfgfgfgfg")
    }
    return (
        <>
            <div className="col-lg-9 col-md-8 padding-right-30">
                <div className="row margin-bottom-25">
                    <div className="col-md-6 col-xs-6">
                        <div className="sort-by">
                            <div className="sort-by-select">
                                <select data-placeholder="Default order" className="chosen-select-no-single">
                                    <option>מיון ברירת מחדל</option>
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



                    <div className="col-lg-12 col-md-12" onClick={() => {
                    }}>

                        {arrResultOfSearch ?
                            arrResultOfSearch.map((option, i) => (
                                option.value.map((val, i) => (
                                    <div key={i} className="col-lg-6 col-md-12">

                                        <a
                                            className="listing-item-container">
                                            <div onClick={() => {
                                                  props.history.push(`/business/${val._id}`)
                                                props.addClicks(val._id)
                                                debugger
                                                //<Link to='/BusinessDetails' params={{id: val._id}} />
                                                props.setBusinessSelectedDetails(val)
                                                // props.history.push('/BusinessDetails')


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
                            : 
                            //props.getBusinessById(id)
                            props.history.push(`/BusinessDetails`)
                            }
                        {arrAfterSort.length > 0 ? <h1>yes</h1> : <h1>no</h1>}
                    </div>
                </div>
                <div className="clearfix" />
                <div className="row">
                    <div className="col-md-12">
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
                        <h3 className="margin-top-0 margin-bottom-30">סינונים</h3>
                        <div className="row with-forms">
                            <div className="col-md-12">
                                <input type="text" placeholder="מה אתה מחפש?" defaultValue />
                            </div>
                        </div>
                        {/* <div className="row with-forms">
                            <div className="col-md-12">
                                <select
                                    // onChange={(e) => { setSelectedCatgory(e.target.value) }}
                                    data-placeholder="All Categories" className="chosen-select">
                                    {arr2 ?
                                        arr2.map((option, i) => (
                                            <option key={i} >

                                                {option.value.categoryName}
                                            </option>
                                        ))
                                        : ""}
                                </select>
                            </div>
                        </div> */}
                        {/* <div className="main-search-input-item">
                           
                        </div> */}
                        <div className="row with-forms">
                            <div className="col-md-12">
                                <div className="input-with-icon location">
                                    <div id="autocomplete-container">
                                        <input id="autocomplete-input" type="text" placeholder="מיקום" />
                                    </div>
                                    <a href="#"><i className="fa fa-map-marker" /></a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="range-slider">
                            <input className="distance-radius" type="range" min={1} max={100} step={1} defaultValue={50} data-title="Radius around selected destination" />
                        </div>
                        <a href="#" className="more-search-options-trigger margin-bottom-5 margin-top-20" data-open-title="עוד סינונים" data-close-title="More Filters" />
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
                        <button className="button fullwidth margin-top-25" onClick={searchClick}>עדכן</button>
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
            getResultosSearchBYText: function (text) {
                disatch(getResultofSearchByText(text))
            },
            getBusinessById: function (id) {
                debugger
                disatch(getBusinessBybId(id))
            },       
            setUserLocation: function (CurrentUserLocation) {
                debugger
                disatch(setUserLocation(CurrentUserLocation))
              }
        }
    }
)(withRouter(ResoltSearckListFirst))
