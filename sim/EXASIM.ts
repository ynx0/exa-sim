'use strict';


class EXASIM {
    private EXA_LIST: EXA[];
    private EVENT_BUS: Array<Event>;


    constructor() {
        this.EXA_LIST = [];
        this.EVENT_BUS = [];
    }

    addExa(exa: EXA) {
        this.EXA_LIST.push(exa);
    }

    simulate() {

    }

    scheduleMessageTransfer(messageTransferEvent: MessageTransferEvent, mode: MessageMode) {

    }
}
