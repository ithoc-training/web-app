import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-gpha7v2j2cxhneb2.us.auth0.com"
            clientId="tOJiOnVnMAk1TwQVFfcGMZzWdzATso6E"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <LoginButton />
            <LogoutButton />
            <br />
            <Profile />
        </Auth0Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
