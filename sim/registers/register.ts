'use strict';


// todo, maybe use `privates` module or symbols to make registers more secure

class Register {
    protected value?: EXAValue;
    protected isWritable: boolean;
    protected isReadable: boolean;

    constructor(isWritable = true, isReadable = true) {
        this.isWritable = true;
        this.isReadable = true;
    }

    // noinspection JSMethodCanBeStatic


    write(newVal: EXAValue) {
        if (!this.isWritable) {
            throw new EXAError("Error: unable to write to non-writable register");
        }
        this.value = newVal;
    }

    read() {
        if (!this.isReadable) {
            throw new EXAError("Error: unable to read from non-readable register");
        }
        return this.value;
    }

    // todo evaluate if these methods belong this high in hierarchy
    isWord() {
        return this.value instanceof EXAWord;
    }
    isNumber() {
        return this.value instanceof EXANumber;
    }

}
