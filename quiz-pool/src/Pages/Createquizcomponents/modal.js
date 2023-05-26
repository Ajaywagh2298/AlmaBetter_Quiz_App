
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
import McqSingle from './mcqsingle';
import McqMulti from './mcqmulti';
import ShortAnswer from './shortanswer';
import Descriptive from './descriptive';

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
  //Defines state of modal 
  const [open, setOpen] = React.useState(true);
  //Defines state of radioButton
  const [selectedOption, setSelectedOption] = React.useState("");
  //Defines state of Submit button in Modal
  const [click, setClick] = React.useState(false);

  const handleOpen = () => setOpen(true);
  //Visible content will be inside return
  return (
    <div>
      <Common /> {/*It renders the title box */}
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
              name="row-radio-buttons-group" >
              <FormControlLabel value="mcqsingle" selectedOption={selectedOption === "mcqsingle"} control={<Radio />} label="MCQ(Single Correct" defaultValue="mcqsingle" onChange={(e) => { setSelectedOption(e.target.value) }} />
              <FormControlLabel value="mcqmulti" selectedOption={selectedOption === "mcqmulti"} control={<Radio />} label="MCQ(multi correct)" onChange={(e) => { setSelectedOption(e.target.value) }} />
              <FormControlLabel value="shortanswer" selectedOption={selectedOption === "shortanswer"} control={<Radio />} label="Short answer(with 2 words)" onChange={(e) => { setSelectedOption(e.target.value) }} />
              <FormControlLabel value="descriptive" selectedOption={selectedOption === "descriptive"} control={<Radio />} label="Decription(with 2 or 4 sentences)" onChange={(e) => { setSelectedOption(e.target.value) }} />
            </RadioGroup>
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" onClick={() => { setClick(!click); setOpen(false) }}>
              Submit
            </Button>

          </FormControl>



        </Box>
      </Modal>
      {/*These lines will render the component as per the modal option chosen*/}
      {click && selectedOption === "" && alert("please refresh to choose question type")}
      {click && selectedOption === "mcqsingle" && <McqSingle />}
      {click && selectedOption === "mcqmulti" && <McqMulti />}
      {click && selectedOption === "shortanswer" && <ShortAnswer />}
      {click && selectedOption === "descriptive" && <Descriptive />}
      
      <Button variant="contained" color="primary"   >
          Submit Quiz
        </Button>
    </div>
  );
}
