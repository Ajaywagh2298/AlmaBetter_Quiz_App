import Box from "@mui/material/Box";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Typography from "@mui/material/Typography";
const studentData = [
    { name: 'Student 1', mark: 0 },
    { name: 'Student 2', mark: 9 },
    { name: 'Student 3', mark: 95 },
    { name: 'Student 4', mark: 85 },
    { name: 'Student 5', mark: 15 },
    { name: 'Student 6', mark: 95 },
    { name: 'Student 7', mark: 0 },
    { name: 'Student 8', mark: 34 },
    { name: 'Student 9', mark: 7 },
    { name: 'Student 11', mark: 150 },
    { name: 'Student 12', mark: 30 },
    { name: 'Student 13', mark: 95 },
    { name: 'Student 14', mark: 85 },
    { name: 'Student 15', mark: 5 },
    { name: 'Student 16', mark: 95 },
    { name: 'Student 17', mark: 0 },
    { name: 'Student 18', mark: 34 },
    { name: 'Student 19', mark: 200 },
]
const DashBoardUIComponents = () => {
    return (
        <>
            <Box sx={{ width: '95%', height: 300, margin: '5vh' }}>
                <Typography variant="p" gutterBottom component="div" sx={{fontSize:'20px',fontWeight: 800}}>
                    Student Process
                </Typography>
                <ResponsiveContainer width="90%" height={300}>
                    <LineChart data={studentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="mark" stroke="#1ABC9C" strokeWidth={1} />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </>
    )
}

export default DashBoardUIComponents;