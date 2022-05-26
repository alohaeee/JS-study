import Sval from "sval";
import chai from 'chai';

export class JSInterpreter {
    constructor() {
        // Sval options
        const options = {
            // ECMA Version of the code (5 | 6 | 7 | 8 | 9 | 10 | 2015 | 2016 | 2017 | 2018 | 2019)
            ecmaVer: 2019,
            // Whether the code runs in a sandbox
            sandBox: true,
        }

        // Create a interpreter
        this.interpreter = new Sval(options)
        this.imports = {strictEqual: chai.assert.strictEqual,
                        deepEqual: chai.assert.deepEqual}
        this.interpreter.import(this.imports);
    }

    RunTask(task){
        this.interpreter.run(task.currentCode + task.test);
    }
};
export var defaultInterpr = new JSInterpreter();

export default {defaultInterpr}
