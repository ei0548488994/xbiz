import React from 'react'
// import "../navigtor/dist/navigator.css"


export default function Navigator() {
    return (
        <>
                {/* Navigation
	================================================== */}
    {/* Responsive Navigation Trigger */}
    {/* <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder" /> Dashboard Navigation</a> */}
    <div className="dashboard-nav">
      <div className="dashboard-nav-inner">
        <ul data-submenu-title="Main">
          <li><a href="dashboard.html"><i className="sl sl-icon-settings" />ראשי </a></li>
          <li><a href="dashboard-messages.html">  <i className="sl sl-icon-envelope-open" /><span className="nav-tag messages">2</span>הודעות</a></li>
         
        </ul>
        <ul data-submenu-title="Listings">
          <li><a><i className="sl sl-icon-layers" /> הרישומים שלי</a>
            <ul>
              <li><a href="dashboard-my-listings.html"> <span className="nav-tag green">6</span>פעיל</a></li>
              <li><a href="dashboard-my-listings.html"> <span className="nav-tag yellow">1</span>Pending</a></li>
              <li><a href="dashboard-my-listings.html"> <span className="nav-tag red">2</span>לא בתוקף</a></li>
            </ul>	
          </li>
          <li><a href="dashboard-reviews.html"><i className="sl sl-icon-star" /> ביקורות</a></li>
          <li><a href="dashboard-bookmarks.html"><i className="sl sl-icon-heart" /> סמניות</a></li>
          <li className="active"><a href="dashboard-add-listing.html"><i className="sl sl-icon-plus" /> הוסף עסק</a></li>
        </ul>	
        <ul data-submenu-title="Account">
          <li><a href="dashboard-my-profile.html"><i className="sl sl-icon-user" /> הפרופיל שלי</a></li>
          <li><a href="index.html"><i className="sl sl-icon-power" /> התנתק</a></li>
        </ul>
      </div>
    </div>
    {/* Navigation / End */}

        </>
    )
}
