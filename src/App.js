import React from 'react'
import LeftSidebar from './components/sidebar/LeftSidebar'
import Main from './Pages/Main'
import RightSidebar from './components/sidebar/RightSidebar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "../src/styles/global.css"
const App = () => {
  return (

    <BrowserRouter>
      <>
        <LeftSidebar />
        <RightSidebar />

        <Routes>
            <Route path='/' element={<Main />}/>
        </Routes>

      </>
    </BrowserRouter>
   
  )
}

export default App