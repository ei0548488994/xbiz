import React ,{useEffect}from 'react'
import { withRouter } from 'react-router-dom';

function ItemResultSearchFirst(props) {
    return (
        <>
               <div className="col-lg-12 col-md-12" onClick={() => {
                        props.history.push('/BusinessDetails')}}>
                        <div className="listing-item-container list-layout">
                            <a
                                // href="listings-single-page.html"
                                className="listing-item">
                                {/* Image */}
                                <div className="listing-item-image">
                                    <img src="images/listing-item-01.jpg" alt />
                                    <span className="tag">אוכל  &amp; שתיה</span>
                                </div>
                                {/* Content */}
                                <div className="listing-item-content">
                                    <div className="listing-badge now-open">עכשיו פתוח</div>
                                    <div className="listing-item-inner">
                                        <h3>מסעדת טום <i className="verified-icon" /></h3>
                                        <span>דיזנגוף 8, תל אביב</span>
                                        <div className="star-rating" data-rating="3.5">
                                            <div className="rating-counter">(12 תגובות)</div>
                                        </div>
                                    </div>
                                    <span className="like-icon" />
                                </div>
                            </a>
                        </div>
                    </div>
        </>
    )
}
export default withRouter(ItemResultSearchFirst)
