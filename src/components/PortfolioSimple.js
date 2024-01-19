import React, { useEffect, useState } from 'react'

import "./Portfolio.css"

import { portfolioSimpleProject } from './PortfolioSimpleProjects';
import axios from 'axios';
import SERVER_URl from '../utils/apiURl';
import { toast } from 'react-toastify';


const PortfolioSimple = () => {
    const [project, setProject] = useState([]);

    const getProjects = async () => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/all-sm-project`);
            setProject(data.projects);
        } catch (error) {
            console.log(error)
            toast.error(error.respsonse.data.message);
        }
    }
    useEffect(() => {
        getProjects()
    }, [])


    return (
        <>
            <section className='portfolio simplePort'>
                <div className='container'>
                    <div className="row ">
                        <div className="col-lg-10 mx-auto">

                            <div className='row gx-3 '>

                                {
                                    portfolioSimpleProject.map((e, i) => {
                                        return (
                                            <div className='col-xl-4 col-sm-6' key={i} data-aos={e.aos} >
                                                <div className='potfolio-card simple bg-light'>
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
                                    project.map((e, i) => {
                                        return (
                                            <div className='col-xl-4 col-sm-6' key={i} data-aos={e.aos} >
                                                <div className='potfolio-card simple bg-light'>
                                                    <img src={`${SERVER_URl}/${e.image}`} width="100%" />

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




                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioSimple
