import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
// import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import PortfolioSimple from './PortfolioSimple'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Resume />
            <div id='portfolio'>
                <Portfolio />
                <PortfolioSimple />
            </div>
            {/* <Services /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default Home
