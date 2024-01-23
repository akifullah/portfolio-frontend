import React, { useEffect, useState } from 'react'
import "./Header.css"
import HeaderData from './HeaderData'
import { toast } from 'react-toastify'
import axios from 'axios'
import SERVER_URl from '../utils/apiURl'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/UserSlice/UserSlice'

const Header = () => {

    const [data, setData] = useState();
    const dispatch = useDispatch();

    const getUser = async()=>{
        try {
            const {data} = await axios.get(`${SERVER_URl}/admin/admin`);
            if(data.success){
                setData(data.admin);
                dispatch(setUser(data?.admin));
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(()=>{
        getUser();
    },[])


    return (
        <>
            <HeaderData admin={data} />
        </>
    )
}

export default Header
