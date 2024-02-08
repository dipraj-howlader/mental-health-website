import { useState } from 'react'
import './DoctorDashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Navbarr from '../../components/Home/Navbarr';


function DoctorDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
    <Navbarr></Navbarr>
    <div id="body">
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    </div>
    </>
  )
}

export default DoctorDashboard