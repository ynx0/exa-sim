'use strict';
const fs = require('fs');
const ohm = require('ohm-js');
const path = require('path');



function validateLine(line) {
    let lineLengthCheckIsValid = line.length() <= 24;
    // todo add other checks here
    return lineLengthIsValid;
}


let grammarFile = fs.readFileSync(path.join(__dirname, './exa_grammar.ohm'));
let EXA_GRAMMAR = ohm.grammar(grammarFile.toString());

let EXACUTOR = EXA_GRAMMAR.createSemantics();
EXACUTOR.addOperation('exec',{

});




let euclid_prg = fs.readFileSync(path.join(__dirname, './programs/euclids_pizza.exa')).toString();
let matchResult = EXA_GRAMMAR.match(euclid_prg);
console.log(matchResult);

// let match_tests = [
//     EXA_GRAMMAR.match("COPY X F"),
//     EXA_GRAMMAR.match("SWIZ 3 3 X"),
//     EXA_GRAMMAR.match("NOTE asdf asdf"),
//     EXA_GRAMMAR.match("RAND 33 33 X"),
// ];
// for (let match of match_tests) {
//     console.log(match.succeeded());
// }



