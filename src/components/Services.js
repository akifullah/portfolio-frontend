import React from 'react'
import "./Services.css"
const Services = () => {
    return (
        <>
            <section id='services'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto'>
                            <div className='sec-heading' data-aos="zoom-in">
                                <h5>SERVICES</h5>
                                <h2>What Can I Do For You?</h2>
                            </div>

                            <div className='row text-center service-wrap'>

                                <div className='col-md-4' data-aos="fade-right">
                                    <div className='service-card'>
                                        <i className="fa-brands fa-figma"></i>
                                        <h3>FIGMA to HTML</h3>

                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam soluta doloribus repudiandae saepe laudantium incidunt voluptates ab sint harum!</p>
                                    </div>
                                </div>

                                <div className='col-md-4' data-aos="fade-down">
                                    <div className='service-card'>
                                        <i className="fa-brands fa-react"></i>
                                        <h3>Frontend Development</h3>

                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam soluta doloribus repudiandae saepe laudantium incidunt voluptates ab sint harum!</p>
                                    </div>
                                </div>

                                <div className='col-md-4' data-aos="fade-left">
                                    <div className='service-card'>
                                        <i className="fa-brands fa-node-js"></i>
                                        <h3>Backend Development</h3>

                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam soluta doloribus repudiandae saepe laudantium incidunt voluptates ab sint harum!</p>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
