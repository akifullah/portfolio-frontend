import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';

const Profile = ({user}) => {
    return (
        <>
            <div className='profile mb-5 pb-5'>
                <h3>Profile</h3>

                <div className='profile-content'>
                    <h4>FULLNAME:</h4>
                    <p>{user?.name}</p>
                </div>

                <div className='profile-content'>
                    <h4>BIRTH DATE:</h4>
                    <p>{user?.dob}</p>
                </div>

                <div className='profile-content'>
                    <h4>EMAIL:</h4>
                    <p>{user?.email}</p>
                </div>

                <div className='profile-content'>
                    <h4>Phone:</h4>
                    <p>{user?.phone}</p>
                </div>

                <div className='profile-content'>
                    <h4>Address:</h4>
                    <p>{user?.address}</p>
                </div>

            </div>
        </>
    )
}

export default Profile
