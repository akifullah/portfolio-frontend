import React, { useEffect, useState } from 'react'
import "../components/About.css"
import "./skill.css"
import axios from 'axios'
import {toast} from 'react-toastify'
import SERVER_URl from '../utils/apiURl'
import { useDispatch, useSelector } from 'react-redux'
import { setSkills } from '../store/SkillSlice/SkillSlice'

const Skill = () => {
    const dispatch = useDispatch();
    const skill = useSelector(state=> state.skills.skills);
    const token = JSON.parse(localStorage.getItem("adminAuth")).token;

    const [skillss, setSkillss] = useState([]);

    const handleModal = (id) => {
        document.querySelector(".modal-backdrop").remove()
        document.querySelector(`${id}`).classList.remove("show")
        document.querySelector(`${id}`).style.display = "none"
    }


    const [val, setVal] = useState({
        name: "",
        percentage: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVal({
            ...val,
            [name]: value
        })
    }

    // ADD SKILL
    const addSkill = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post(`${SERVER_URl}/add-skill`, val, {
                headers: {
                    Authorization: token
                }
            })
            if (data.success) {
                toast.success(data.message)
                setVal({
                    name: "",
                    percentage: ""
                })
                dispatch(setSkills(data.skills))
                
                handleModal("#add-skill")

            }


        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)

        }
    }

    // handleDelete
    const handleDelete = async (id) => {
        try {
            const confirm = window.confirm("Are you sure! you want to delete?")
            if (confirm) {
                const { data } = await axios.delete(`${SERVER_URl}/delete-skill/${id}`, {
                    headers: {
                        Authorization: token
                    }
                })

                if (data.success) {
                    dispatch(setSkills(data.skills))
                    toast.success(data.message)

                }

            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }

    }

    const [up, setUp] = useState({
        name: "",
        percentage: ""
    })
    const [id, setId] = useState("")

    // editHandler
    const editHandler = (id, name, percentage) => {
        setId(id);
        setUp({
            name,
            percentage
        })
    }

    const handleUpChange = (e) => {
        const { name, value } = e.target;
        setUp((preVal) => ({
            ...preVal,
            [name]: value
        }))
    }


    const editSkill = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.put(`${SERVER_URl}/edit-skill/${id}`, up, {
                headers:{
                    Authorization: token
                }
            })
            toast.success(data.message)
            dispatch(setSkills(data.skills))

            handleModal("#edit-skill")

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)

        }
    }

    useEffect(()=>{
        setSkillss(skill)
    },[skill])

    return (
        <>


            {/* ADD SKILL */}
            <div className="modal" id='add-skill'>
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Add Skill</h2>
                            <button data-bs-dismiss="modal" className=' btn-close'></button>
                        </div>
                        <div className="modal-body mt-4">
                            <form onSubmit={addSkill}>
                                <div className="form-group mb-3">
                                    <label>Skill Name</label>
                                    <input type="text" value={val.name} name='name' onChange={handleChange} className='form-control' />
                                </div>
                                <div className="form-group mb-3">
                                    <label >Skillset percentage</label>
                                    <input type="number" value={val.percentage} name='percentage' onChange={handleChange} className='form-control' placeholder="value 40 - 100" />
                                </div>
                                <div className="form-group my-4  text-end">
                                    <button className='btn btn-success'>Save Skill</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* EDIT SKILL */}
            <div className="modal" id='edit-skill'>
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Edit Skill</h2>
                            <button data-bs-dismiss="modal" className=' btn-close'></button>
                        </div>
                        <div className="modal-body mt-4">
                            <form onSubmit={editSkill}>
                                <div className="form-group mb-3">
                                    <label>Skill Name</label>
                                    <input type="text" name='name' value={up.name} onChange={handleUpChange} className='form-control' />
                                </div>
                                <div className="form-group mb-3">
                                    <label >Skillset percentage</label>
                                    <input type="number" name='percentage' value={up.percentage} onChange={handleUpChange} className='form-control' placeholder="value 40 - 100" />
                                </div>
                                <div className="form-group my-4  text-end">
                                    <button className='btn btn-success'>Save Skill</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="d-flex justify-content-between px-4 mt-5 border-bottom pb-4 mb-4">
                    <h2>Skills</h2>
                    <button className='btn btn-primary' data-bs-target="#add-skill" data-bs-toggle="modal">Add Skill</button>

                </div>
                {
                    skillss.map((e, i) => (
                        <div className=" px-5 " key={i}>
                            <div className=" row align-items-center border-bottom  py-4 mt-4">
                                <div className="col-9">
                                    <div className='skill-wrap ' key={i}>
                                        <h4>{e.name}</h4>
                                        <div className='skill-bar mb-0'>
                                            <div className='skill-bar-inner' style={{ width: e.percentage + "%" }}>
                                                <div className='skill-bar-value'>
                                                    {`${e.percentage}%`}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3">

                                    <button className='btn btn-sm btn-primary me-3' data-bs-target="#edit-skill" data-bs-toggle="modal" onClick={() => editHandler(e._id, e.name, e.percentage)} > Edit</button>
                                    <button className='btn btn-sm btn-danger' onClick={() => handleDelete(e._id)}> Delete</button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
        </>
    )
}

export default Skill