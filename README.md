# EXA SIM
This program will be able to:
1. Validate and parse exalang (generate a a syntax tree)
2. Execute (a subset) of exalang
3. Simulate multiple exas with interaction (stretch goal)

## EXA PARSE
`exaparse` will be a module that will be able to:
1. Validate a line of code
2. Generate a syntax tree for a valid set of instructions
3. Evalute lines of code. This will be a reducer in redux terminology

There will be a state machine included in the `exaparse` module.
The state will be a redux store object.
The program syntax tree will be part of the state.

The state will have:
* Registers
* Program Tree
* Program Counter (PC) - Indicates which line is going to execute currently
* Blocked - whether this is for reading on M register or not

There will be a few key reducers.
* eval - this takes the state of the exa, and update it to match what the state should be after executing the line at the current program counter

The reducer to evaluate, `eval`, will take in the current state and action. If 

