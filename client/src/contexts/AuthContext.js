import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import axios from 'axios';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    //let that = this;
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("in auth state:)");
      if (user) {
        console.log("user is: ");
        console.log(user);
        user.getIdToken(true)
        .then(function (idToken) {
          console.log("idToken: "+ idToken);
          //call here...
          axios({
            method: "POST",
            url: "https://localhost:5002/users/check",
            data: {
              user: user,
              idToken: idToken
            }
          })
          /*axios.post('https://localhost:5002/users/check', {user, idToken})*/
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error)
          })
         })
        .catch((error) => {
            console.log(error)
          })
      }       
      setCurrentUser(user);
      setLoading(false);
      })
    return unsubscribe;
  }, []);
          /*axios.post('https://localhost:5002/users/check',{
          user: user,
          idToken: idToken
        }).then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error)
        })*/
  /*}).catch((error) => {
      console.log(error)
    })*/
         /* axios.post('https://localhost:5002/users/check', user)
                      /*null,
                      { params:{ 
                                  user,
                                  idToken
                                }
                     })
            .then(res => {
              console.log(res);
            })
            .catch(error => {
              console.log(error)
            })
        }).catch((error) => {
          console.log(error)
        })
      }*/
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}