const Logger = require('./logger');

Logger.logMessage('Info 1');
Logger.logMessage('Info 2');

Logger.logErrorMessage('Error 1');
Logger.logErrorMessage('Error 2');

Logger.logWarnMessage('Warning!');

Logger.logDebugMessage('Debugging....');
Logger.logSillyMessage('Silly....');

throw new Error('error');