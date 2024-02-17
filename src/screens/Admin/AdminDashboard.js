import { useState } from 'react';
import './AdminDashboard.css';
import Header from './Header';
import Sidebar from './SidebarAdmin';
import Home from './Home';
import Navbarr from '../../components/Home/Navbarr';

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <Navbarr></Navbarr>
      <div id="admin-body">
        <div className='admin-grid-container'>
          {/* <Header OpenSidebar={OpenSidebar}/> */}
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
          <Home />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
