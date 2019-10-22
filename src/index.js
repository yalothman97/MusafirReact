import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

// Design
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// Components
import App from "./App";

import store from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
