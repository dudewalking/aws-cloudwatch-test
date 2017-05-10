const winstonLogger = require('./winston-config'),
    debugLogger = winstonLogger.DebugLogger,
    infoLogger = winstonLogger.InfoLogger,
    errorLogger = winstonLogger.ErrorLogger;

module.exports = class Logger {

    static logMessage(message) {
        message = (new Date().toISOString()) + ' ' + message;
        infoLogger.info(message);
    }

    static logErrorMessage(message) {
        message = new Date().toISOString().concat(' ', message);
        errorLogger.error(message);
    }

    static logWarnMessage(message) {
        message = new Date().toISOString().concat(' ', message);
        infoLogger.warn(message);
    }

    static logDebugMessage(message) {
        message = new Date().toISOString().concat(' ', message);
        debugLogger.debug(message);
    }


};