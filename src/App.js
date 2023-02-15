import React from 'react'
import LeftSidebar from './components/sidebar/LeftSidebar'
import Main from './Pages/Main'
import RightSidebar from './components/sidebar/RightSidebar'

const App = () => {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <Main />
    </div>
  )
}

export default App