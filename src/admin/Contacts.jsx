import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ServerURl from "../utils/apiURl";
import { toast } from 'react-toastify';
const Contacts = () => {
    const [data, setData] = useState([]);
    const getContacts = async () => {
        try {
            const { data } = await axios.get(`${ServerURl}/all-contact`);
            if (data.success) {
                setData(data.allContact);
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    const handleDelete = async (id) => {
        try {
            const idDelete = window.confirm("Are You Sure! you want to delete?");
            if (idDelete) {
                const { data } = await axios.delete(`${ServerURl}/delete-contact/${id}`);
                if (data.success) {
                    toast.success(data.message);
                    getContacts();
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        getContacts();
    }, [])
    return (
        <div className="container-fluid my-5 px-md-3 ">

            <div className="d-flex justify-content-between">
                <h1>Contacts</h1>
            </div>
            <div className="table-responsive mt-3">
                <table className='table table-bordered table-sm'>
                    <thead>
                        <tr className='bg-dark text-light ' >
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message </th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data?.map(item => (
                                <tr key={item._id}>

                                    <td>{item.name}</td>
                                    <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
                                    <td>{item.subject}</td>
                                    <td>{item.message}</td>
                                    <td>

                                        <button onClick={() => handleDelete(item._id)} className='btn btn-danger '>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contacts