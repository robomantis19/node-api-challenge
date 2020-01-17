const express = require('express'); 
const dataRouter = require('./dataRouter.js');
const projectRouter = require('./projectRouter.js');

const server = express();
server.use(express.json());

// function logger(req, res, next) {
//     const { method, originalUrl } = req; 
//     console.log(`${method} to ${originalUrl}`);
//     next();
//   }


server.get('/', (req, res) => { 
    res.send(`<h2> Lets start coding Lambda</h2>`)
})

// server.use(logger)
server.use('/api/posts', projectRouter);
server.use('/api/users', dataRouter);


module.exports = server;