import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Home from '../Routes/Home'

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default Layout