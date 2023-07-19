import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

//import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { teal} from '@mui/material/colors';



const McqSingle = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: ['', '', '',''], answerIndex: 0 }]);


  const handleQuestionChange = (event, questionIndex) => {
    const { name, value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex][name] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    
    const newQuestion = { text: '', options: ['', '', '',''], answerIndex: 0 };
    setQuestions([...questions, newQuestion]);
  
  };

  const handleRemoveQuestion = questionIndex => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (event, questionIndex) => {
    const { value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answerIndex = parseInt(value);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newQuiz = { title, description, questions };
    alert(`quiz got submited`);
    console.log(`${newQuiz}`);
    //axios.post('https://api.example.com/quizzes', newQuiz)
     // .then(response => {
       // console.log('Quiz created successfully:', response.data);
        // Redirect to quiz details page
     // })
     // .catch(error => {
       // console.error('Error creating quiz:', error);
     // });
  };

  return (
    <>
    <Box  sx={{
      width: '100%',
      height: '100%',
      textAlign:"center",
      fontFamily:"Gill Sans",

      color:"whitesmoke",
      backgroundColor: teal[700],
      }}>
    <h1 >Create Quiz</h1>
    </Box>
      <Box  sx={{
        width: '100%',
       
        textAlign:"center",
        fontFamily:"Gill Sans",
        backgroundColor: teal['A100'],
        fontSize: 20,
        fontWeight:500,
      }}
    >
    <div>
      <form onSubmit={handleSubmit} id="quizContent">
        <label>
          Title
          <TextField id="outlined-basic" variant="outlined" placeholder="Add Tittle" 
           fullWidth 
           type="text" 
           value={title}
           onChange={e =>{
            setTitle(e.target.value);           
          }} required />
        </label>
        <br />
        <label>
          Description
          <TextField id="outlined-basic" variant="outlined" 
          placeholder="Add Description" fullWidth type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <br />
<hr/>        
        {questions.map((question, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <label>
              Question Text:
              <TextField id="outlined-basic" variant="outlined" placeholder="Add Question" 
                type="text"
                name="text"
                value={question.text}
                onChange={e => handleQuestionChange(e, index)}
              />
            </label>
            <br />

            {question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                Option {optionIndex + 1}:
                <TextField id="outlined-basic" variant="outlined" placeholder="Add option" fullWidth 
                  type="text"
                  value={option}
                  onChange={e =>{ handleOptionChange(e, index, optionIndex)}}
                />
              </label>
            ))}

            <br />
            <label>
              Correct Answer:
              <select
                value={question.answerIndex}
                onChange={e => handleAnswerChange(e, index)}
              >
                {question.options.map((_, optionIndex) => (
                  <option key={optionIndex} value={optionIndex}>
                    Option {optionIndex + 1}
                  </option>
                ))}
              </select>
            </label>
            <br />

            <Button  variant="outlined" color="error" startIcon={<DeleteIcon />} size="small" type="button" onClick={() => handleRemoveQuestion(index)}>
              Remove Question
            </Button>
            <hr />
          </div>
        ))}

        <Button  variant="contained" color="secondary" size="small" type="button" onClick={handleAddQuestion}>
          Add Question
        </Button>
        <br />
        <Button  variant="contained" color="secondary" size="small" type="submit">Submit quiz</Button>
      </form>
    </div>
    </Box>
    </>
  );
}

export default McqSingle
