import React , { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import DashboardHeaderComponents from "./Dashboard-Header-components";
import {colors} from "@mui/material";

const LoaderComponents = () => {
    const [progress, setProgress] = useState(0);

     useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 2));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Stack spacing={2} direction="row">
            <CircularProgress variant="determinate" value={progress} />
        </Stack>
    );
}

export default LoaderComponents;