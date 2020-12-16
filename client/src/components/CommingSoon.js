import React from "react";
import '../css/style.css'
import '../css/main-color.css'

export default function CommingSoon() {
  return (
    <div id="wrapper">
      {/* Content
  ================================================== */}
      {/* Coming Soon Page */}
      <div
        className="coming-soon-page"
        style={{ backgroundImage: "url(images/main-search-background-01.jpg)" }}
      >
        <div className="container">
          {/* Search */}
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <img src="images/logo2.png" alt />
              <h3>We are launching Listeo soon!</h3>
              {/* Countdown */}
              <div id="countdown" className="margin-top-10 margin-bottom-35" />
              {/* Countdown / End */}
              <br />
              <div className="main-search-input gray-style margin-top-30 margin-bottom-10">
                <div className="main-search-input-item">
                  <input
                    type="text"
                    placeholder="Your email address"
                    defaultValue
                  />
                </div>
                <button className="button">Notify Me</button>
              </div>
            </div>
          </div>
          {/* Search Section / End */}
        </div>
      </div>
      {/* Coming Soon Page / End */}
    </div>
  );
  {
    /* Wrapper / End */
  }
  {
    /* Scripts
  ================================================== */
  }
  {
    /* Countdown Script */
  }
}
