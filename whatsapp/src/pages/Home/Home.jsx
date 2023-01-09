import React from 'react'
import "./Home.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import whatsappBg from "../../assets/whatsappbg.png"
function Home() {
  return (
    <div className='home'>
        <div className="home-container">
          <Sidebar/>
          <div className="home-bg">
            <img src={whatsappBg} alt="" srcset="" />
          </div>
        </div>
    </div>
  )
}

export default Home