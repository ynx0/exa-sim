'use strict';
class EXAError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, EXAError);
    }
}
