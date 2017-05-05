const winston = require('winston'),
    WinstonCloudWatch = require('winston-cloudwatch');


winston.add(WinstonCloudWatch, {
    logGroupName: 'testing',
    logStreamName: 'first',
    awsRegion: 'us-east-1'
});

winston.error('ERROR!');
winston.log('LALAL');
winston.info('HELLO!');