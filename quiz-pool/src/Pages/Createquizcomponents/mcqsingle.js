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



const McqSingle = () => {
  const [inputText, setInputText] = React.useState('');

  const [inputList, setInputList] = React.useState([]);



  const deleteBtnHandler = (id) => {
    const temp = inputList.filter((el) =>
      el.id !== id)
    setInputList(temp);

  }

  const editBtnHandler = (id) => {
    const temp = inputList.map(el => {
      if (el.id === id) {
        var edited = prompt("Edit the task");
        return { ...el, input: edited }
      }
      else
        return el

    })

    setInputList(temp)

  }


  const onSave = (inputText) => {
    setInputList([...inputList, {
      id: Date.now(),//1. Math.random()//2. todoList.length+1
      input: inputText,
      status: 1
    }]);
  }


  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  }

  return (
    <>
      <div >
      
       
       <Container style={{backgroundColor:"pink"}}>
        
        <TextField id="outlined-basic" variant="outlined" fullWidth type="text" placeholder="Add Question" value={inputText} onChange={onChangeHandler} />
        {/*<TextField id="outlined-basic" variant="outlined" placeholder="Add Options" value={inputText} onChange={onChangeHandler} />*/}
        <Button variant="contained" color="primary" onClick={() => onSave(inputText)} type="button" >
          Save question
        </Button>
        </Container>
        
        
      </div>
      <TableContainer component={Paper}>
      <h2>Quiz question </h2>
        <Table aria-label="simple table">
          
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Your Question</TableCell>
              {/* <TableCell align="right">Option</TableCell>*/}
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(inputList || []).map(function (el, key) {
              return (
                <>
                  <TableRow >
                    <TableCell>{key + 1}</TableCell>
                    <TableCell>{el.input}</TableCell>

                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => deleteBtnHandler(el.id)} type="button" >
                        <span ><b>X</b></span>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => editBtnHandler(el.id)} type="button" style={{ color: "black" }} >
                        <span style={{ color: "black" }}><b>Edit</b></span>
                      </Button>

                    </TableCell>
                  </TableRow>

                </>
              )
            }
            )}

          </TableBody>
        </Table>
      </TableContainer>


    </>
  );
}

export default McqSingle

