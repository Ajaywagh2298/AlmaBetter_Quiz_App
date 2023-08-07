import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const LiveQuizComponent = ({ quizTitle, startTime, participantsCount }) => {
    return (
        <Card sx={{ width: 200, padding: '2px', marginBottom: '20px',margin:'1vh' }}>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ color: '#283747' }}>
                    {quizTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
                    Start Time: {startTime}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '5px' }}>
                    Participants: {participantsCount}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LiveQuizComponent;
