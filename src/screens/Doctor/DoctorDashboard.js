import { useState } from 'react'
import './DoctorDashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';


function DoctorDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div id="body">
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    </div>
  )
}

export default DoctorDashboard