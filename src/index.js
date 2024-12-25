import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
// import App2 from './App2';
// import App3 from './App3.tsx';
// import App4 from "./App4.tsx";
// import App3_prac from "./App3_prac.tsx";
// import App5 from "./App5.tsx";
// import App6 from "./App6.tsx";
import App7 from "./App7.tsx";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <App3_prac /> */}
    {/* <App4 /> */}
    {/* <App6 /> */}
    <App7 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
