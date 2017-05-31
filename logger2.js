const winston = require('winston'),
    syslog = require('winston-syslog').Syslog;

/**
 * Module creates logger object in Node global scope.
 * Usage example: logger.warn('Some warning')
 *
 * Log levels:
 * - silly
 * - debug
 * - verbose
 * - info
 * - warn
 * - error
 */

let winstonLogger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: false,
            level: (process.env.NODE_ENV === 'dev') ? 'verbose' : 'warn',
            silent: false,
            colorized: true
        }),
        new (winston.transports.Syslog)({
            path: '/var/log/messages',
        })
    ]
});

const stringify = function () {
    let args = Array.prototype.slice.call(arguments);

    return args.map((arg, i) => arg[i]).map(arg => {
        if (typeof arg === 'object') {
            return JSON.stringify(arg).trim();
        }

        return arg;
    }).join(' ');
};

const logger = {
    silly: function () {
        winstonLogger.silly(stringify(arguments));
    },
    debug: function () {
        winstonLogger.debug(stringify(arguments));
    },
    verbose: function () {
        winstonLogger.verbose(stringify(arguments));
    },
    info: function () {
        winstonLogger.info(stringify(arguments));
    },
    warn: function () {
        winstonLogger.warn(stringify(arguments));
    },
    error: function () {
        winstonLogger.error(stringify(arguments));
    }
};


module.exports = logger;