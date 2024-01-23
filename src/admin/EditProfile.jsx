import React, { useEffect, useState } from 'react'
import "./AddProject.css"
import { toast } from 'react-toastify';
import axios from 'axios';
import SERVER_URl from '../utils/apiURl';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/UserSlice/UserSlice';
const EditProfile = () => {

    const user = useSelector(state => state.user.user);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        headLine: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        about: "",
        git: "",
        fb: "",
        in: ""
    });
    const [profile, setProfile] = useState();


    const handleInput = (e) => {
        const { name, value } = e.target;

        setInput({
            ...input,
            [name]: value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", input.name);
            formData.append("headLine", input.headLine);
            formData.append("email", input.email);
            formData.append("phone", input.phone);
            formData.append("dob", input.dob);
            formData.append("address", input.address);
            formData.append("about", input.about);
            formData.append("git", input.git);
            formData.append("fb", input.fb);
            formData.append("in", input.in);
            formData.append("profile", profile);

            const { data } = await axios.put(`${SERVER_URl}/admin/update`, formData);

            if (data.success) {
                setInput({
                    name: "",
                    email: "",
                    phone: "",
                    dob: "",
                    address: "",
                    git: "",
                    fb: "",
                    in: ""
                });
                dispatch(setUser(data.user));
                toast.success(data.message);
                navigate("/admin/");

            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }

    }

    const getUser = () => {
        setInput({
            name: user.name,
            headLine: user.headLine,
            email: user.email,
            phone: user.phone,
            dob: user.dob,
            address: user.address,
            about: user.about,
            git: user.git,
            fb: user.fb,
            in: user.in
        })
    }

    useEffect(() => {
        getUser()
    }, [user])
    return (
        <>
            <section id='addProject'>

                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div className='row'>
                        <div className='col-lg-5 mx-auto border rounded p-4'>
                            <h3>Edit Profile  </h3>

                            <div className='form-group'>
                                <label>Name:</label>
                                <input type="text" placeholder='Full Name' className='form-control' onChange={handleInput} name='name' value={input.name} />
                            </div>

                            <div className='form-group'>
                                <label>HeadLine:</label>
                                <input type="text" placeholder='HeadLine' className='form-control' onChange={handleInput} name='headLine' value={input.headLine} />
                            </div>

                            <div className='form-group'>
                                <label>Profile Image:</label>
                                <input type="file" className='form-control' placeholder='Image URL' onChange={(e) => setProfile(e.target.files[0])} name='profile' accept='image/*' />
                            </div>

                            <div className='form-group'>
                                <label>Email</label>
                                <input type="text" placeholder='Email' className='form-control' onChange={handleInput} name='email' value={input.email} />
                            </div>

                            <div className='form-group'>
                                <label>Phone:</label>
                                <input type="text" placeholder='Phone Number' className='form-control' onChange={handleInput} name='phone' value={input.phone} />
                            </div>
                            <div className='form-group'>
                                <label>DoB:</label>
                                <input type="text" placeholder='Date of Birth' className='form-control' onChange={handleInput} name='dob' value={input.dob} />
                            </div>
                            <div className='form-group'>
                                <label>Address:</label>
                                <input type="text" placeholder='Address' className='form-control' onChange={handleInput} name='address' value={input.address} />
                            </div>

                            <div className='form-group'>
                                <label>About:</label>
                                <textarea name="about" value={input.about} onChange={handleInput} placeholder='Write Short About yourself' className='form-control' rows="5"></textarea>
                            </div>


                            <div className='form-group'>
                                <label>Github Link:</label>
                                <input type="text" placeholder='Github Account Link' className='form-control' onChange={handleInput} name='git' value={input.git} />
                            </div>

                            <div className='form-group'>
                                <label>Facebook Link:</label>
                                <input type="text" placeholder='Facebook Account Link' className='form-control' onChange={handleInput} name='fb' value={input.fb} />
                            </div>
                            <div className='form-group'>
                                <label>Linkedin Link:</label>
                                <input type="text" placeholder='Linkedin Account Link' className='form-control' onChange={handleInput} name='in' value={input.in} />
                            </div>



                            <div className='p-btns'>
                                <button type='submit'>Update Profile</button>
                            </div>


                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default EditProfile