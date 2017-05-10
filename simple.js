// const winston = require('winston'),
//     WinstonCouchdb = require('winston-couchdb').Couchdb,
//     WinstonMail = require('winston-mail').Mail;
//     WinstonCloudWatch = require('winston-cloudwatch');
//
//
// winston.transports.CloudWatch1 = WinstonCloudWatch;
// winston.transports.CloudWatch2 = WinstonCloudWatch;
//
// winston.loggers.add('category1', {
//     CloudWatch1: {
//         logGroupName: 'Group1',
//         logStreamName: 'Stream1',
//         awsRegion: 'us-east-1'
//     },
//     console: {
//         level: 'silly',
//         colorize: true,
//         label: 'category one'
//     },
//     transports: [
//         new (winston.transports.File)({
//             name: 'info-file',
//             filename: 'filelog-info.log',
//             level: 'info'
//         }),
//         new (winston.transports.File)({
//             name: 'error-file',
//             filename: 'filelog-error.log',
//             level: 'error'
//         }),
//         new (winston.transports.Mail)({
//             host: "smtp.gmail.com",
//             ssl: true,
//             username: 'nikolasbasik@gmail.com',
//             password: 'oouhjjvbkfvzarvp',
//             to: 'nikolasbasik@gmail.com',
//             from: 'megatrolling@test.com'
//         }),
//         new (winston.transports.Couchdb)({
//             host: '127.0.0.1',
//             port: 5984,
//             db: 'whatever-flake',
//         })
//     ]
// });
//
// winston.loggers.add('category2', {
//     CloudWatch1: {
//         logGroupName: 'Group2',
//         logStreamName: 'Stream1',
//         awsRegion: 'us-east-1'
//     },
//     console: {
//         level: 'debug',
//         colorize: true,
//         label: 'category two'
//     }
// });
//
//
// const logger1 = winston.loggers.get('category1');
// const logger2 = winston.loggers.get('category2');
//
//
// logger1.error('ERROR IN 1!!!');
// logger1.warn('WARNING IN 1!');
// logger1.info('INFO IN 1.', {meta: 'This is metadata'});
//
// logger2.error('ERROR IN 2!!!');
// logger2.warn('WARNING IN 2!');
// logger2.info('INFO IN 2.');
//
// logger1.silly('SILLY IN 1...........');
// logger1.silly('DEBUG IN 1...........');
//
// logger2.silly('SILLY IN 2......');
// logger2.debug('DEBUG IN 2 ......');
