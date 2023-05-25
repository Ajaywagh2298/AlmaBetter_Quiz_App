import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




const DashboardHeaderComponents =()=> {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    <Link to="DashboardHeaderComponents" color="inherit">Home</Link>
                    <Button color="inherit">My Quiz</Button>
                    <Link to="QuestionModal" className=""color="inherit" >create-quiz</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DashboardHeaderComponents;