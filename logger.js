const winstonLogger = require('./winston-config'),
    debugLogger = winstonLogger.DebugLogger,
    infoLogger = winstonLogger.InfoLogger,
    errorLogger = winstonLogger.ErrorLogger;
const ip = require('os').hostname();

module.exports = class Logger {

    static logMessage(message) {
        message = new Date().toUTCString().concat(`${ip} : ` + message);
        infoLogger.info(message);
    }

    static logErrorMessage(message) {
        message = new Date().toUTCString().concat(`${ip} : `, message);
        errorLogger.error(message);
    }

    static logWarnMessage(message) {
        message = new Date().toUTCString().concat(`${ip} : `, message);
        infoLogger.warn(message);
    }

    static logDebugMessage(message) {
        message = new Date().toUTCString().concat(`${ip} : `, message);
        debugLogger.debug(message);
    }

    static logSillyMessage(message) {
        message = new Date().toUTCString().concat(`${ip} : `, message);
        debugLogger.silly(message);
    }


};