import React from 'react'
import "./Sidebar.css"
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import UserProfile from '../userProfile';
const Sidebar = () => {
  return (
    <div className='sidebar'>
            <div className="sidebar-header">
                <div className="sidebar-header">
                   <AccountCircleIcon/>
                </div>
                <div className="sidebar-header-btn">
                    <TollIcon/>
                    <InsertCommentIcon/>
                    <MoreVertIcon/>
                </div>
               
            </div>
            <div className="sidebar-search">
                    <div className="sidebar-search-input">
                        <SearchIcon/>
                        <input type={"text"}  placeholder="Search..."/>
                    </div>
            </div>
            <div className="sidebar-chat">
                <UserProfile name="Farooq"/>
                <UserProfile name="Khalid"/>
                <UserProfile name="Ahmed"/>
                <UserProfile name="Usman"/>
                
            </div>
    </div>
  )
}

export default Sidebar