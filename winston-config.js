const winston = require('winston'),
    WinstonCloudWatch = require('winston-cloudwatch'),
    BASE_NAME = `${process.env.LOG_NAME || 'logger'}`,
    LOG_FILENAME = `${process.cwd()}/${BASE_NAME}.log`,
    ERROR_LOG_FILENAME = `${process.cwd()}/${BASE_NAME}.error.log`,
    EXCEPTION_LOG_FILENAME = `${process.cwd()}/${BASE_NAME}.exception.log`;

winston.transports.CloudWatch1 = WinstonCloudWatch;

// module.exports = new (winston.Logger)({
//     transports: [
//         new (winston.transports.File)({
//             name: 'file',
//             filename: LOG_FILENAME,
//             level: 'info'
//         }),
//         new (winston.transports.File)({
//             name: 'error-file',
//             filename: ERROR_LOG_FILENAME,
//             level: 'error'
//         }),
//         new (winston.transports.Console)({
//             level: 'debug',
//             colorize: true,
//         }),
//         new (winston.transports.CloudWatch1)({
//             logGroupName: 'Group1',
//             logStreamName: 'Stream1',
//             awsRegion: 'us-east-1',
//         }),
//     ],
//     exceptionHandlers: [
//         new (winston.transports.File)({
//             name: 'exception-file',
//             filename: EXCEPTION_LOG_FILENAME,
//         })
//     ],
//     exitOnError: false
// });

winston.loggers.add('debugLevel', {
    transports: [
        new (winston.transports.Console)({
            level: 'debug',
            colorize: true,
        }),
    ]
});

winston.loggers.add('infoLevel', {
    transports: [
        new (winston.transports.File)({
            name: 'file',
            filename: LOG_FILENAME,
            level: 'info'
        }),
        new (winston.transports.CloudWatch1)({
            logGroupName: 'Group1',
            logStreamName: 'Info - Stream',
            awsRegion: 'us-east-1',
        }),
    ],
});

winston.loggers.add('errorLevel', {
    transports: [
        new (winston.transports.File)({
            name: 'error-file',
            filename: ERROR_LOG_FILENAME,
            level: 'error'
        }),
        new (winston.transports.CloudWatch1)({
            logGroupName: 'Group1',
            logStreamName: 'Error - Stream',
            awsRegion: 'us-east-1',
        }),
    ],
});

winston.exitOnError = false;
winston.handleExceptions(new winston.transports.File({filename: EXCEPTION_LOG_FILENAME}));

const DebugLogger = winston.loggers.get('debugLevel');
const InfoLogger = winston.loggers.get('infoLevel');
const ErrorLogger = winston.loggers.get('errorLevel');

module.exports = {
    DebugLogger,
    InfoLogger,
    ErrorLogger
};


