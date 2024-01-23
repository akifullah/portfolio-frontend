import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';
import { useDispatch } from 'react-redux';
import { setExp } from '../store/ExpSlice/ExpSlice';

const EditExperience = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();
    const token = JSON.parse(localStorage.getItem("adminAuth")).token;
    const [inpVal, setInpVal] = useState({
        name: "",
        org: "",
        date: "",
        desc: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInpVal({
            ...inpVal,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.put(`${SERVER_URl}/update-exp/${id}`, inpVal, {
                headers: {
                    Authorization: token
                }
            })
            navigate("/admin/experience")
            if (data.success) {
                toast.success(data.message)
                dispatch(setExp(data.exp));
                navigate("/admin/experience")
                setInpVal({
                    name: "",
                    org: "",
                    date: "",
                    desc: ""
                })

            }

        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }




    const getSingle = async () => {
        try {

            const { data } = await axios.get(`${SERVER_URl}/get-single-exp/${id}`)
            if (data.success) {
                setInpVal({
                    name: data.exp.name,
                    org: data.exp.org,
                    date: data.exp.date,
                    desc: data.exp.desc
                })
            }
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

    useEffect(() => {

        getSingle()
    }, [])


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 border rounded p-3 mx-auto">
                        <h2>Edit Experience</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input type="text" onChange={handleChange} name='name' value={inpVal.name} placeholder='Job Name...' className='form-control' />
                            </div>

                            <div className="form-group mb-3">
                                <input type="text" onChange={handleChange} name='org' value={inpVal.org} placeholder='Software House Name...' className='form-control' />
                            </div>

                            <div className="form-group mb-3">
                                <input type="text" onChange={handleChange} name='date' value={inpVal.date} placeholder='Start-End Date (Oct 2020 - Sep 2021)' className='form-control' />
                            </div>

                            <div className="form-group">
                                <textarea name="desc" onChange={handleChange} className='form-control' rows="5" value={inpVal.desc} placeholder='Description'></textarea>
                            </div>

                            <button className='btn btn-success d-block w-100 mt-3'>Update Experience</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditExperience