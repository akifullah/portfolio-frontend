import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./AddProject.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';
const AddProject = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        desc: "",
        live: "",
        github: "",
        aos: "fade-up"
    });
    const [pImg, setPImg] = useState();




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
            const token = JSON.parse(localStorage.getItem("adminAuth"))

            const data = await axios.post(`${SERVER_URl}/add-project`, formData, {
                headers: {
                    Authorization: token.token
                }
            })
            toast.success(data.data.message);
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
                            <h3>Add Project  </h3>

                            <div className='form-group'>
                                <label>Project Name:</label>
                                <input type="text" placeholder='Project Name' className='form-control' onChange={handleInput} name='name' />
                            </div>

                            <div className='form-group'>
                                <label>Project Image:</label>
                                <input type="file" className='form-control' placeholder='Image URL' onChange={(e) => setPImg(e.target.files[0])} name='image' accept='image/*' />
                            </div>

                            <div className='form-group'>
                                <label>Using:</label>
                                <input type="text" placeholder='Small Description' className='form-control' onChange={handleInput} name='desc' />
                            </div>

                            <div className='form-group'>
                                <label>Live Link:</label>
                                <input type="text" placeholder='Project Live URL...' className='form-control' onChange={handleInput} name='live' />
                            </div>

                            <div className='form-group'>
                                <label>Github Link:</label>
                                <input type="text" placeholder='Project Github Link' className='form-control' onChange={handleInput} name='github' />
                            </div>

                            <div className='form-group'>
                                <label>AOS Animation Type:</label>
                                <select name="aos" onChange={handleInput} className='form-select'>
                                    <option value="fade-up">Fade Up</option>
                                    <option value="fade-down">Fade Down</option>
                                    <option value="fade-left">Fade Left</option>
                                    <option value="fade-right">Fade Right</option>
                                    <option value="zoom-in">Zoom In</option>
                                    <option value="zoom-out">Zoom Out</option>
                                </select>

                            </div>

                            <div className='p-btns'>
                                <button type='submit'>Save Project</button>
                            </div>


                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddProject
