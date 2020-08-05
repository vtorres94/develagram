import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import UserContextProvider from './layout/context/user-context';

firebase.initializeApp({
  apiKey: "AIzaSyB_2WDVugPP6lHmpL3IjRC84mSNx1LeIok",
  authDomain: "develagram.firebaseapp.com",
  databaseURL: "https://develagram.firebaseio.com",
  projectId: "develagram",
  storageBucket: "develagram.appspot.com",
  messagingSenderId: "739711550440",
  appId: "1:739711550440:web:d49bb331b94f69d9a79a5d",
  measurementId: "G-Q1G24VZC4R"
});

ReactDOM.render(
  <UserContextProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </UserContextProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
