'use strict';

class EXAWord extends EXAValue<string> {

    constructor(str: string) {
        EXAWord.verify(str);
        super(str);
    }

    static verify(str: string) {
        if (str.includes(' ')) {
            throw new Error(`Invalid String ${str} provided`);
        }
    }
}
