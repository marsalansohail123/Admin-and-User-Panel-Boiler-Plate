import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from '../screens/Admin';
import CheckAdmin from '../screens/CheckAdmin';
import Course from '../screens/Course';
import Registration from '../screens/Registration';
import RegistrationDetail from '../screens/RegistrationDetail';
import ShowCourse from '../screens/ShowCourse';
import ShowRegistration from '../screens/showRegistration';

const AppRoutering = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Registration />} />
                <Route path='/showReg' element={<ShowRegistration />} />
                <Route path='/admin' element={<CheckAdmin />} />
                <Route path='/a1ae0493-7826-43b9-90ae-76750cb43f09' element={<Admin />} />
                <Route path='/registrationDetail' element={<RegistrationDetail />} />
                <Route path='/course' element={<Course />} />
                <Route path='/showCourse' element={<ShowCourse />} />
            </Routes>
        </Router >
    )
}

export default AppRoutering;