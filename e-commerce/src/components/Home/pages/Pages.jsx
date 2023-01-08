import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from '../../common/Header'
import Footer from '../../common/Footer/Footer'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Project from '../Project'
import Services from '../Services'

function Pages() {
  return (
    <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Project' element={<Project/>}/>
                    <Route path='/Services' element={<Services/>}/>
                     
                </Routes>
                <Footer/>
            </BrowserRouter>
    </>
  )
}

export default Pages