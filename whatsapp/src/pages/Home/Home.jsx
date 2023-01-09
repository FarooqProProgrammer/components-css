import React from 'react'
import "./Home.css"
import Sidebar from '../../components/Sidebar/Sidebar'
function Home() {
  return (
    <div className='home'>
        <div className="home-container">
          <Sidebar/>
        </div>
    </div>
  )
}

export default Home