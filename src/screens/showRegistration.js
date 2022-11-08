import React from 'react'
import { useLocation } from 'react-router-dom';

const ShowRegistration = () => {

    const location = useLocation();

    return (
        <div>
            <h1>Your Registration Details</h1>
            <h2>First Name: {location.state.firstName}</h2>
            <h2>Father Name: {location.state.fathersName}</h2>
            <h2>Course: {location.state.course}</h2>
            <h2>Student Contact: {location.state.stuContact}</h2>
            <h2>Father Contact: {location.state.fatherContact}</h2>
            <h2>Student CNIC: {location.state.stuCnic}</h2>
            <h2>Email: {location.state.email}</h2>
            <h2>Date of Birth: {location.state.dob}</h2>
        </div >
    )
}

export default ShowRegistration;