const winston = require('winston'),
    WinstonCloudWatch = require('winston-cloudwatch');


winston.add(WinstonCloudWatch, {
    logGroupName: 'testing',
    logStreamName: 'first',
    awsRegion: 'us-east-1'
});

winston.error('ERROR!!!');
winston.warn('WARNING!');
winston.info('INFO.');
winston.verbose('VERBOSE...');
winston.debug('DEBUG......');
winston.silly('SILLY...........');