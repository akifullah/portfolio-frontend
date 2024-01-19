import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import AddProject from './AddProject'
import "./dashboard.css"
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import Profile from './Profile'

const Dashboard = () => {

    return (
        <>
            <section className='dashboard'>
                {/* <AddProject /> */}
                <main className='dash-main'>
                    <Sidebar />

                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default Dashboard
