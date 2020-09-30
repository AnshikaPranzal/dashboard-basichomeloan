import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Amplify, { Auth } from "aws-amplify";

Amplify.configure({
  Auth: {
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "ap-south-1_6EtO8d7MZ",

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "1sodlmlb896bpcltrbjelssnq3",

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: "CUSTOM_AUTH",
  },
});

// You can get the current config object
// const currentConfig = Auth.configure();

ReactDOM.render(
    <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
