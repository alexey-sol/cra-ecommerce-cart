import { createLogger, format, transports } from "winston";
import { join } from "path";

import { DEBUG, ERROR } from "@utils/const/loggingLevels";
import { DEVELOPMENT } from "@utils/const/nodeEnv";
import DateFormatter from "@utils/formatters/DateFormatter";

const {
    combine,
    errors,
    prettyPrint,
    timestamp
} = format;

const dateTimeFormatPattern = "YYYY-MM-DD HH:mm:ss";

const logger = createLogger({
    format: getCombinedFormat(),
    transports: createWinstonTransports(),
    exitOnError: false
});

export default logger;

function getCombinedFormat () {
    return combine(
        errors({ stack: true }),
        timestamp({ format: dateTimeFormatPattern }),
        prettyPrint()
    );
}

function createWinstonTransports () {
    const result = [];
    const isDevelopment = process.env.NODE_ENV === DEVELOPMENT;

    if (!isDevelopment) {
        pushFileOptionsTo(result);
    }

    pushConsoleOptionsTo(result);
    return result;
}

function pushFileOptionsTo (loggerTransports) {
    loggerTransports.push(
        new transports.File(getFileOptionsForLevel(ERROR)),
        new transports.File(getFileOptionsForLevel(DEBUG))
    );
}

function pushConsoleOptionsTo (loggerTransports) {
    loggerTransports.push(
        new transports.Console(getConsoleOptions())
    );
}

function getFileOptionsForLevel (level) {
    const root = process.cwd();
    const logsDirPath = join(root, "logs");

    return {
        filename: join(logsDirPath, `${level}.log`),
        handleExceptions: true,
        level,
        maxsize: convertMbToBytes(5),
        maxFiles: 5
    };
}

function convertMbToBytes (mb) {
    return mb * 1024 ** 2;
}

function getConsoleOptions () {
    return {
        format: getConsoleFormat(),
        handleExceptions: true,
        level: DEBUG
    };
}

function getConsoleFormat () {
    const printToConsole = format.printf(formatConsoleLog);

    return format.combine(
        format.colorize(),
        printToConsole
    );
}

function formatConsoleLog (info) {
    const date = new DateFormatter()
        .formatByPattern(dateTimeFormatPattern);

    const infoContent = (info.stack)
        ? `${info.stack}\n`
        : `${info.message}\n`;

    return `${date} ${info.level}: ${infoContent}`;
}
