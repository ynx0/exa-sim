'use strict';

class EXA {
    private program: Program;

    private X: RegisterX;
    private T: RegisterX;
    private F: RegisterF;
    private M: RegisterM;

    private msg_mode: MessageMode;

    constructor(program: Program){
        this.program = program;
        this.X = new RegisterX();
        this.T = new RegisterT();
        this.F = new RegisterF();
        this.M = new RegisterM();
        this.msg_mode = MessageMode.GLOBAL; // todo check default
    }

    execute() {
        this.program.runStep();
    }



}
