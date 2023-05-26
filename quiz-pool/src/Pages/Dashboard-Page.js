import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DashboardHeaderComponents from "./Components/Dashboard-Header-components";
import Typography from "@mui/material/Typography";

const DashboardPage = () => {
    return (
        <div>
            <DashboardHeaderComponents/>
            <CssBaseline/>
            <Container maxWidth="lm">
                <Box className={'card mt-lg-5 border-0 shadow-none justify-content-center text-center'} >
                   <Box className={'card-bod d-flex'}>
                       <Typography variant="h1" component="div" sx={{flexGrow: 1}} className={"nav-button"}>
                       AJay
                   </Typography>
                    <Typography variant="h1" component="div" sx={{flexGrow: 1}} className={"nav-button"}>
                       AJay
                   </Typography>
                    <Typography variant="h1" component="div" sx={{flexGrow: 1}} className={"nav-button"}>
                       AJay
                   </Typography>
                   </Box>
                </Box>
            </Container>
        </div>
    )
}

export default DashboardPage;