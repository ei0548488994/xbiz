import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {EmailShareButton} from "react-share";
export default function Footer() {
    return (
        <>
            <div id="footer" className="sticky-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-6">
                            <img className="footer-logo" src="Your-Logo-here.png" alt />
                            <br /><br />
                            <p>אני יברר מה אני צריכה לכתוב אודותינו אחרי  שאני ידע את הפונקציונליות שלאנחנו צריכות לבנות וזה אודותינו</p>
                        </div>
                        <div className="col-md-4 col-sm-6 ">
                            <h4>לינקים שימושיים</h4>
                            <ul className="footer-links">
                                
                                <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg><a href="#">הרשמה</a></li>
                                <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg><a href="#">כניסה</a></li>
                                <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg><a href="#">החשבון שלי</a></li>
                                <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg><a href="#">הכנס עסק</a></li>
                                <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg><a href="#">מחירים</a></li>
                                {/* <li><a href="#">Privacy Policy</a></li> */}
                            </ul>
                            <ul className="footer-links">
                                <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg><a href="#">איך זה עובד</a></li>
                                <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg><a href="#">צור קשר</a></li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                        <div className="col-md-3  col-sm-12">
                            <h4>יצירת קשר</h4>
                            <div className="text-widget">
                                <span>בר כוכבא 4 קומה 6</span> <br />
                                טלפון: <span>(123) 123-456 </span><br />
                                אמייל:<span>
                                <EmailShareButton subject="פניה לפלייסס"
                                                  body="מה אתה רוצה לומר לנו?:)"
                                                  url="office@example.com">
                                     <a href="#">office@example.com</a>
                                </EmailShareButton>
                                     </span><br />
                            </div>
                            <ul className="social-icons margin-top-20">
                                <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                                <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                                <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
                                <li><a className="vimeo" href="#"><i className="icon-vimeo" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyrights">© 2020 Places. כל הזכויות שמורות.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
