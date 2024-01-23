import React, { useEffect, useState } from 'react'
import "./profile.css"
import { Link } from 'react-router-dom'
import SERVER_URl from '../utils/apiURl'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux';
const Profile = () => {
    const user = useSelector(state => state.user.user);
    
    const [admin, setAdmin] = useState({})

    useEffect(() => {
        setAdmin(user)

    }, [admin, user])
    return (
        <>

            <div className="container-fluid px-4 my-5">
                <div className="row px-2">
                    <div className="col-lg-10 col-xl-8 mx-auto border rounded px-4 ">
                        <div className="profile d-flex align-items-center border-bottom mb-3 py-4 position-relative">
                            <div className="pro-img me-5">
                                <img src={`${SERVER_URl}/${admin?.profile}`} width={"150px"} alt="" />
                            </div>

                            <div>
                                <h3 className='my-0 name'>{admin?.name}</h3>
                                <p className='my-0'>{admin?.headLine}</p>
                            </div>

                            <Link to="/admin/edit" className='btn btn-primary btn-sm position-absolute top-0 end-5 '>Edit</Link>
                            <Link to="/admin/change-pass" className='btn btn-danger btn-sm position-absolute top-0 end-0 '>Change Password</Link>

                        </div>

                        <div className="row pb-4">
                            <div className="col-lg-6">
                                <p><b>Name:</b> {admin?.name}</p>
                            </div>
                            <div className="col-lg-6">
                                <p><b>Email:</b> {admin?.email}</p>
                            </div>
                            <div className="col-lg-6">
                                <p><b>DOB:</b> {admin?.dob}</p>
                            </div>

                            <div className="col-lg-6">
                                <p><b>Phone:</b> {admin?.phone}</p>
                            </div>
                            <div className="col-lg-12">
                                <p><b>Address:</b> {admin?.address}</p>
                            </div>
                            <div className="col-lg-12">
                                <p><b>Facebook:</b> <Link to={admin?.fb} target='_blank'>{admin?.fb}</Link> </p>
                            </div>
                            <div className="col-lg-12">
                                <p><b>LinkedIn:</b> <Link to={admin?.in} target='_blank'>{admin?.in}</Link>  </p>
                            </div>
                            <div className="col-lg-12">
                                <p><b>Github:</b> <Link to={admin?.git} target='_blank'>{admin?.git}</Link>  </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile