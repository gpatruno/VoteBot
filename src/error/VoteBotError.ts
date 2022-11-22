// Heavily inspired by node's `internal/errors` module
const ErrorCodes = require('./ErrorCode');
const Messages = require('./ErrorMessage');

export class VoteBotError extends Error {

    constructor(message: string, ...args: any[]) {
        super(VoteBotError.prototype.getMessage(message, args));

        // assign the error class name in your custom error (as a shortcut)
        this.name = this.constructor.name;

        // capturing the stack trace keeps the reference to your error class
        //Object.setPrototypeOf(this, VoteBotError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }

    /**
    * Format the message for an error.
    * @param {string} code The error code
    * @param {Array<*>} args Arguments to pass for util format or as function args
    * @returns {string} Formatted string
    * @ignore
    */
    getMessage(code: string, args: any): string {
        if (!(code in ErrorCodes)) throw new Error('Error code must be a valid VoteBotErrorCodes');
        const msg = Messages[code];
        if (!msg) throw new Error(`No message associated with error code: ${code}.`);
        if (typeof msg === 'function') return msg(...args);
        if (!args?.length) return msg;
        args.unshift(msg);
        return String(...args);
    }
}



module.exports = VoteBotError; 