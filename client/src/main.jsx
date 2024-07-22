import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";


import App from "./App.jsx";
import "./index.css";
import UserProvider from "./contexts/UserProvider.jsx";
import CommentsProvider from "./contexts/CommentsProvired.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CommentsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CommentsProvider>
    </UserProvider>
  </React.StrictMode>
);
