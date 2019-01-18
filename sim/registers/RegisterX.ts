'use strict';

class RegisterX extends Register {
    isWord() {
        return this.value instanceof EXAWord;
    }
    isNumber() {
        return this.value instanceof EXANumber;
    }
}
