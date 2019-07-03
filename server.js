const express = require("express");
const path = require("path");
const pjson = require("./package.json");
const port = ("port", process.env.PORT || 8700);
const app = express();
const logger = require('./logger');

// Serve static files
app.use(express.static("public"));

const server = app.listen(port);
logger.info(`${pjson.name} running → PORT ${server.address().port}`);
setInterval(() =>{
    logger.debug('Debug Message')
}, 500);

// Throw an error
try{
    const test = test / 1;
}catch(err){
    logger.error(err);
}