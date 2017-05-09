const winston = require('winston'),
    WinstonCloudWatch = require('winston-cloudwatch');


winston.loggers.add(WinstonCloudWatch, {
    logGroupName: 'Category1',
    logStreamName: 'Stream1',
    awsRegion: 'us-east-1',
    console: {
        level: 'silly',
        colorize: true,
        label: 'Category one'
    }
});

winston.loggers.add(WinstonCloudWatch, {
    logGroupName: 'Category2',
    logStreamName: 'Stream1',
    awsRegion: 'us-east-1',
    console: {
        level: 'debug',
        colorize: true,
        label: 'Category one'
    }
});

const loggerCategory1 = winston.loggers.get('Category1');
const loggerCategory2 = winston.loggers.get('Category2');

loggerCategory1.error('ERROR IN FIRST!!!');
loggerCategory1.warn('WARNING IN FIRST!');
loggerCategory1.info('INFO IN FIRST.');

loggerCategory2.error('ERROR IN SECOND!!!');
loggerCategory2.warn('WARNING IN SECOND!');
loggerCategory2.info('INFO IN SECOND.');

loggerCategory1.silly('SILLY...........');
loggerCategory2.debug('DEBUG......');
