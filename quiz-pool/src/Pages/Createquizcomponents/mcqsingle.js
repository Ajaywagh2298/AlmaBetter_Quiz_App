import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';




export default function McqSingle() {
    const [option, setOption] = React.useState('');
    const onSave = ()=>{
       setOption('');

    }
    const onChangeHandler = (e)=>{
        setOption(e.target.value);
    }

  return (<div className="questioncontainer">
    <h1>Questions</h1>
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
          
        },

        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        {/*Individual question section starts here*/}
        <div className='questionsection'>
      <TextField id="outlined-basic" fullWidth label="Enter your Question" variant="outlined" />
      <TextField id="demo-helper-text-aligned" label="Enter option" value={option} onChange={onChangeHandler}/>
      <FormControlLabel value="bottom" control={<Checkbox />} label="Correct" labelPlacement="bottom"/> <Button variant="contained" onClick={onSave}>Add option</Button><br/>
        </div>
        {/*Individual question section ends here*/}
         <Button variant="contained">Add Question</Button>

      </Box>
      </div>
  )
    }
