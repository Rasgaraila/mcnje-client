/**
 * @module
 */

/**
 * LoadingError - Error While Loading Script (CODE 1)
 * @extends Error
 */
class LoadingError extends Error {
    /**
     * @param {String} [name] Script Name.
     */
    constructor (name) {
        super(`Failed loading script "${name}".`);
        this.name = "LoadingError";
        this.code = 0x01;
        this.script = name;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * InternalError - Internal Proceessing Error (CODE 2)
 * @extends Error
 */
class InternalError extends Error {
    /**
     * @param {String} [name] Script Name.
     */
    constructor (name) {
        super(`Failed running script "${name}".`);
        this.name = "InternalError";
        this.code = 0x02;
        this.script = name;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * ExternalError - External Input Error (CODE 3)
 * @extends Error
 */
class ExternalError extends Error {
    /**
     * @param {String} [name] Script Name.
     */
    constructor (name) {
        super(`Unknown or Incorrect input to script "${name}".`);
        this.name = "ExternalError";
        this.code = 0x03;
        this.script = name;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * RuntimeError - Error Running a Function Or Such (CODE 4)
 * @extends Error
 */
class RuntimeError extends Error {
    /**
     * @param {String} [name] Script Name.
     */
    constructor (name) {
        super(`Failed running an action from ${name}.`);
        this.name = "RuntimeError";
        this.code = 0x04;
        this.script = name;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * EnvError - Error In Environment (CODE 5)
 * @extends Error
 */
class EnvError extends Error {
    /**
     * @param {String} [name] Script Name.
     */
    constructor (name) {
        super(`Failed running script ${name} duo to environmental problems.`);
        this.name = "EnvError";
        this.code = 0x05;
        this.script = name;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * DepError - Error in Dependency (CODE 6)
 * @extends Error
 */
class DepError extends Error {
    /**
     * @param {String} [name] Script Name.
     */
    constructor (name) {
        super(`Failed running script ${name} duo to dependency problems.`);
        this.name = "DepError";
        this.code = 0x06;
        this.script = name;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * ArgsError - Error in Argument Input (CODE 7)
 * @extends Error
 */
class ArgsError extends Error {
    /**
     * @param {String} [funcName] Function name
     * @param {String} [argPos] argument Position
     * @param {String} [argName] argument Name
     * @param {String} [script] script Name
     */
    constructor (funcName = "", argPos = "", argName = "", script = "") {
        super(`Required Argument ${argName} on position ${argPos} in ${funcName} is not defined.`);
        this.name = "ArgsError";
        this.code = 0x07;
        this.script = script;
        this.name = name;
        this.pos = pos;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    LoadingError,
    InternalError,
    ExternalError,
    RuntimeError,
    EnvError,
    ArgsError
};
