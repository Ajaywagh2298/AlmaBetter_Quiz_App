import React, {useEffect, useState} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import DashboardHeaderComponents from "./Components/Dashboard-Header-components";
import DashBoardUIComponents from "./Components/DashBoardUIComponents";
import '../CSS/DashboardPage.css';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Box from "@mui/material/Box";
import {Card, CardContent} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ExtensionIcon from '@mui/icons-material/Extension';
import PeopleIcon from '@mui/icons-material/People';
import LiveQuizComponent from "./Components/Live-Quiz-Component";
import axios from "axios";
import AuthCredential from "../AuthService/authUtils";
const DynamicCard = ({ logo, title, buttonUrl }) => {
    return (
        <Grid item xs={6} md={3}>
            <Card sx={{ width: '20vh', height: '20vh', borderRadius: '10%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '2px 2px 2px 2px #D4DAD9'}}>
                    <Link to={buttonUrl} style={{ textDecoration: 'none' }} >
                        {logo}
                        <CardContent>
                            <Typography gutterBottom variant="p" component="div" sx={{ color: '#283747', fontWeight: 'bold' }}>
                                {title}
                            </Typography>
                        </CardContent>
                    </Link>
            </Card>
        </Grid>
    );
};
const DashboardPage = () => {

    const [data, setData] = useState([]);

    const instance = axios.create({
        AuthCredential
    });

    useEffect(() => {
        instance
            .get(`http://localhost:8000/api/users`)
            .then(({ data }) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const cardsData = [
        { logo: <LibraryBooksIcon sx={{ fontSize: 50, marginTop: '10%', color:'#1ABC9C'}} />, title: 'Create New Quiz', buttonUrl: '/quiz1' },
        { logo: <PsychologyAltIcon sx={{ fontSize: 50, marginTop: '10%' , color:'#DC7633'}} />, title: 'My Quiz', buttonUrl: '/quiz2' },
        { logo: <ExtensionIcon sx={{ fontSize: 50, marginTop: '10%' , color:'#AF7AC5'}} />, title: 'Play Quiz', buttonUrl: '/quiz2' },
        { logo: <PeopleIcon sx={{ fontSize: 50, marginTop: '10%' , color:'#5DADE2'}} />, title: 'Student DashBoard', buttonUrl: '/user-table' },
    ];
    const liveQuizzes = [
        { quizTitle: 'Math Quiz', startTime: '08:00 AM', participantsCount: 25 },
        { quizTitle: 'Science Quiz', startTime: '10:00 AM', participantsCount: 18 },
        { quizTitle: 'Math Quiz', startTime: '08:00 AM', participantsCount: 25 },
    ];
    return (
        <>
        <DashboardHeaderComponents />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CssBaseline />
            <DashBoardUIComponents />
            <Box maxWidth="xs"  className={"main-box"} sx={{ marginTop: '5vh'}}>
                <Box sx={{ width: '1000px', height: 300, margin: '5vh' }}>
                    <Grid container spacing={2} justifyContent="center">
                        {cardsData.map((card, index) => (
                            <DynamicCard key={index} logo={card.logo} title={card.title} buttonUrl={card.buttonUrl} />
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: 300, margin: '5vh', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography  variant="p" component="div" sx={{ color: '#E74C3C', fontWeight: 'bold',fontSize:'4vh',marginBottom:'2vh'}}>
                    Live Quiz
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {data.map((quiz, index) => {
                        if (new Date(quiz.toDate) >= new Date() && new Date(quiz.fromDate) <= new Date()) {
                            return <LiveQuizComponent key={index} quizTitle={quiz.quizTitle} startTime={quiz.startTime}
                                                      participantsCount={quiz.participantsCount}/>
                        }
                    })}
                </Grid>
            </Box>
        </div>
            </>
    )
}

export default DashboardPage;