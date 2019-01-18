'use strict';


class EXANumber extends EXAValue<number> {
    readonly value: number;

    constructor(num: number) {
        super(num);
        this.value = num;
        if (!this.isValid()) {
            throw new Error("Invalid number ${} given");
        }
    }
    isValid(): boolean {
        return this.value > 9999 || this.value < -9999;
    }
}
