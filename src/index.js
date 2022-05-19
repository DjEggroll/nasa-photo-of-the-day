import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ThemeProvider} from 'styled-components';

const theme = {
    primaryColor: "skyblue",
    secondaryColor: "maroon",
    black: "black",
    white: "white",
    breakpointMobile: "(max-width: 550px)"
}

ReactDOM.render(
    <ThemeProvider theme={theme}>  
        <App />
    </ThemeProvider>
    , document.getElementById("root")
);
