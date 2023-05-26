import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../../CSS/HeaderComponents.css";

const DashboardHeaderComponents =()=> {
    return (
        <Box sx={{flexGrow: 1}} >
            <AppBar position="static" >
                <Toolbar className={"bar"}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} className={"nav-button"}>
                        <img
                            src={`https://almablog-media.s3.ap-south-1.amazonaws.com/Group_1000002112_7184f3d26d.png`}
                            srcSet={`https://almablog-media.s3.ap-south-1.amazonaws.com/Group_1000002112_7184f3d26d.png 2x`}
                            alt={'logo'}
                            loading="lazy"
                            className={"logo"}
                      />
                    </Typography>
                    <Button ><Typography className={"nav-button"}>Home</Typography></Button>
                    <Button ><Typography className={"nav-button"}>My Quiz</Typography></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DashboardHeaderComponents;