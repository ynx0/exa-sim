'use strict';

// TODO Think about how to implement this
class RegisterM extends Register {

    // accept(newValue: EXAValue, from: EXA) {
    //     this.value = newValue;
    // }

    // sim will pass in the target based on internal random algorithm
    // write(newVal: EXAValue, target: EXA) {
    //     // todo implement
    // }

    write(newValue: EXAValue, mode: MessageMode) {
        SIM.scheduleMessageTransfer(new MessageTransferEvent(newValue), mode);
    }
}
