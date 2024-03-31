import React from 'react'
import '../css/SidebarOption.css';
import { Add } from '@material-ui/icons';

function SidebarOptions() {
  return (
    <div className='SidebarOptions'>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2018/07/14/11/33/earth-3537401_1280.jpg"
            alt="" />
            <p>Technology</p>
        </div>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2016/08/21/22/35/san-galgano-1610962_1280.jpg"
            alt="" />
            <p>History</p>
        </div>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg"
            alt="" />
            <p> Business</p>
        </div>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2016/04/04/17/22/meal-1307604_1280.jpg"
            alt="" />
            <p>Cokking</p>
        </div>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2016/01/10/21/05/mic-1132528_1280.jpg"
            alt="" />
            <p>Music</p>
        </div>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg"
            alt="" />
            <p>Social Media</p>
        </div>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg"
            alt="" />
            <p>Healthcare</p>
        </div>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_1280.jpg"
            alt="" />
            <p>Education</p>
        </div>
        <div className="SidebarOption">
            <img src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg"
            alt="" />
            <p>News</p>
        </div>

        <div className="SidebarOption">
            <Add />
            <p className='text'>Create space</p>
        </div>
    </div>
  )
}

export default SidebarOptions
