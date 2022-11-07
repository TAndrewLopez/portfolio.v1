import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
// import { store } from "./store/store";
//COMPONENTS
import App from "./components/App";
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
root.render(
  <Router>
    <App />
  </Router>
);
