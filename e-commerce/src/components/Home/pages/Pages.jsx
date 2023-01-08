import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from '../../common/Header'
import Footer from '../../common/Footer/Footer'
import Home from '../Home'

function Pages() {
  return (
    <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
    </>
  )
}

export default Pages