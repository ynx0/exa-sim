
// values are always stored as strings. if you want an integer, use parseInt

class File {
    private contents: EXAValue[];
    private id: number;
    private cursorPosition: number;

    constructor(id: number, contents: EXAValue[]) {
        // the contents array is an array of strings, (instead of EXAWords for performance)
        // when you create a new file, you can have no contents
        this.contents = contents || [];
        this.cursorPosition = 0;
        this.id = 0;
    }

    get maxCursorPosition() {
        return this.contents.length - 1;
    }

    // clamps the amount to the first or last position
    clampSeekValue(val: number) {
        if ((this.cursorPosition + val) > this.maxCursorPosition) {
            return this.maxCursorPosition;
        } else if ((this.cursorPosition + val) < 0) {
            return 0;
        } else {
            return val;
        }
    }

    seek(seekAmt: number) {
        if (seekAmt === 0) {
            return;
        }

        seekAmt = this.clampSeekValue(seekAmt);
        this.cursorPosition += seekAmt;

        if(this.cursorPosition > this.maxCursorPosition) {
            // TODO maybe don't make this an error, and just handle it in the simulation idk
            throw new EXAError("Attempted to Seek");
        }
    }

    readAtCursor() {
        let contents = this.contents[this.cursorPosition];
        this.seek(1); // no error handling to let the error bubble up
        return contents;
    }

    // type: EXAValue
    write (value: EXAValue) {
        this.contents.splice(this.cursorPosition, 0, value);
        // todo error check
    }

}
