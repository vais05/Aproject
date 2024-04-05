import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminAbout from './pages/adminabout.jsx';
import AdminAddStudent from './pages/adminAddStudent.jsx'; // Corrected import statement
import AdminAdd from './pages/adminadd.jsx';
import AdminUpdate from './pages/adminupdate.jsx';
import AdminProfile from './pages/adminprofile.jsx'; // Import AdminProfile once
import AdminUploadMaterial from './pages/adminuploadmaterial.jsx'; // Import AdminProfile once

import SuperAdminAdd from './pages/superadminadd.jsx';
import SuperAdminAddAdmin from './pages/superadminAddadmin.jsx'; // Corrected import statement
import SuperAdminProfile from './pages/superadminprofile.jsx';
import SuperAdminUpdate from './pages/superadminupdate.jsx'; // Import AdminProfile once
import SuperAdminUploadMaterial from './pages/superadminuploadmaterial.jsx'; // Import AdminProfile once
import SuperAdminAddStudent from './pages/superadminAddstudent.jsx'; // Import AdminProfile once
import SuperAdminAbout from './pages/superadminabout.jsx'; // Import AdminProfile once



import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Courses from './pages/courses.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Playlist from './pages/playlist.jsx';
import Profile from './pages/profile.jsx';
import Teachers from './pages/teachers.jsx';
import Register from './pages/register.jsx';
import TeacherProfile from './pages/teacher_profile.jsx';
import Update from './pages/update.jsx';
import WatchVideo from './pages/watch_video.jsx';

import Header from './components/Header.jsx';

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path='/about' element={<About/>}/>


                    <Route path='/adminabout' element={<AdminAbout/>}/>
                    <Route path='/adminAddStudent' element={<AdminAddStudent/>}/> {/* Corrected route path */}
                    <Route path='/adminadd' element={<AdminAdd/>}/>
                    <Route path='/adminupdate' element={<AdminUpdate/>}/>
                    <Route path='/adminprofile' element={<AdminProfile/>}/>
                    <Route path='/adminuploadmaterial' element={<AdminUploadMaterial/>}/>

                    
                    <Route path='/superadminabout' element={<SuperAdminAbout/>}/>
                    <Route path='/superadminAddadmin' element={<SuperAdminAddAdmin/>}/> {/* Corrected route path */}
                    <Route path='/superadminadd' element={<SuperAdminAdd/>}/>
                    <Route path='/superadminprofile' element={<SuperAdminProfile/>}/>
                    <Route path='/superadminupdate' element={<SuperAdminUpdate/>}/>
                    <Route path='/superadminuploadmaterial' element={<SuperAdminUploadMaterial/>}/>
                    <Route path='/superadminAddstudent' element={<SuperAdminAddStudent/>}/>




                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/courses' element={<Courses/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/playlist' element={<Playlist/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/teachers' element={<Teachers/>}/> {/* Corrected component name */}
                    <Route path='/teacher_profile' element={<TeacherProfile/>}/>
                    <Route path='/update' element={<Update/>}/>
                    <Route path='/watch_video' element={<WatchVideo/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
