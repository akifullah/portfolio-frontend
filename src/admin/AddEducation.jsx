import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';
import { useDispatch } from 'react-redux';
import { setEdu } from '../store/EducationSlice/EducationSlice';

const AddEducation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
            const { data } = await axios.post(`${SERVER_URl}/add-edu`, inpVal, {
                headers: {
                    Authorization: token
                }
            })
            if (data.success) {
                toast.success(data.message)
                dispatch(setEdu(data.edu));
                navigate("/admin/education")
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


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 border rounded p-3 mx-auto">
                        <h2>Add Education</h2>
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

                            <button className='btn btn-success d-block w-100 mt-3'>Add Education</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEducation