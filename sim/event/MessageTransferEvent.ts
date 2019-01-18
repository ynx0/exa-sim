
class MessageTransferEvent extends EXAEvent{
    private valueHeld: EXAValue;


    constructor(value: EXAValue) {
        super();
        this.valueHeld = value;
    }

}
