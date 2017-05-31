// const Logger = require('./logger');
//
// Logger.logMessage('Info 1');
// Logger.logMessage('Info 2');
//
// Logger.logErrorMessage('Error 1');
// Logger.logErrorMessage('Error 2');
//
// Logger.logWarnMessage('Warning!');
//
// Logger.logDebugMessage('Debugging....');
// Logger.logSillyMessage('Silly....');
//
// throw new Error('error');

const Logger = require('./logger2');

Logger.silly({test: 'Silly'});
Logger.debug('Debug');
Logger.verbose('Verbose');
Logger.info({test:  'Info'});
Logger.warn('Warn');
Logger.error('Error');
