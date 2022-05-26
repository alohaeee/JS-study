import {tasksStaticData} from "./TasksStaticData.mjs";

let saveTaskData = null;

export function FindTask(name, saved = true) {
    if (saved) {
        return GetTaskData().find((value, index) => {
            return value.name == name;
        })
    }
    return tasksStaticData.find((value, index) => {
        return value.name == name;
    })
}

function LoadTasks(taskList) {
    let tasks = [];
    for (const task of tasksStaticData) {
        tasks.push(LoadTask(Object.assign({}, task)))
    }
    return tasks
}
export function LoadTask(task) {
    let loadState = window.localStorage.getItem(task.name)
    if (loadState) {
        loadState = JSON.parse(loadState);
        Object.assign(task, loadState);
    }
    return task
}
export function SaveTask(task) {
    let savedState = {currentCode: task.currentCode, passed: task.passed}
    window.localStorage.setItem(task.name, JSON.stringify(savedState))
}

export function GetTaskData() {
    if (!saveTaskData){
        saveTaskData = LoadTask(tasksStaticData);
    }
    return saveTaskData
}

export default {FindTask, SaveTask, GetTaskData}