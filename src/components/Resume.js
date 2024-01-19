import React, { useEffect, useState } from 'react'
import ResumeDetail from './ResumeDetail'
import "./Resume.css"
import { toast } from 'react-toastify'
import axios from 'axios'
import SERVER_URl from '../utils/apiURl'
const Resume = () => {

    const [edu, setEdu] = useState([]);
    const [exp, setExp] = useState([]);
    const getEdu = async (req, res) => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/get-edu`);
            if (data.success) {
                setEdu(data.edu);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);
        }
    }

    const getExp = async (req, res) => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/get-exp`);
            if (data.success) {
                setExp(data.exp);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);
        }
    }
    useEffect(() => {
        getEdu();
        getExp()
    }, [])

    return (
        <>
            <section id='resume'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-10 col-md-12  mx-auto'>
                            <div className='sec-heading' data-aos="zoom-in">
                                <h5>Resume</h5>
                                <h2>More of my credentials.</h2>
                            </div>



                            <ResumeDetail jobIcon heading={"Experience"} data={exp} />
                            <ResumeDetail heading={"Education"} data={edu} />


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume
