import React from 'react'
import "./ResumeDetail.css"
const ResumeDetail = (props) => {
    const { heading, data, jobIcon } = props;
    return (
        <>
            <div className='resume-detail py-5'>
                <h3>{heading}</h3>

                <div className='resume-detail-wrap'>
                    {
                        data.map((e) => (
                            <div className='row  r-d ' key={e._id}>

                                <div className='col-lg-4 col-md-4 text-md-right ' data-aos="fade-down-right">
                                    <div className='p-heading'>
                                        <h4>{e.name}</h4>
                                        <p>{e.date}</p>

                                        <div className='graduation-icon'>
                                            {
                                                jobIcon ? <i className="fa-solid fa-briefcase"></i>
                                                    :
                                                    <i className="fa-solid fa-graduation-cap"></i>
                                            }

                                        </div>

                                    </div>
                                </div>

                                <div className='col-lg-7 col-md-7 offset-md-1  ' data-aos="fade-down-left">
                                    <div className='p-detail'>
                                        <h5>{e.org}</h5>
                                        <p>{e.desc}</p>
                                    </div>
                                </div>




                            </div>
                        ))
                    }


                </div>



            </div >
        </>
    )
}

export default ResumeDetail
