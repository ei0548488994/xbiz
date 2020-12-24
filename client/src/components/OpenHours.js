import {
    withRouter,
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import {

} from "../redux/actions/category.action";
import { connect } from "react-redux";


function OpenHours(props) {
    let hours = 0;
    let date = new Date()
    let day = 0
    let hoursarr = [];
    let checkedbusiness;
    let length = 0
    let daysArr=["ראשון","שני","שלישי","רביעי","חמישי","שישי"];

    console.log("CheckedBusinessDetails" + props.CheckedBusinessDetails)
    if (props.CheckedBusinessDetails.opening_houers != undefined) {
        debugger
        Object.keys(props.CheckedBusinessDetails.opening_houers).forEach((key) =>
            hoursarr.push({ name:key, value: props.CheckedBusinessDetails.opening_houers[key] })
        );
        console.log(hoursarr)
    }
    // debugger;
    //localStorage.setItem('lat', props.CheckedBusinessDetails["location"]["lat"]);
    //localStorage.setItem('lng', props.CheckedBusinessDetails["location"]["lng"]);
    useEffect(() => {
        //shinuy
        debugger
        checkedbusiness = props.CheckedBusinessDetails;
        console.log("CheckedBusinessDetailsUse" + props.CheckedBusinessDetails)
        day = date.getDay() + 1;
        hours = date.getHours();
        console.log("date" + date, "hours" + hours, "dat" + day);
        debugger
        if (checkedbusiness != undefined) {
            if (hoursarr.length>0) {
                length = hoursarr.length;
            }
            //console.log("thisss" + hoursarr[0].value["start"], hoursarr.length)
            //console.log(hoursarr, length);
        }
    }, []);
    //shinuy
    // function checkHours() {
    //     debugger;
    //     if (checkedbusiness != undefined) {
    //         Object.keys(checkedbusiness.opening_houers).forEach((key) =>
    //             hoursarr.push({ name: key, value: checkedbusiness.opening_houers[key] })
    //         );
    //          length=hoursarr.length;
    //     }
    //     console.log("thisss" + hoursarr[0].value["start"], hoursarr.length)
    //     console.log(hoursarr,length);


    // }
    return (
        <>
            {/* <button onClick={checkHours}></button> */}
            <div className="boxed-widget opening-hours margin-top-35">
                <div className="listing-badge now-open">עכשיו פתוח</div>
                <h3><i className="sl sl-icon-clock" /> שעות פתיחה</h3>
                {hoursarr.length > 0 ?

                    hoursarr.map((item, i) => (
                        <ul>
                            <li key={i}>{daysArr[i]}:  {item.value.start}-{item.value.end}</li>
                        </ul>))
                    : ""}

            </div>
        </>
    )
}
export default connect(
    (state) => {
        return {
            // category: state.category.category,
            // selectedCategoryId: state.category.selectedCategoryId,
            // popularCategories: state.category.popularCategories,
            // latitude:state.location.latitude,
            // longitude:state.location.longitude,
            CheckedBusinessDetails: state.business.CheckedBusinessDetails,
        };
    },
    (disatch) => {
        return {
        };
    }
)(withRouter(OpenHours));
