'use strict';
class EXAError extends Error {
    constructor(...args: any) {
        super(...args);
        Error.captureStackTrace(this, EXAError);
    }
}
