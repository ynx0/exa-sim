'use strict';

class Word extends EXAValue {
    constructor(str) {
        super();
        if (str.includes(' ')) {
            throw new Error(`Invalid String ${str} provided`);
        }
        this.value = str;
    }
}
