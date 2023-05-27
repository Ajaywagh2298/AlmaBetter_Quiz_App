import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { pink } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';



const McqSingle = () => {
  let obj = {};
  const [inputText, setInputText] = React.useState(obj);
  const [inputList, setInputList] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [optionList, setOptionList] = React.useState([]);
  const deleteBtnHandler = (id) => {
    const temp = inputList.filter((el) =>
      el.id !== id)
    setInputList(temp);

  }

  const editBtnHandler = (id) => {
    const temp = inputList.map(el => {
      if (el.id === id) {
        var questionedit = prompt("Edit the question or else click okay without edditing");
              return {
          ...el,
          question: questionedit,
          
        }
      }
      else
        return el

    })

    setInputList(temp)

  }


  const onSave = (inputText) => {
    if (count >= 2) {
      let payload = [...inputList, {
        id: Date.now(),
        question: inputText.question,
        option: inputText

      }]
      setInputList(payload);
    }
    else alert("You have add atleast 2 option to save the question")
  }

  const clickHandler = (option) => {
    if (count !== 4) {
      let payload = [...optionList, {
        id: Date.now(),
        option: option,

      }];
      setOptionList(payload);

    }
    else
      alert("only 4 options can be added")
  }


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...inputText,
      [name]: value
    };
    setInputText(payload);
  }



  return (
    <>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>

        <div >

          <Container style={{ backgroundColor: "pink" }}>

            <TextField id="outlined-basic" variant="outlined" fullWidth type="text" placeholder="Add Question" name="question" value={inputText.question} onChange={onChangeHandler} />
            <TextField id="outlined-basic" variant="outlined" placeholder="Add Options" name="option" value={optionList.option} onChange={onChangeHandler} />
            <Button variant="contained" color="primary" onClick={() => { setCount(count => count + 1); clickHandler(inputText.option) }} type="button" >
              Add option
            </Button>

            {/*Component to render options start here */}
            <TableHead align="center">
              <TableRow>
                <TableCell align="center">Option number</TableCell>
                <TableCell align="center">option</TableCell>
                <TableCell align="center"></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {(optionList || []).map(function (x, key) {
                return (<TableRow>
                  <TableCell align="center">{key + 1}</TableCell>
                  <TableCell align="center">{x.option}</TableCell>
                </TableRow>
                )

              })}
            </TableBody>
            {/*Component to render options ends here */}

            <Button variant="contained" color="primary" onClick={() => { onSave(inputText) }} type="button" >
              Save question
            </Button>
          </Container>


        </div>
        <TableContainer component={Paper}>
          <h2>Quiz question </h2>
          <Table aria-label="simple table">

            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Your Question</TableCell>
                <TableCell align="right">Options </TableCell>
                
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(inputList || []).map(function (el, key) {
                return (
                  <>
                    <TableRow >
                      <TableCell align="center">{key + 1}</TableCell>
                      <TableCell align="center">{el.question}</TableCell>
                      <TableCell align="center">
                        <TableHead>
                           <TableRow>
                            <TableCell align="center">Option number</TableCell>
                            <TableCell align="center">Option</TableCell>

                           </TableRow>
                           </TableHead>
                           <TableBody>
                        {(optionList || []).map(function (x, key) {
                          return (<TableRow>
                            <TableCell align="center">{key + 1}</TableCell>
                            <TableCell align="center">{x.option}</TableCell>
                          </TableRow>
                          )
                        })} 
                        </TableBody>
                        </TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="primary" onClick={() => deleteBtnHandler(el.id)} type="button" >
                          <span ><b>X</b></span>
                        </Button>
                      </TableCell >
                      <TableCell align="center">
                        <Button variant="contained" color="primary" onClick={() => editBtnHandler(el.id)} type="button" style={{ color: "black" }} >
                          <Fab color="secondary" aria-label="edit">
                            <EditIcon />
                          </Fab>                      </Button>

                      </TableCell>
                    </TableRow>

                  </>
                )
              }
              )}

            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </>
  );
}

export default McqSingle

