import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import CommentsProvider from "./contexts/commentsContext/CommentsProvired.jsx";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CommentsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CommentsProvider>
    </Provider>
  </React.StrictMode>
);
