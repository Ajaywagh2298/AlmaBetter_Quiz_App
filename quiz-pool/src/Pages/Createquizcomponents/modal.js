
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Common from './common'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function QuestionModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  

  const clickHandler=(event)=>{
    alert("hello");
    setOpen(current=>!current);
    
   
  return <Common />
    
    
  }
  
  return (
    <div>
     
      <Modal
        onLoad={handleOpen}
        open={open}
       
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
       
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Please, select the question type in order to procced</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="mcqsingle" control={<Radio />} label="MCQ(Single Correct" defaultValue="mcqsingle"/>
        <FormControlLabel value="mcqmulti" control={<Radio />} label="MCQ(multi correct)" />
        <FormControlLabel value="shortanswer" control={<Radio />} label="Short answer(with 2 words)" />
        <FormControlLabel value="descriptive" control={<Radio />} label="Decription(with 2 or 4 sentences)" />

       
      </RadioGroup>
      <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" onClick={clickHandler}>
         Submit
        </Button>
    </FormControl>
  

    
        </Box>
      </Modal>
    </div>
  );
}
