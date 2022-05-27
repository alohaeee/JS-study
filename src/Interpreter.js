import Sval from "sval";
import chai from 'chai';

export function RunTask(task){
    // Sval options
    const options = {
        // ECMA Version of the code (5 | 6 | 7 | 8 | 9 | 10 | 2015 | 2016 | 2017 | 2018 | 2019)
        ecmaVer: 2019,
        // Whether the code runs in a sandbox
        sandBox: true,
    }

    // Create a interpreter
    let interpreter = new Sval(options)

    interpreter.run(task.currentCode);

    let testImports = {strictEqual: chai.assert.strictEqual,
        deepEqual: chai.assert.deepEqual}
    interpreter.import(testImports);

    interpreter.run(task.test);
}
