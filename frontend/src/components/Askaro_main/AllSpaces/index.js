import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AskaroNevbar from '../AskaroNevbar'
import './index.css'
import avtar from './avtar.png';

function Index() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('/api/user/allUsers').then((res) => {
            setUsers(res.data)
        })
    }, [])

    return (<>
        <AskaroNevbar />
        <div className = 'top-box'>
            <div className = 'top-box-container'>
            <h3>Welcome to Askaro</h3>
            <p>Follow Askarons to explore your interestes on Askaro</p>
            </div>
            <div className = 'main-content'>
                <h2>Discover All Askarons</h2>
                <p>Check out all these Askarons</p>
                <div className = 'userCards'>
                    {
                        users.map((_user) => (<>
                        <div className = 'userCard'>
                        <div className = 'userCards-content'>
                        <div className ='user-cover-img'>
                            <img src ={avtar} alt ='converImage' />
                        </div>
                        <div className = 'user-profile-img'>
                            <img src={avtar} alt ='profileImage' />
                        </div>
                        <h3>{_user.name? _user.name : String(_user.email).split('@')[0]  }</h3>
                        <p>{_user.email}</p>
                    </div>
                    </div>
                        </>))
                    }    
                </div>
            </div>
        </div>
    </>)
}

export default Index
