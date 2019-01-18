'use strict';


// todo, maybe use `privates` module or symbols to make registers more secure

class Register {
    protected value?: EXAValue;
    protected isWritable: boolean;
    protected isReadable: boolean;

    constructor() {
        this.isWritable = true;
        this.isReadable = true;
    }

    // noinspection JSMethodCanBeStatic


    write(newVal: EXAValue) {
        if (!this.isWritable) {
            throw new EXAError("Error: unable to write to readonly register");
        }
        this.value = newVal;
    }

}








