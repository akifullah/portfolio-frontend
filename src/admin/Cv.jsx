import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';



const Cv = () => {
    const [cv, setCv] = useState();


    // ADD CV
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("cv", cv)
            const { data } = await axios.put(`${SERVER_URl}/update-cv`, formData);
            if (data.success) {
                toast.success(data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }


    // GET CV
    const getCv = async () => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/get-cv`);
            if (data.success) {
                setCv(data.cv)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCv()
    }, [])
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between px-4 mt-5 border-bottom pb-4 mb-4">
                <h2>CV (Resume)</h2>

            </div>
            {/* UPLOAD CV */}
            <section id='addProject'>

                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div className='row'>
                        <div className='col-lg-5 border rounded p-4'>
                            <h3>Update CV  </h3>

                            <div className='form-group'>
                                <label>CV:</label>
                                <input type="file" className='form-control' onChange={(e) => setCv(e.target.files[0])} name='cv' />
                            </div>


                            <div className='p-btns'>
                                <button type='submit'>Save</button>
                            </div>


                        </div>
                    </div>
                </form>
            </section>
        </div >
    )
}

export default Cv