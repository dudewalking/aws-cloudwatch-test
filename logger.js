const fs = require('fs'),
    LOG_FILENAME = 'message.log',
    ERROR_LOG_FILENAME = 'message.error.log';

module.exports = class Logger {

    static logMessage(message) {
        message = (new Date().toISOString()) + ' ' + message;
        console.log(message);
        fs.appendFileSync(LOG_FILENAME, message + '\n');
    }

    static logErrorMessage(message) {
        message = new Date().toISOString().concat(' ', message);
        console.error(message);
        fs.appendFileSync(ERROR_LOG_FILENAME, message + '\n');
    }

};