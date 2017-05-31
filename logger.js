const winstonLogger = require('./winston-config'),
    debugLogger = winstonLogger.DebugLogger,
    infoLogger = winstonLogger.InfoLogger,
    errorLogger = winstonLogger.ErrorLogger;
const ip = require('os').hostname();

module.exports = class Logger {

    static logMessage(message) {
        message = `${ip} : ` + message;
        infoLogger.info(message);
    }

    static logErrorMessage(message) {
        message =`${ip} : ` + message;
        errorLogger.error(message);
    }

    static logWarnMessage(message) {
        message = `${ip} : `+ message;
        infoLogger.warn(message);
    }

    static logDebugMessage(message) {
        message = new Date().toISOString().concat(` ${ip} : `, message);
        debugLogger.debug(message);
    }

    static logSillyMessage(message) {
        message = new Date().toISOString().concat(` ${ip} : `, message);
        debugLogger.silly(message);
    }


};