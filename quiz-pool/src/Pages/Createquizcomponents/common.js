import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 
const Common=()=>{

return(
<div>
    <h1>Create Quiz </h1>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        
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

      }}
      noValidate
      autoComplete="off"
    >

       <TextField
          fullWidth 
          id="fullWidth"
          label="Tittle"
          
        />
        <br/>
      
        <TextField
          id="outlined-multiline-flexible fullWidth"
          label="Add Description"
          fullWidth  
          multiline
          maxRows={4}
        />
      
        
        </Box>
        </div>

)
}
 export default Common