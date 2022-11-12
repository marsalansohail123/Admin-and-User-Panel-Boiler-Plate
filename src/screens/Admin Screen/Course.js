import React, { useState, useEffect } from 'react'
import { addCourse, updateData } from '../../config/firebasemethod'
import { ReadFromDatabase } from '../../config/firebasemethod';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CircularProgress from '@mui/material/CircularProgress';


const Course = () => {

    const [courseObj, setCourseObj] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [courseData, setCourseData] = useState([]);

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


    useEffect(() => {
        ReadFromDatabase('course data')
            .then((res) => {
                setCourseData(Object.values(res));
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    const updateCourse = (data, id) => {
        // data.courseName = 'asd'
        // updateData(data)
    }

    return (
        <div>
            <Box sx={{ justifyContent: 'center', marginTop: 1, color: 'white', display: 'flex' }}>
                <h1 className='h1courses'>Add Courses</h1>
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Box>
                    <TextField value={courseObj.courseName} label="Course Name" variant="outlined" onChange={e => setCourseObj({ ...courseObj, courseName: e.target.value })} />
                </Box>
                <Box>
                    <TextField value={courseObj.courseDes} label="Course Description" onChange={e => setCourseObj({ ...courseObj, courseDes: e.target.value })} variant="outlined" />
                </Box>
                <Box>
                    <TextField value={courseObj.nolt} label="Name of Lead Teacher" onChange={e => setCourseObj({ ...courseObj, nolt: e.target.value })} type='text' variant="outlined" />
                </Box>
                <Box>
                    <TextField value={courseObj.assissTeacher} label="Name of Assisstant Teachers" type='text' onChange={e => setCourseObj({ ...courseObj, assissTeacher: e.target.value })} variant="outlined" />
                </Box>
                <Box>
                    <TextField value={courseObj.maxSeats} label="Maximum Seats" type='number' onChange={e => setCourseObj({ ...courseObj, maxSeats: e.target.value })} variant="outlined" />
                </Box>
                <Box>
                    <TextField value={courseObj.price} label="Price" type='number' onChange={e => setCourseObj({ ...courseObj, price: e.target.value })} variant="outlined" />
                </Box>
                <Box>
                    <Button onClick={addCourses}>
                        Add
                    </Button>
                </Box>
            </Box>
            <Box sx={{ justifyContent: 'center', color: 'white', display: 'flex' }}>
                <h1 className='h1courses'>Your Courses</h1>
            </Box>
            <Box sx={{ marginTop: 2 }}>
                {
                    isLoading
                        ?
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                            <CircularProgress />
                        </Box>
                        :
                        <Box>
                            {
                                courseData.map((e, i) => {
                                    return (
                                        <Card style={{ width: '100%', marginBottom: 20 }} key={i}>
                                            <Card.Body>
                                                <Card.Title>{e.courseName}</Card.Title>
                                                <Card.Text>
                                                    {e.courseDes}
                                                </Card.Text>
                                                <Card.Text>
                                                    Course Lead Teacher: <b> {e.nolt} </b>
                                                </Card.Text>
                                                <Card.Text>
                                                    Course Assisstant Teacher: <b> {e.assissTeacher} </b>
                                                </Card.Text>
                                                <Card.Text>
                                                    Seats: {e.maxSeats}
                                                </Card.Text>
                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <h3>{e.price}/- Rs</h3>
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                    <Box>
                                                        <Button onClick={() => updateCourse(e, e.id)}>
                                                            Update Course
                                                        </Button>
                                                    </Box>
                                                    <Box>
                                                        <Button variant="primary">Delete Course</Button>
                                                    </Box>
                                                </Box>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </Box>
                }
            </Box>
        </div>
    )
}

export default Course;