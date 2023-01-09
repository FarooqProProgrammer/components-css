import React from 'react'
import "./index.css"
import user from "../../assets/user.png"
function UserProfile({name}) {
  return (
    <div className='user-profile'>
        <div className="userImage">
            <img className='w-[50px] h-[50px]' src={user} alt="" srcset="" />
        </div>
        <div className="user-info">
            <div className="user-name">
                {name}
            </div>
        </div>
    </div>
  )
}

export default UserProfile