'use strict';


class ExaNumber extends EXAValue {
    constructor(num) {
        super();
        if (num > 9999 || num < -9999) {
            throw new Error(`Invalid Number ${num} provided`);
        }
        this.value = num;
    }
}
