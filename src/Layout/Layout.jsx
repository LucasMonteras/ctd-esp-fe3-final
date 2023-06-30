import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Home from '../Routes/Home'
import { Outlet } from 'react-router-dom'
import { useThemeStates } from '../Components/utils/global.context'

const Layout = () => {
    const { theme } = useThemeStates();
    return (
        <div style={{ background: theme.background, color: theme.font }}>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default Layout