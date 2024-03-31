import React from 'react'
import AskaroNevbar from '../AskaroNevbar'
import Sidebar from '../Sidebar'
import Widget from '../Widget'
import UserFeed from './UserFeed'

function Index() {
    return (
        <div className="askaro">
      <AskaroNevbar />
      <div className="askaro-contents">
        <div style = {{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }} className="askaro-content">
          {/* <div style = {{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 0",
            border: "1px solid lightgray",
            borderRadius: "5px",
            backgroundColor: "white"
          }} className = 'torch'> */}
            {/* <img style = {{
            objectFit: "contain"
          }} width = {200} alt = 'spaces' src = 'https://qsf.fs.askarocdn.net/-4-ans_frontend_assets.images.empty_states.dormant_darkmode.png-26-de0e3d9c488b2b12.png'  /> */}
          {/* <h2>Add 5 topics you know about</h2> */}
          {/* <p>Add topics for a customized feed with questions you can answer.</p> */}
          </div>
          {/* <Sidebar /> */}
          
          {/* <Widget /> */}
          <UserFeed />
        </div>
      </div>
    // </div>
    )
}

export default Index