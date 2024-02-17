import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'May',
          Patient_Frequency: 4000,
          Complete: 2400,
          Appointment_Frequency: 2400,
        },
        {
          name: 'June',
          Patient_Frequency: 3000,
          Complete: 1398,
          Appointment_Frequency: 2210,
        },
        {
          name: 'July',
          Patient_Frequency: 2000,
          Complete: 1800,
          Appointment_Frequency: 2290,
        },
        {
          name: 'August',
          Patient_Frequency: 2780,
          Complete: 908,
          Appointment_Frequency: 2000,
        },
        {
          name: 'Sept.',
          Patient_Frequency: 1890,
          Complete: 800,
          Appointment_Frequency: 2181,
        },
        {
          name: 'Oct.',
          Patient_Frequency: 2390,
          Complete: 300,
          Appointment_Frequency: 2500,
        },
        {
          name: 'Nov.',
          Patient_Frequency: 3490,
          Complete: 300,
          Appointment_Frequency: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='Doctorcard'>
                <div className='Doctorcard-inner'>
                    <h3>Total Doctor</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>25</h1>
            </div>
            <div className='Doctorcard'>
                <div className='Doctorcard-inner'>
                    <h3>Total Revenue</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>$12450</h1>
            </div>
            <div className='Doctorcard'>
                <div className='Doctorcard-inner'>
                    <h3>Total Visitor</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>758965</h1>
            </div>
            <div className='Doctorcard'>
                <div className='Doctorcard-inner'>
                    <h3>System Feedback</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>52</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Appointment_Frequency" fill="#8884d8" />
                <Bar dataKey="Complete" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Patient_Frequency" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Complete" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home