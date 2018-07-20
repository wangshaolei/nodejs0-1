var log4js = require('log4js');
log4js.configure({
    appenders: {
        console: {
            "type": "console",
            "category": "console"
        },
        everything: {
            type: "dateFile",
            filename: "log/run",
            pattern: "_yyyyMMdd.log",
            alwaysIncludePattern: true,
            compress: false,
            //boolean (default false) - preserve the file extension when rotating log files (file.log becomes file.2017-05-30.log instead of file.log.2017-05-30).
            keepFileExt: true,
            //integer (default 0) - if this value is greater than zero, then files older than that many days will be deleted during log rolling
            daysToKeep: 0
        },
        errorFile: {
            type: 'file',
            filename: "log/error.log",
            //integer (optional) - the maximum size (in bytes) for the log file. If not specified, then no log rolling will happen.
            maxLogSize: 1024 * 1024 * 8,
            //integer (optional, default value = 5) - the number of old log files to keep during log rolling.
            backups: 1024,
            keepFileExt: true,
            compress: false
        },
        errors: { type: 'logLevelFilter', level: 'error', appender: 'errorFile' }
    },
    "categories": {
        "default": {
            "appenders": [
                "everything",
                'errors',
                "console"
            ],
            //设置日志记录级别  trace, debug, INFO, WARN, ERROR, fatal ALL
            //调试时可以设置为all，线上可设置为INFO
            "level": "debug"
        }
    },
    "pm2": true,
    "replaceConsole": true
});
module.exports = log4js;
