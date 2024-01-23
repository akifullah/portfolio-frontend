import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./AddProject.css"
import { useNavigate, useParams } from 'react-router-dom';
import SERVER_URl from '../utils/apiURl';
const EditProject = () => {
    const token = JSON.parse(localStorage.getItem("adminAuth")).token;
    const { id } = useParams()
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        desc: "",
        live: "",
        github: "",
        aos: "fade-up"
    });
    const [pImg, setPImg] = useState();


    const getProject = async () => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/single-project/${id}`)
            const project = data.project;
            setInput({
                name: project.name,
                desc: project.desc,
                live: project.live,
                github: project.github,
                aos: project.aos
            })
            setPImg(project.image)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProject()
    }, [])
    const handleInput = (e) => {
        const { name, value } = e.target;

        setInput(preVal => {

            return {
                ...preVal,
                [name]: value
            }
        })
    }




    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", pImg)
        formData.append("name", input.name)
        formData.append("desc", input.desc)
        formData.append("live", input.live)
        formData.append("github", input.github)
        formData.append("aos", input.aos)


        try {
            const data = await axios.put(`${SERVER_URl}/edit-project/${id}`, formData, {
                headers: {
                    Authorization: token
                }
            })
            alert(data.data.message)
            navigate("/admin/projects");
        } catch (error) {
            alert(error.response.data.message)
        }
    }



    return (
        <>
            <section id='addProject'>

                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div className='row'>
                        <div className='col-lg-5 mx-auto border rounded p-4'>
                            <h3>Edit Project  </h3>

                            <div className='form-group'>
                                <label>Project Name:</label>
                                <input type="text" placeholder='Project Name' className='form-control' onChange={handleInput} name='name' value={input.name} />
                            </div>

                            <div className='form-group'>
                                <label>Project Image:</label>
                                <input type="file" className='form-control' placeholder='Image URL' onChange={(e) => setPImg(e.target.files[0])} name='image' accept='image/*' />
                            </div>

                            <div className='form-group'>
                                <label>Using:</label>
                                <input type="text" placeholder='Small Description' className='form-control' onChange={handleInput} name='desc' value={input.desc} />
                            </div>

                            <div className='form-group'>
                                <label>Live Link:</label>
                                <input type="text" placeholder='Project Live URL...' className='form-control' onChange={handleInput} name='live' value={input.live} />
                            </div>

                            <div className='form-group'>
                                <label>Github Link:</label>
                                <input type="text" placeholder='Project Github Link' className='form-control' onChange={handleInput} name='github' value={input.github} />
                            </div>

                            <div className='form-group'>
                                <label>AOS Animation Type:</label>
                                <select value={input.aos} name="aos" onChange={handleInput} className='form-select'>
                                    <option value="fade-up">Fade Up</option>
                                    <option value="fade-down">Fade Down</option>
                                    <option value="fade-left">Fade Left</option>
                                    <option value="fade-right">Fade Right</option>
                                    <option value="zoom-in">Zoom In</option>
                                    <option value="zoom-out">Zoom Out</option>
                                </select>

                            </div>

                            <div className='p-btns'>
                                <button type='submit'>Update Project</button>
                            </div>


                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default EditProject
