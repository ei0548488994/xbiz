// import BusinessDetails from './BusinessDetails.js/index.js.js';
//import LogIn from './LogIn'
import { Button } from 'react-bootstrap';
import ContactPage from "./ContactPage"
import BusinessDetails from './BusinessDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import HomePage from './home_page/HomePage';
import { getCategory } from '../actions/Home'
import Header from './header/Header'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ResultSearch from './ResultSearch';
import Register from './Register.js';
import ResultOfSearchList from './ResultOfSearchList'
import { searchByCategory } from '../actions/Busieness';
import Contact from './Contact'
import Add_buisness from "./add_business/add_business";
import ResultOfSearchListFirst from "./ResultSearckListFirst"
import GoogleMap from './GoogleMap';
/*********** */
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import AudioSearch from "./AudioSearch";


function App(props) {
  // const [allCategories, setAllCategories] = useState()
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(getCategory())
  //   /////////////////
  // }, [dispatch]);

  return (
    <>

      <Router>
      <AuthProvider>
        <Header></Header>
        {/* <GoogleMap/> */}
        <Switch>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route  path="/business/:id">
            <BusinessDetails />
          </Route>
          <Route path="/ResultOfSearchList">
            {/* <ResultOfSearchListFirst /> */}
            <ResultOfSearchList />
          </Route>
    
          {/* <Route path="/BusinessDetails" component={BusinessDetails}>
            <BusinessDetails />
          </Route> */}
          {/* /:id */}

          <Route path="/Contact">
            <ContactPage />
          </Route>
          {/* <Route path="/">
            <HomePage />
          </Route> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
         <PrivateRoute path="/update-profile" component={UpdateProfile} />
         <Route path="/signup" component={Signup} />
         <Route path="/login" component={Login} />
         <Route path="/forgot-password" component={ForgotPassword} />
         <Route path="/" component={HomePage} />
         <Route path="/try" component={AudioSearch} />
        </Switch>
        </AuthProvider>
      </Router>
      {/* <Add_buisness/> */}
      {/*<ContactPage/> */}
    </>
  );
}

export default App;
