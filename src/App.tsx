import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { SignupBuilder } from "./pages/SignupBuilder/SignupBuilder";
import { BrowserRouter } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <div className="h-screen">
      <SignupBuilder />
      
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
