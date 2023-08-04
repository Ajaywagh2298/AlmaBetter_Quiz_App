const express = require('express');
const bodyParser = require('body-parser')
const SERVER_PORT = 8000;
const app = express();
const cors = require('cors');
const {createUsers, getUsers, login} = require('./src/service/User');
const {createPlayQuiz, getPlayQuiz, deletePlayQuiz} = require('./src/service/PlayQuiz');
const {createQuiz, getQuiz, deleteQuiz, updateQuiz, getQuizzes} = require('./src/service/Quiz');
const { verifyToken } = require('./src/utils/authUtils.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
}));

app.use(cors())
app.use(bodyParser.json())

app.post('/api/users/create', async (req, res,next) => {
    await createUsers(req, res, next);
});

app.get('/api/users', async (req, res,next) => {
    await getUsers(req, res, next);
});

app.post('/api/users/login', async (req, res,next) => {
    await login(req, res, next);
});

app.post('/api/playQuiz/create', async (req, res,next) => {
    await createPlayQuiz(req, res);
});

app.get('/api/playQuiz', async (req, res,next) => {
    verifyToken(req, res, async () => {
        await getPlayQuiz(req, res);
    });
});

app.delete('/api/playQuiz/delete', async (req, res,next) => {
    await deletePlayQuiz(req, res);
});

app.post('/api/quiz/create', async (req, res,next) => {
    await createQuiz(req, res);
});

app.get('/api/quiz', async (req, res,next) => {
    await getQuiz(req, res);
});

app.delete('/api/quiz/delete', async (req, res,next) => {
    await deleteQuiz(req, res);
});

app.put('/api/quiz/update', async (req, res,next) => {
    await updateQuiz(req, res);
});

app.get('/api/quizzes', async (req, res,next) => {
    await getQuizzes(req, res);
});

app.listen(SERVER_PORT, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    return console.log(`server is listening on ${SERVER_PORT}`);
});