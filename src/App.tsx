import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { SignupBuilder } from "./pages/SignupBuilder/SignupBuilder";

const App = () => (
  <div className='h-screen'>
    <SignupBuilder />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
