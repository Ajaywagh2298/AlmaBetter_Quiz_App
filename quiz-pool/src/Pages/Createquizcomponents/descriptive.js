import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Descriptive() {
  return (<div>
    <Box
      component="form"
      sx={{
        width: "50%",
        textAlign:"center",
        boxSizing:"border-box",
        margin:"0 auto",
        padding:"2%",
        
        backgroundColor:"yellow",
        '&:hover': {
         border:"2px solid black",
          opacity: [0.9, 0.8, 0.7],
        },

        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" fullWidth label="Enter your Question" variant="outlined" />
      </Box>
      </div>
  )
    }
