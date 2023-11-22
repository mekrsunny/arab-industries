import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import LeftSideBar from './leftSideBar/LeftSideBar'
import Home from './home/Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <LeftSideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  )
}

export default App