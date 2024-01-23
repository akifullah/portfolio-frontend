import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SERVER_URl from '../utils/apiURl';
import { useSelector } from 'react-redux';


const Portfolio = () => {
    const project = useSelector(state=>state.project.project);
    const [data, setData] = useState([]);
    const token = JSON.parse(localStorage.getItem("adminAuth")).token;


    // HANDLE DELETE
    const handleDelete = async (id) => {
        try {
            const confirm = window.confirm("Are You sure? You want to Delete")
            if (confirm) {
                const { data } = await axios.delete(`${SERVER_URl}/delete-project/${id}`, {
                    headers: {
                        Authorization: token
                    }
                })
                alert(data.message)
                getData()
            }

        } catch (error) {
            console.log(error)
            alert(error.response.data.message);
        }
    }


    useEffect(() => {
        setData(project)
    }, [project])
    return (
        <>

            <div className="container-fluid my-5 px-md-3 ">

                <div className="d-flex align-items-center justify-content-between">
                    <h1>All Projects</h1>
                    <Link to="/admin/projects/add-project" className='btn btn-success'>Add Project</Link>
                </div>
                <div className="table-responsive mt-3">
                    <table className='table table-bordered table-sm'>
                        <thead>
                            <tr className='bg-dark text-light ' >
                                <th>Image</th>
                                <th>Title</th>
                                <th>Desc</th>
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
                                            <Link to={`/admin/projects/edit-project/${item._id}`} className='btn btn-success me-2 ' >Edit</Link>
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

export default Portfolio