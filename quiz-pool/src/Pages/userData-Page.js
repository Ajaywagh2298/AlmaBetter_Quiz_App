import React, { useEffect, useState } from "react";
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from "@mui/material";
import axios from "axios";
import AuthCredential from "../AuthService/authUtils";
import DashboardHeaderComponents from "./Components/Dashboard-Header-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledTableCell = ({ children }) => {
    return (
        <TableCell style={{ fontWeight: "bold" }}>{children}</TableCell>
    );
};

const StyledTableRow = ({ children }) => {
    return <TableRow>{children}</TableRow>;
};

const UserDataPage = () => {
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

    return (
        <>
        <DashboardHeaderComponents/>
        <Box sx={{margin:'10vh'}}>
            <Typography component={'div'} variant={'h4'} sx={{marginBottom:'2vh'}}>
                User Data
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>SR No</StyledTableCell>
                            <StyledTableCell align="centre">Full Name</StyledTableCell>
                            <StyledTableCell align="right">User Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, idx) => (
                            <StyledTableRow key={row.idx}>
                                <StyledTableCell component="th" scope="row">
                                    {idx + 1}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.fullName}</StyledTableCell>
                                <StyledTableCell align="right">{row.username}</StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
            </>
    );
};

export default UserDataPage;
