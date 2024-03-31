import React from "react";
import Feed from "./Feed.js";
import AskaroNevbar from "./AskaroNevbar.js";
import "../css/Askaro.css";
import Sidebar from "./Sidebar.js";
import Widget from "./Widget.js";

function Askaro() {
  return (
    <div className="askaro">
      <AskaroNevbar />
      <div className="askaro-contents">
        <div className="askaro-content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Askaro;
