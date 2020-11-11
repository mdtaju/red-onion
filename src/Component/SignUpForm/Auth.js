import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseConfig from '../../FirebaseConfig';
import { Route, Redirect } from 'react-router-dom';

firebase.initializeApp(FirebaseConfig)

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = AuthChange();
    return (
        <Route
          {...rest}
          render={({ location }) =>
            auth !== null ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signup",
                  state: { from: location }
                }}
              />
            )
          }
        />
    );
}

export const AuthChange = () => {
  const [UserInfo, setUserInfo] = useState();
  useEffect(() => {
       firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              const information = {name: user.displayName}
              setUserInfo(information);
          } else {
                setUserInfo(null);
          }
          
      });
  }, [])
  return UserInfo;
}

const Auth = () => {
    const CreatNewAccount = (NewUser, SetUser) => {
        firebase.auth().createUserWithEmailAndPassword(NewUser.email, NewUser.password)
        .then(res => {
            firebase.auth().currentUser.updateProfile({
                displayName: NewUser.name
            }).then(() => {
                window.location.pathname = '/placeorder'
            })
        })
        .catch(err => {
            const GetUser = {
                ...NewUser
            }
            GetUser.error = err.message
            SetUser(GetUser)
        })
    }

    const SignInUserAuth = (User, SetErr) => {
        firebase.auth().signInWithEmailAndPassword(User.email, User.password)
        .then(res => {
            window.location.pathname = '/placeorder';
        })
        .catch(err => {
            const GetUser = {
                ...User
            }
            GetUser.error = err.message
            console.log(GetUser)
            SetErr(GetUser)
        });
    }

    const SignOutUser = () => {
        firebase.auth().signOut()
        .then(function() {
            window.location.pathname = '/'
        })
        .catch(function(error) {
        });
    }

    return {
        CreatNewAccount,
        SignInUserAuth,
        SignOutUser
    }
}

export default Auth;