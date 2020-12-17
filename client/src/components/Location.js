import React from 'react'

export default function Location() {
    return (
        <>
             <div id="listing-location" className="listing-section">
            <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>
            <div id="singleListingMap-container">
              <div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger" />
              <a href="#" id="streetView">Street View</a>
            </div>
          </div> 
        </>
    )
}