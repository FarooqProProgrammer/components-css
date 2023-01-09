import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Chat from './pages/Chat/Chat'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chatpage' element={<Chat/>}/>
      </Routes>
    </Router>
  )
}

export default App