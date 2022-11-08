import React, { useState } from 'react'
import { addCourse } from '../config/firebasemethod'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Course = () => {

    const [courseObj, setCourseObj] = useState({});
    // console.log(courseObj)

    const addCourses = () => {
        if (Object.values(courseObj).length >= 6) {
            addCourse(courseObj)
                .then((success) => {
                    alert(success);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            alert("All Fields Must Be filled")
        }
    }
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Box>
                    <TextField label="Course Name" variant="outlined" onChange={e => setCourseObj({ ...courseObj, courseName: e.target.value })} />
                </Box>
                <Box>
                    <TextField label="Course Description" onChange={e => setCourseObj({ ...courseObj, courseDes: e.target.value })} variant="outlined" />
                </Box>
                <Box>
                    <TextField label="Name of Lead Teacher" onChange={e => setCourseObj({ ...courseObj, nolt: e.target.value })} type='text' variant="outlined" />
                </Box>
                <Box>
                    <TextField label="Name of Assisstant Teachers" type='text' onChange={e => setCourseObj({ ...courseObj, assissTeacher: e.target.value })} variant="outlined" />
                </Box>
                <Box>
                    <TextField label="Maximum Seats" type='number' onChange={e => setCourseObj({ ...courseObj, maxSeats: e.target.value })} variant="outlined" />
                </Box>
                <Box>
                    <TextField label="Price" type='number' onChange={e => setCourseObj({ ...courseObj, price: e.target.value })} variant="outlined" />
                </Box>
                <Box>
                    <Button onClick={addCourses}>
                        Add
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Course;