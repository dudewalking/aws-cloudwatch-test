const winston = require('winston'),
    WinstonCloudWatch = require('winston-cloudwatch');


winston.transports.CloudWatch1 = WinstonCloudWatch;
winston.transports.CloudWatch2 = WinstonCloudWatch;

winston.loggers.add('category1', {
    CloudWatch1: {
        logGroupName: 'Group1',
        logStreamName: 'Stream1',
        awsRegion: 'us-east-1'
    },
    console: {
        level: 'silly',
        colorize: true,
        label: 'category one'
    }
});

winston.loggers.add('category2', {
    CloudWatch1: {
        logGroupName: 'Group2',
        logStreamName: 'Stream1',
        awsRegion: 'us-east-1'
    },
    console: {
        level: 'debug',
        colorize: true,
        label: 'category two'
    }
});


const logger1 = winston.loggers.get('category1');
const logger2 = winston.loggers.get('category2');


logger1.error('ERROR IN 1!!!');
logger1.warn('WARNING IN 1!');
logger1.info('INFO IN 1.', {meta: 'This is metadata'});

logger2.error('ERROR IN 2!!!');
logger2.warn('WARNING IN 2!');
logger2.info('INFO IN 2.');

logger1.silly('SILLY IN 1...........');
logger1.silly('DEBUG IN 1...........');

logger2.silly('SILLY IN 2......');
logger2.debug('DEBUG IN 2 ......');
