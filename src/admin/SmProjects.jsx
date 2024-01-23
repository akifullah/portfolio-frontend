import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SERVER_URl from '../utils/apiURl';
import { useDispatch, useSelector } from 'react-redux';
import { setSmProject } from '../store/SmProjectSlice/smProjectSlice';
import toast from 'react-hot-toast';
const SmProjects = () => {
    const token = JSON.parse(localStorage.getItem("adminAuth")).token;


    const dispatch = useDispatch();
    
    
    const sm = useSelector(state=>state.smProject.smProject);
    const [data, setData] = useState([]);
    // HANDLE DELETE
    const handleDelete = async (id) => {
        try {
            const confirm = window.confirm("Are You sure? You want to Delete")
            if (confirm) {
                const { data } = await axios.delete(`${SERVER_URl}/delete-sm-project/${id}`, {
                    headers: {
                        Authorization: token
                    }
                });
                if(data.success){
                    console.log("All " , data.allProject)
                    toast.success(data.message)
                    dispatch(setSmProject(data.allProject))

                }
            }

        } catch (error) {
            console.log(error)
            alert(error.response.data.message)

        }
    }


    useEffect(() => {
        setData(sm);
    }, [sm])



    return (
        <>
            <div className="container-fluid my-5 px-md-3 ">

                <div className="d-flex justify-content-between">
                    <h1>All Sm Projects</h1>
                    <Link to="/admin/sm-projects/add-sm-project" className='btn btn-success'>Add Project</Link>
                </div>
                <div className="table-responsive mt-3">
                    <table className='table table-bordered table-sm'>
                        <thead>
                            <tr className='bg-dark text-light ' >
                                <th>Image</th>
                                <th>Title</th>
                                <th>Using</th>
                                <th>Live </th>
                                <th>Github </th>
                                <th>Animation</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data?.map(item => (
                                    <tr key={item._id}>
                                        <td>
                                            <img src={`${SERVER_URl}/${item.image}`} alt="" />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.desc}</td>
                                        <td><a className='btn btn-link' href={item.live}>Live</a></td>
                                        <td><a className='btn btn-link' href={item.github}>Github</a></td>
                                        <td>{item.aos}</td>
                                        <td>
                                            <Link to={`/admin/sm-projects/edit-sm-project/${item._id}`} className='btn btn-success me-2 ' >Edit</Link>
                                            <button onClick={() => handleDelete(item._id)} className='btn btn-danger '>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SmProjects