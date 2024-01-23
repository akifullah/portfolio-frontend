import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';
import { useDispatch, useSelector } from 'react-redux';
import { setEdu } from '../store/EducationSlice/EducationSlice';

const Education = () => {
    const dispatch = useDispatch();
    const education = useSelector(state=> state.edu.edu);
   
    const token = JSON.parse(localStorage.getItem("adminAuth")).token;
    const [educat, setEducate] = useState([]);

  

    useEffect(() => {
        setEducate(education)
    }, [education])

    // DELETE HANDLE
    const handleDelete = async (id) => {
        try {
            const confirm = window.confirm("Are you sure? You want to Delete!")
            if (confirm) {
                const { data } = await axios.delete(`${SERVER_URl}/delete-edu/${id}`, {
                    headers: {
                        Authorization: token
                    }
                });
                if (data.success) {
                    toast.success(data.message);
                    dispatch(setEdu(data.edu))
                }
            }

        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }


    return (
        <>

            <div className="container-fluid mt-5 ">
                <div className="d-flex justify-content-between px-4 border-bottom pb-4">
                    <h1>Education</h1>
                    <Link to={"/admin/education/add-education"}>
                        <button className='btn btn-success'>
                            Add Education
                        </button>
                    </Link>
                </div>


                <table className='table table-bordered table-responsive mt-5'>
                    <thead className='bg-dark text-light'>
                        <tr>
                            <th>Job</th>
                            <th>Organization</th>
                            <th>Start - End Date</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            educat?.map(item => (
                                <tr key={item?._id}>
                                    <td>{item?.name}</td>
                                    <td>{item?.org}</td>
                                    <td>{item?.date}</td>
                                    <td className='w-50' style={{ textAlign: "justify" }}>{item?.desc}</td>
                                    <td >
                                        <div className='d-grid'>
                                            <Link className='btn btn-sm btn-primary mb-2' to={`/admin/education/edit-education/${item._id}`} >Edit</Link>
                                            <button className='btn btn-sm btn-danger' onClick={() => handleDelete(item._id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>


        </>
    )
}

export default Education