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
import Header from './header/Header'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ResultOfSearchList from './ResultOfSearchList'
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./register/LogIn";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import AudioSearch from "./AudioSearch";

function App() {
  return (
    <>
       <Router>
      <Router>
      <AuthProvider>
        <Header></Header>
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
       
      </Router>
      {/* <Add_buisness/> */}
      {/*<ContactPage/> */}
      {/* <WishList/> */}
    </>
  );
}

export default App;
