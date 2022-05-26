// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react'
import TaskApi from "../src/TaskApi.mjs";
import {defaultInterpr} from "../src/Interpreter.mjs";
import chai from "chai";


test('Testing module tests cleared', () => {

    let tasks = [
        {
            "test": "strictEqual(sumOfDifferences([1, 2, 10]), 9, 'sumOfDifferences([1, 2, 10])');\nstrictEqual(sumOfDifferences([-3, -2, -1]), 2, 'sumOfDifferences([-3, -2, -1])');\n",
            "currentCode": "function sumOfDifferences(arr) {\n" +
                "    let sum = 0;\n" +
                "    arr.sort(function(a, b){return b-a});\n" +
                "    for(let i = 1; i < arr.length; i++) {\n" +
                "        sum += arr[i - 1] - arr[i];\n" +
                "    }\n" +
                "    return sum;\n" +
                "}"
        },
        {
            "test": "strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');\r\nstrictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');\r\nstrictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');\r\nstrictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');\r\nstrictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');\r\nstrictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');\r\nstrictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');\r\nstrictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');\r\nstrictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');\r\nstrictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');",
            "currentCode": "function humanReadable(seconds) {\n" +
                "  var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;\n" +
                "  return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)\n" +
                "}\n" +
                "\n" +
                "function formatDate(n){\n" +
                "  var number = Number.parseInt(n)\n" +
                "  return number > 9? number : '0'+number;\n" +
                "}"
        }

    ]

    for (let index in tasks) {
        let task = tasks[index];
        defaultInterpr.RunTask(task);
    }
});

test('Testing module test failed', () => {

    let tasks = [
        {
            "test": "strictEqual(sumOfDifferences([1, 2, 10]), 9, 'sumOfDifferences([1, 2, 10])');\nstrictEqual(sumOfDifferences([-3, -2, -1]), 2, 'sumOfDifferences([-3, -2, -1])');\n",
            "currentCode": "function sumOfDifferences(arr) {\n" +
                "    let sum = 0;\n" +
                "    arr.sort(function(a, b){return b-a});\n" +
                "    for(let i = 1; i < arr.length; i++) {\n" +
                "        sum += arr[i] - arr[i];\n" +
                "    }\n" +
                "    return sum;\n" +
                "}"
        },
        {
            "test": "strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');\r\nstrictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');\r\nstrictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');\r\nstrictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');\r\nstrictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');\r\nstrictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');\r\nstrictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');\r\nstrictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');\r\nstrictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');\r\nstrictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');",
            "currentCode": "function humanReadable(seconds) {\n" +
                "  var hours = seconds / 3599, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;\n" +
                "  return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)\n" +
                "}\n" +
                "\n" +
                "function formatDate(n){\n" +
                "  var number = Number.parseInt(n)\n" +
                "  return number > 9? number : '0'+number;\n" +
                "}"
        }

    ]

    for (let index in tasks) {
        let task = tasks[index];
        try {
            defaultInterpr.RunTask(task);
            throw Error("Must be error in test");
        } catch (e) {
            console.log(e);
        }
    }
});

test('Test module syntax error!', () => {

})

test('Task module FindTask', () => {

})

test('Task module SaveTask', ()=>{

})

test('Task module LoadTasks', ()=>{

})

