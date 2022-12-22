import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom'
import { router } from './router';
import { CartContextProvider } from './contexts/cartContext';
import { initializeApp } from "firebase/app";






const firebaseConfig = {
    apiKey: "AIzaSyDy0lKOoUd_tiMh35gDYalunFt-TfN187E",
    authDomain: "cackles-c493d.firebaseapp.com",
    projectId: "cackles-c493d",
    storageBucket: "cackles-c493d.appspot.com",
    messagingSenderId: "1026754702476",
    appId: "1:1026754702476:web:923408233a2b5e75311fa9"
    };

const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
