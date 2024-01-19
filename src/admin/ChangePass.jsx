import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';
import { useNavigate } from 'react-router-dom';

const ChangePass = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        oldPass: "",
        newPass: ""
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${SERVER_URl}/admin/change-pass`, input);
            if (data.success) {
                toast.success(data.message)
                setInput({
                    oldPass: "",
                    newPass: ""
                })
                navigate("/admin/");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <section id='addProject'>

            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <div className='row'>
                    <div className='col-lg-5 mx-auto border rounded p-4'>
                        <h3>Change Password</h3>

                        <div className='form-group'>
                            <label>Old Password:</label>
                            <input type="text" placeholder='Enter Your Old Password' className='form-control' onChange={handleInput} name='oldPass' value={input.oldPass} />
                        </div>



                        <div className='form-group'>
                            <label>New Password:</label>
                            <input type="text" placeholder='Enter New Password' className='form-control' onChange={handleInput} name='newPass' value={input.newPass} />
                        </div>



                        <div className='p-btns'>
                            <button type='submit'>Change Password</button>
                        </div>


                    </div>
                </div>
            </form>
        </section>
    )
}

export default ChangePass