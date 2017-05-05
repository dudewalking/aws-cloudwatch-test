const winston = require('winston'),
    WinstonCloudWatch = require('winston-cloudwatch');


winston.add(WinstonCloudWatch, {
    logGroupName: 'testing',
    logStreamName: 'first'
});

winston.error('ERROR!');
winston.log('LALAL');
winston.info('HELLO!');