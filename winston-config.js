const winston = require('winston'),
    WinstonCloudWatch = require('winston-cloudwatch'),
    BASE_NAME = `${process.env.LOG_NAME || 'logger'}`,
    LOG_FILENAME = `${process.cwd()}/${BASE_NAME}.log`,
    ERROR_LOG_FILENAME = `${process.cwd()}/${BASE_NAME}.error.log`,
    EXCEPTION_LOG_FILENAME = `${process.cwd()}/${BASE_NAME}.exception.log`;

winston.transports.CloudWatch1 = WinstonCloudWatch;

winston.loggers.add('debugLevel', {
    transports: [
        new (winston.transports.Console)({
            level: 'debug',
            colorize: true,
            json: false,
        }),
    ]
});

winston.loggers.add('infoLevel', {
    transports: [
        new (winston.transports.File)({
            name: 'file',
            filename: LOG_FILENAME,
            level: 'info',
            json: false,
        }),
        new (winston.transports.CloudWatch1)({
            logGroupName: 'Group1',
            logStreamName: 'Info - Stream',
            awsRegion: 'us-east-1',
        })
    ],
});

winston.loggers.add('errorLevel', {
    transports: [
        new (winston.transports.File)({
            name: 'error-file',
            filename: ERROR_LOG_FILENAME,
            level: 'error',
            json: false,
        }),
        new (winston.transports.CloudWatch1)({
            logGroupName: 'Group1',
            logStreamName: 'Error - Stream',
            awsRegion: 'us-east-1',
        }),
    ],
});

winston.exitOnError = false;
winston.handleExceptions(
    new winston.transports.File({
        filename: EXCEPTION_LOG_FILENAME,
        json: false,
    })
);

const DebugLogger = winston.loggers.get('debugLevel');
const InfoLogger = winston.loggers.get('infoLevel');
const ErrorLogger = winston.loggers.get('errorLevel');

console.log(InfoLogger);

module.exports = {
    DebugLogger,
    InfoLogger,
    ErrorLogger
};


