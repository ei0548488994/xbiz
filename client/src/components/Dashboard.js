import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert, Popover, OverlayTrigger } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Parser from 'html-react-parser';
import logo from '../img/newlogo.png'; 
/*import {useDispatch} from 'react-redux';*/
import '../css/dashboard.css'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [currentId, setCurrentId] = useState(null);
  /*const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLinks());
  }, [currentId, dispatch]);*/
  async function handleLogout() {
    setError("");
    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{currentUser.email}</Popover.Title>
      <Popover.Content>
      עדכן את הפרופיל שלך 
         &nbsp;
      <Link to="/update-profile">
      כאן  
      </Link>
      </Popover.Content>
    </Popover>
  );

  const icons = {
    logoutIcon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
    </svg>`,
    userIcon: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
    </svg>`
  };
  console.log(currentUser);

  return (
    <>
      <section className="css-main">
            <nav>
                <img src={logo} alt="" style={{ maxWidth: "50px", maxHeight: "50px" }} />
                <h5>Places</h5>
                <div>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <button /*onClick={}*/
                        className="css-btn">{Parser(icons.userIcon)}</button>
                </OverlayTrigger>        
                  <button onClick={handleLogout}
                          className="css-btn">{Parser(icons.logoutIcon)}</button>       
                </div>
            </nav>
            &nbsp;
            <Container>
          {error && <Alert variant="danger">{error}</Alert>}
            </Container>
            &nbsp;
            <Container>
                כאן הדשבורד של המשתמש
            </Container> 
        </section>
    </>
  )
}