const fs = require('fs');
const {checkFolderExists, checkFileExists, dateFormat,readFile} = require("../utils/fileUtils");
const createPlayQuiz = async (req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const quiz = req.body.quiz;
    const mark = req.body.mark;
    const opMark = req.body.opMark;

    const fileName = `quiz_${title}_${fromDate}_to_${toDate}_${username}.json`;
    const filePath = `./playQuiz/${fileName}`;
    const quizData = {
        title: title,
        description: description,
        fromDate: fromDate,
        toDate: toDate,
        quiz: quiz,
        mark: mark,
        totalMark: quiz.length,
        opMark: opMark,
    }
    fs.writeFile(filePath, JSON.stringify(quizData), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to Submit quiz.'});
        } else {
            res.status(200).json({message: 'Quiz Submitted successfully.'});
        }
    });
}

const getPlayQuiz = async (req, res) => {
    const fileName = req.params.fileName;
    const filePath = `./playQuiz/${fileName}`;
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.status(404).json({error: 'Quiz not found.'});
        } else {
            const quizData = JSON.parse(data);
            res.status(200).json(quizData);
        }
    });
}

const deletePlayQuiz = async (req, res) => {
    const fileName = req.params.fileName;
    const filePath = `./playQuiz/${fileName}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to delete quiz.'});
        } else {
            res.status(200).json({message: 'Quiz deleted successfully.'});
        }
    });
}

const getPlayQuizzes = async (req, res) => {
    const fileData = readFile('./playQuiz');
    res.status(200).send(fileData);
}

module.exports = {
    createPlayQuiz,
    getPlayQuiz,
    deletePlayQuiz,
    getPlayQuizzes,
}
