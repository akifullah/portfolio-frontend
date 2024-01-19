import React, { useEffect, useState } from 'react'

import "./About.css"
import profileImg from "../assets/img/profile-pic.jpg"
import cvs from "../assets/img/CV.pdf"
import Profile from './Profile'
import Skill from './Skill'
import Button from './Button'
import { toast } from 'react-toastify'
import axios from 'axios'
import SERVER_URl from '../utils/apiURl'


const About = () => {
    const [admin,setAdmin] = useState();
    const [cv,setCv] = useState();
    const [skills, setSkills] = useState([]);
    const getSkills = async () => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/all-skill`);
            if (data.success) {
                setSkills(data.skills);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    const getUser = async () => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/admin/admin`);
            if (data.success) {
                setAdmin(data.admin);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    const getCv = async ()=>{
        try {
            const {data} = await axios.get(`${SERVER_URl}/get-cv`);
            if(data.success){
                setCv(data.cv.name);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    
    useEffect(() => {
        getSkills();
        getCv();
        getUser();
    }, [])
    return (
        <>
            <section id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-10 col-md-12 mx-auto'>
                            <div data-aos="zoom-in">
                                <h6 className='sm-heading'>About</h6>
                                <h2 className='lg-heading'>Let me introduce myself.</h2>
                            </div>

                            <div className='row  profile-detail' data-aos="fade-up">
                                <div className='col-md-3'  data-aos="fade-right">
                                    <img src={`${SERVER_URl}/${admin?.profile}`} alt='' width="100%" />
                                </div>

                                <div className='col-md-9  ' data-aos="fade-left">
                                    <p className=' text-justify '>{admin?.about}</p>
                                    {/* <p className=' text-justify '> I'm a Frontend Developer with expertise in HTML, CSS, Bootstrap, and JavaScript. I love to build beautiful websites that are optimized for both desktop and mobile devices. I'm passionate about creating user-friendly interfaces that make it easy for people to navigate websites and find the information they need quickly and easily. Additionally, I enjoy learning new technologies and staying up-to-date on the latest trends in web development.</p> */}
                                </div>

                            </div>


                            <div className='row' data-aos="zoom-out">
                                <div className='col-sm-6'>
                                    <Profile user={admin} />
                                </div>
                                <div className='col-sm-6 '>
                                    <Skill skill={skills} />
                                </div>
                            </div>

                            <div className='about-btns d-flex justify-content-center flex-wrap ' >
                                <Button cls="btn--outline" text="Contact Me" link="#contact" />
                                <Button cls="btn-dark" text="Download CV" link={`${SERVER_URl}/${cv}`} new={true} />
                                {/* <a href={} download={`${SERVER_URl}/${cv}`} target='_blank' >
                                    <Button cls="btn-dark" text="Download CV" url="cv" />

                                </a> */}

                            </div>


                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default About
