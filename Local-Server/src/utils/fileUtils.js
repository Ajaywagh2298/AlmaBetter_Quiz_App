const fs = require('fs');
const path = require('path');
const checkFileExists = (filePath) => {
    filePath.toString();
    if (!fs.existsSync(filePath)) {
        createFile(filePath, '[]');
        console.log('File created.');
    }
}

const checkFolderExists = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log('Folder created.');
    }
}

const createFile = (filePath, fileContent) => {
    fs.writeFileSync(filePath, fileContent);
    console.log('File created.');
}

function readFile(folderPath) {
    const files = fs.readdirSync(folderPath); // Read all files in the folder

    const dataArray = [];

    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const fileData = fs.readFileSync(filePath, 'utf-8'); // Read file contents as text

        if(folderPath === './quizzes') {
            let data = {
                fileName: file,
                uid: JSON.parse(fileData).uid,
                title: JSON.parse(fileData).title,
                description: JSON.parse(fileData).description,
                fromDate: JSON.parse(fileData).fromDate,
                toDate: JSON.parse(fileData).toDate,
            }
        } else if(folderPath === './playQuiz') {
            let data = {
                fileName: file,
                uid: JSON.parse(fileData).uid,
                name: JSON.parse(fileData).name,
                email: JSON.parse(fileData).email,
                score: JSON.parse(fileData).score,
                total: JSON.parse(fileData).total,
            }
        } else {
            let data = {
                fileName: file,
            }
        }
        dataArray.push(data); // Add file data to the array
    });

    return dataArray;
}

const dateFormat = (dateStr) => {
    const date = new Date(dateStr);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    const formattedDate = `${month}_${day}_${year}`;
    return formattedDate;
}
module.exports = {
    checkFileExists,
    checkFolderExists,
    createFile,
    dateFormat,
    readFile
}

