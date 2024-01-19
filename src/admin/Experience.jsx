import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SERVER_URl from '../utils/apiURl';

const Experience = () => {


    const [exp, setExp] = useState([]);

    const getExp = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/get-exp")
            if (data.success) {
                setExp(data.exp)
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message)
        }
    }

    useEffect(() => {
        getExp()
    }, [])

    // DELETE HANDLE
    const handleDelete = async (id) => {
        try {
            const confirm = window.confirm("Are you sure? You want to Delete!")
            if (confirm) {
                const { data } = await axios.delete(`${SERVER_URl}/delete-exp/${id}`);
                if (data.success) {
                    alert(data.message);
                    getExp()
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
                    <h1>Experience</h1>
                    <Link to={"/admin/experience/add-experience"}>
                        <button className='btn btn-success'>
                            Add Experience
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
                            exp?.map(item => (
                                <tr key={item?._id}>
                                    <td>{item?.name}</td>
                                    <td>{item?.org}</td>
                                    <td>{item?.date}</td>
                                    <td className='w-50' style={{ textAlign: "justify" }}>{item?.desc}</td>
                                    <td >
                                        <div className='d-grid'>
                                            <Link className='btn btn-sm btn-primary mb-2' to={`/admin/experience/edit-experience/${item._id}`} >Edit</Link>
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

export default Experience