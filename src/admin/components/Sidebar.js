import React, { useEffect, useState } from 'react'
// import adminImg from "../../assets/img/";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"
import { toast } from 'react-toastify';
import axios from 'axios';
import SERVER_URl from '../../utils/apiURl';
import { useSelector } from 'react-redux';
const Sidebar = () => {

    const user = useSelector(state => state.user.user)

    const [admin, setAdmin] = useState()

    const token = JSON.parse(localStorage.getItem("adminAuth")).token;
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/admin/logout`, {
                headers: {
                    Authorization: token
                }
            });
            if (data.success) {
                toast.success(data.message);
                localStorage.removeItem("adminAuth");
                navigate("/");
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message);
        }
    }

    useEffect(()=>{
        setAdmin(user);
    },[user])


    return (
        <>
            <section id="sidebar">
                <Link to={"/admin/"} style={{ textDecoration: "none" }}>
                    <div className='admin-profile d-flex align-items-center justify-content-center'>
                        <img src={`${SERVER_URl}/${admin?.profile}`} alt="img" />
                        <h3>{admin?.name}</h3>
                    </div>
                </Link>


                <div className='sidebar-menu'>
                    <nav className='navbar navbar-light'>
                        <ul className='navbar-nav'>
                            <li><NavLink to="/admin/projects" >Projects</NavLink></li>
                            <li><NavLink to="/admin/sm-projects" >SM Projects</NavLink></li>
                            <li><NavLink to="/admin/"  >Profile</NavLink></li>
                            <li><NavLink to="/admin/cv"  >CV (Resume)</NavLink></li>
                            <li><NavLink to="/admin/skills">Skills</NavLink></li>
                            <li className='dropdown'>
                                <Link to="#" className=' d-flex align-items-center justify-content-between' data-bs-toggle="dropdown" data-bs-auto-close="false" >TimeLine <i className="fa-solid fa-angle-down"></i></Link>

                                <div className='dropdown-menu'>
                                    <NavLink to="/admin/education">Education</NavLink>
                                    <NavLink to="/admin/experience">Experience</NavLink>
                                </div>

                            </li>
                            {/* <li><NavLink to="/admin/portfolio">Portfolio</NavLink></li> */}
                            {/* <li><NavLink to="/admin/services">Services</NavLink></li> */}
                            <li><NavLink to="/admin/contact">Contacts</NavLink></li>
                            <li><Link onClick={handleLogout}>Logout</Link></li>

                        </ul>
                    </nav>
                </div>

            </section>
        </>
    )
}

export default Sidebar
