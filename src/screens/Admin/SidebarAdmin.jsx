import React, { useState } from 'react';
import { BsJournalMedical, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import jsPDF from 'jspdf';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [adminReportData, setAdminReportData] = useState(null);

  const fetchDataFromDatabase = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data'); // Adjust the endpoint according to your backend setup
      const data = await response.json();
      setAdminReportData(data);
      console.log(data);
      if(adminReportData!=null)
      handleDownloadReport();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDownloadReport = () => {
    const doc = new jsPDF();

    // Add header
    doc.setFontSize(20);
    doc.text("Safental.Com", 105, 20, null, null, 'center');
    doc.setFontSize(14);
    doc.text("Dumki, Patuakhali", 105, 30, null, null, 'center');
    doc.setFontSize(16);
    doc.text("Admin Report", 105, 50, null, null, 'center');

    // Add data from database
    if (adminReportData) {
      const columnWidth = 80;
      let startX = 20;
      let startY = 70;
      doc.setFontSize(12);

      adminReportData.forEach((report, index) => {
        if (index % 2 === 0 && index !== 0) {
          startX += columnWidth + 10;
          startY = 70;
        }

        const { reportID, totalTraffic, totalRevenue, totalDoctor, totalCourse, totalPatient, totalEmployee, error, lastMonthRevenue, websiteSEOScore, currentPagesInTopOfGoogle } = report;
        doc.text(`Report ${reportID}:`, startX, startY);
        doc.text(`Total Traffic: ${totalTraffic}`, startX, startY + 10);
        doc.text(`Total Revenue: ${totalRevenue}`, startX, startY + 20);
        doc.text(`Total Doctor: ${totalDoctor}`, startX, startY + 30);
        doc.text(`Total Course: ${totalCourse}`, startX, startY + 40);
        doc.text(`Total Patient: ${totalPatient}`, startX, startY + 50);
        doc.text(`Total Employee: ${totalEmployee}`, startX, startY + 60);
        doc.text(`Error: ${error}`, startX, startY + 70);
        doc.text(`Last Month Revenue: ${lastMonthRevenue}`, startX, startY + 80);
        doc.text(`Website SEO Score: ${websiteSEOScore}`, startX, startY + 90);
        doc.text(`Current Pages in Top of Google: ${currentPagesInTopOfGoogle}`, startX, startY + 100);
        startY += 120; // Adjust spacing between reports
      });
    }
    else{
        console.log("no data")
    }

    // Save the PDF
    doc.save('admin_report.pdf');
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""} style={{
      backgroundColor: '#37474f',
      color: '#bdbdbd'
    }}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsJournalMedical className='icon_header' /> Admin
            </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
                </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillArchiveFill className='icon' /> Manage Doctor
                </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon' /> Overall Revenue
                </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Visitors
                </a>
        </li>
        <li className='sidebar-list-item'>
          <button onClick={fetchDataFromDatabase}>
            <BsMenuButtonWideFill onClick={fetchDataFromDatabase} className='icon' />Download Report
                </button>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
