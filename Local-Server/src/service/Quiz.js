const fs = require('fs');
const {checkFolderExists, checkFileExists, dateFormat,readFile} = require("../utils/fileUtils");

const createQuiz = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const quiz = req.body.quiz;
    const mark = req.body.mark;

    const sTitle = title.split(' ').join('_');
    const fd = dateFormat(fromDate);
    const td = dateFormat(toDate);

    const fileName = `quiz_${sTitle}_${fd}_to_${td}_test.json`; // Generate a unique file name
    const filePath = `./quizzes/${fileName}`; // Save the file in a "quizzes" directory
    await checkFolderExists('./quizzes')
    await checkFileExists(filePath)
    const quizData = {
        uid: Math.floor(Math.random() * 100000000000),
        title,
        description,
        fromDate,
        toDate,
        quiz,
        mark,
    }

    fs.writeFile(filePath, JSON.stringify(quizData), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to create quiz.'});
        } else {
            res.status(201).json({message: 'Quiz created successfully.'});
        }
    });
}

const getQuiz = async (req, res) => {
    const fileName = req.param.fileName;
    const filePath = `./quizzes/${fileName}`;

    await checkFolderExists('./quizzes')
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(404).json({error: 'Quiz not found.'});
        } else {
            const quizData = JSON.parse(data);
            res.status(200).json(quizData);
        }
    });
}

const getQuizzes = async (req, res) => {
    const fileData = readFile('./quizzes');
    res.status(200).send(fileData);
}

const deleteQuiz = async (req, res) => {
    const fileName = req.param.fileName;
    const filePath = `./quizzes/${fileName}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to delete quiz.'});
        } else {
            res.status(200).json({message: 'Quiz deleted successfully.'});
        }
    });
}

const updateQuiz = async (req, res) => {
    const fileName = req.param.fileName;
    const filePath = `./quizzes/${fileName}`;
    const quizData = {
        title: req.body.title,
        description: req.body.description,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        quiz: req.body.quiz,
        mark: req.body.mark,
    }
    fs.writeFile(filePath, JSON.stringify(quizData), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to update quiz.'});
        } else {
            res.status(200).json({message: 'Quiz updated successfully.'});
        }
    });
}

module.exports = {
    createQuiz,
    getQuiz,
    getQuizzes,
    deleteQuiz,
    updateQuiz,
}
