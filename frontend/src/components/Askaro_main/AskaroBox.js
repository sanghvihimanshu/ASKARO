import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "../css/AskaroBox.css";

export default function AskaroBox() {
  // const user = useSelector(selectUser);

  return (
    <div className="askaro-box">
      <div className="askaro-box-info">
        <Avatar
          src={
            "http://tinygraphs.com/labs/isogrids/hexa16/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg"
          }
          className="askaro-box-infoAvatar"
        />
        {/* <h5>{user?.displayName ? user?.displayName : user?.email}</h5> */}
      </div>
      <div className="askaro-box-question"  >
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
