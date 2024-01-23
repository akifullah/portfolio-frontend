import React, { useEffect, useState } from 'react'
import ResumeDetail from './ResumeDetail'
import "./Resume.css"
import { useSelector } from 'react-redux'
const Resume = () => {
    const education = useSelector(state=> state.edu.edu);
    const experience = useSelector(state=> state.exp.exp);

    const [edu, setEdu] = useState([]);
    const [exp, setExp] = useState([]);
    
    
    useEffect(() => {
       setEdu(education);
        setExp(experience)
    }, [education, experience])

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
