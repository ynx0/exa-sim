'use strict';

// prevents yucky EXAValue<any>
class EXAValue<T = number | string> {
    readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    public isValid(){
        return true;
    }
    // TODO maybe add something useful here. Right now this just is here for type consistency
}
