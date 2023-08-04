const fs = require('fs');
const usersFile = '../users/users.json';
const accessCredentials = require('../utils/authUtils').accessCredentials;
const { checkFolderExists, checkFileExists } = require('../utils/fileUtils');
const message = require('../utils/responseUtils');
const createUsers = async (req, res) => {
    const fullName = req.body.fullName;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const userData = {
        uid : Math.floor(Math.random() * 1000000000),
        fullName: fullName,
        username: username,
        password: password,
        email: email,
    }
    checkFolderExists('../users');
    checkFileExists('../users/users.json');

  fs.readFile(usersFile, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT' && !data) {
      console.error(err);
      return res.status(500).json({
          statusCode: 500,
            error: 'Failed to read users.',
      });
    }
     const users = JSON.parse(data);
     if ( users.length > 0 ) {
         for (let i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                   res.status(400)
                   res.send("Username already exists")
                    break;
                }
                if (users[i].email === email) {
                    res.status(400)
                    res.send("Email already exists")
                    break;
                }
         }
     }


    users.push(userData);

    fs.writeFile(usersFile, JSON.stringify(users , null, 2) , (err) => {
      if (err) {
        return new Error(message.userNotRegistered);
      }
      res.status(200).json(userData);
    });
  });
}

const getUsers = async (req, res) => {
fs.readFile(usersFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read users.' });
    }
    const users = JSON.parse(data);
    res.status(200).json(users);
  });
}


const login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  fs.readFile(usersFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read users.' });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        // Valid credentials
       const token = accessCredentials(user);
      res.status(200)
      res.send({
          host: req.headers.host,
          token : token,
          uid: user.uid,
          username: user.username,
          email: user.email,
      });
    } else {
      // Invalid credentials
      res.status(401)
      res.send(message.invalidUsernameOrPassword)
    }
  });
};

module.exports = {
    createUsers,
    getUsers,
    login,
}