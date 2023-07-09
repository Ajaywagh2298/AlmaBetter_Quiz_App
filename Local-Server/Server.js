const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const SERVER_PORT = 8000;
const app = express();

const {createUsers, getUsers, login} = require('./src/service/User');
const {createPlayQuiz, getPlayQuiz, deletePlayQuiz} = require('./src/service/PlayQuiz');
const {createQuiz, getQuiz, deleteQuiz, updateQuiz, getQuizzes} = require('./src/service/Quiz');
const { verifyToken } = require('./src/utils/authUtils.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/users/create', async (req, res) => {
    await createUsers(req, res);
});

app.get('/api/users', async (req, res) => {
    await getUsers(req, res);
});

app.post('/api/users/login', async (req, res) => {
    await login(req, res);
});

app.post('/api/playQuiz/create', async (req, res) => {
    await createPlayQuiz(req, res);
});

app.get('/api/playQuiz', async (req, res) => {
    verifyToken(req, res, async () => {
        await getPlayQuiz(req, res);
    });
});

app.delete('/api/playQuiz/delete', async (req, res) => {
    await deletePlayQuiz(req, res);
});

app.post('/api/quiz/create', async (req, res) => {
    await createQuiz(req, res);
});

app.get('/api/quiz', async (req, res) => {
    await getQuiz(req, res);
});

app.delete('/api/quiz/delete', async (req, res) => {
    await deleteQuiz(req, res);
});

app.put('/api/quiz/update', async (req, res) => {
    await updateQuiz(req, res);
});

app.get('/api/quizzes', async (req, res) => {
    await getQuizzes(req, res);
});

app.listen(SERVER_PORT, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    return console.log(`server is listening on ${SERVER_PORT}`);
});