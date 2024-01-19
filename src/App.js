import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


// import toast, { Toaster } from 'react-hot-toast';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from "./admin/Dashboard"
import AddProject from './admin/AddProject';
import Profile from './admin/Profile';
import Skill from './admin/Skill';

import EditProject from './admin/EditProject';
import Projects from './admin/Projects';
import Auth from './admin/Auth';
import Experience from './admin/Experience';
import Education from './admin/Education';
import AddExperience from './admin/AddExperience';
import Exp from './admin/Exp';
import EditExperience from './admin/EditExperience';
import Edu from './admin/Edu';
import AddEducation from './admin/AddEducation';
import EditEducation from './admin/EditEducation';
import SmLayout from './admin/SmLayout';
import SmProjects from './admin/SmProjects';
import AddSmProject from './admin/addSmProject';
import EditSmProject from './admin/EditSmProject';
import { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { login } from './store/AuthSlice/authSlice';
import Contacts from './admin/Contacts';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectLayout from './admin/ProjectLayout';
import EditProfile from './admin/EditProfile';
import ChangePass from './admin/ChangePass';
import Cv from './admin/Cv';

function App() {

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("adminAuth"));

  const auth = useSelector(state => state.auth);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {



    if (user?.token) {
      dispatch(login(user));
      setIsLogin(user.token ? true : false);
      //   setIsLogin(auth?.isAuth);

    }




    AOS.init({
      offset: 0,
      duration: 700,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, [user?.token])
  return (
    <>
      <ToastContainer />

      <div className="wrapper">
        <Routes>
          <Route path='/admin/auth' element={<Auth />} />

          <Route path="/admin/" element={isLogin ? <Dashboard /> : <Auth />} >
            <Route path="" element={<Dashboard />}>
              <Route path='' element={<ProjectLayout />} >
                < Route path='' element={<Profile />} />
                <Route path='edit' element={<EditProfile />} />
                <Route path='change-pass' element={<ChangePass />} />
              </Route>

              <Route path='skills' element={<Skill />} />

              <Route path='education/' element={<Edu />} >
                <Route path='' element={<Education />} />
                <Route path='edit-education/:id' element={<EditEducation />} />
                <Route path='add-education' element={<AddEducation />} />

              </Route>

              <Route path='experience/' element={<Exp />} >
                <Route path='' element={<Experience />} />
                <Route path='edit-experience/:id' element={<EditExperience />} />
                <Route path='add-experience' element={<AddExperience />} />

              </Route>

              <Route path='projects/' element={<ProjectLayout />} >
                <Route path='' element={<Projects />} />
                <Route path='add-project' element={<AddProject />} />
                <Route path='edit-project/:id' element={<EditProject />} />

              </Route>

              <Route path='sm-projects/' element={<SmLayout />} >
                <Route path='' element={<SmProjects />} />
                <Route path='add-sm-project' element={<AddSmProject />} />
                <Route path='edit-sm-project/:id' element={<EditSmProject />} />

              </Route>
              <Route path='contact/' element={<Contacts />} />

              <Route path='skills' element={<Skill />} />
              <Route path='cv' element={<Cv />} />
            </Route>
          </Route>
          <Route path="/" element={<Home />} />

        </Routes>
      </div >
    </>
  );
}

export default App;
