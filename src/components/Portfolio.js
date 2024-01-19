import React, { useEffect, useState } from 'react'


import "./Portfolio.css"

import { portfolioHProject } from './PortfolioProjects';
import axios from 'axios';
import SERVER_URl from '../utils/apiURl';


const Portfolio = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`${SERVER_URl}/all-project`)
        setData(data)

    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <section className='portfolio'>
                <div className='container'>
                    <div className="row ">
                        <div className="col-lg-10 mx-auto">
                            <div className='sec-heading text-center' data-aos="zoom-in">
                                <h5>PORTFOLIO</h5>
                                <h2>Check Out Some of My Works.</h2>
                            </div>


                            <div className='row gx-5 '>

                                {
                                    portfolioHProject.map((e, i) => {
                                        return (


                                            <div className='col-xl-4 col-sm-6' key={i} data-aos={e.aos} >
                                                <div className='potfolio-card bg-light'>
                                                    <img src={e.image} width="100%" />

                                                    <div className='f-overlay'>
                                                        <h3>{e.name}</h3>
                                                        <p>{e.use}</p>
                                                        <div className='f-btns'>
                                                            <a href={e.github} target='_blank'>
                                                                <i className="fa-brands fa-github" ></i>Github
                                                            </a>
                                                            <a href={e.live} target='_blank'>
                                                                <i className="fa-regular fa-eye"></i> View
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    data.map((e, i) => {
                                        return (


                                            <div className='col-xl-4 col-sm-6' key={i} data-aos={e.aos} >
                                                <div className='potfolio-card bg-light'>
                                                    <img src={`${SERVER_URl}/${e.image}`} width="100%" />

                                                    <div className='f-overlay'>
                                                        <h3>{e.name}</h3>
                                                        <p>{e.desc}</p>
                                                        <div className='f-btns'>
                                                            <a href={e.github} target='_blank'>
                                                                <i className="fa-brands fa-github" ></i>Github
                                                            </a>
                                                            <a href={e.live} target='_blank'>
                                                                <i className="fa-regular fa-eye"></i> View
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }




                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
