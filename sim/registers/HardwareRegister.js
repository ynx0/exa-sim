'use strict';

class HardwareRegister extends Register {

    constructor(config) {
        super();
        if(!config.readable || !config.writable) {
            throw new Error("Invalid Config provided for the Hardware Register");
        }

        this.isReadable = readable;
        this.isWritable = writable;

    }

    get value() {

    }

}
