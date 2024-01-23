import React, { useState } from 'react'
import "./auth.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { login } from '../store/AuthSlice/authSlice';
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';
const Auth = () => {

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const navigate = useNavigate()


    const [inp, setInp] = useState({
        password: ""
    });

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post(`${SERVER_URl}/admin/login`, inp);

            if (data?.success) {
                toast.success(data.message)
                localStorage.setItem("adminAuth", JSON.stringify(data))
                dispatch(login(data));
                navigate("/admin/")
            }

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message);
        }
    }


    const [admin, setAdmin] = useState({})
  
    useEffect(() => {
        setAdmin(user);
    }, [user])



    return (
        <>
            <div className='login row d-flex align-items-center justify-content-center '
                style={{ minHeight: "100vh" }}>
                <div className="col-sm-6 col-10 col-md-5 col-xl-4 mx-auto rounded border p-3">
                    <div className="profile-pic">
                        <img src={`${SERVER_URl}/${admin?.profile}`} alt="" />
                    </div>
                    <h4 className='text-center'>Welcome Back, {admin?.name}</h4>

                    <p className='text-light mb-0 mt-4'>Please verify its you!</p>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input type='password' value={inp.password} onChange={(e) => setInp({ password: e.target.value })} className='form-control' placeholder='Enter your Password' />
                        </div>
                        <div className="d-grid">
                            <button className='btn btn-success d-block'>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Auth