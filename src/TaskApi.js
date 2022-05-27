import {tasksStaticData} from "./TasksStaticData";

let loadedTaskData = null;

export function FindTask(name, saved = true) {
    if (saved) {
        return GetTaskData().find((value, index) => {
            return value.name === name;
        })
    }
    return tasksStaticData.find((value, index) => {
        return value.name === name;
    })
}

function LoadTasks(taskList) {
    let tasks = [];
    for (const task of taskList) {
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
    if (task.currentCode == null){
        task.currentCode = task.template;
    }

    return task
}
export function SaveTask(task) {
    let saveCode = null;
    if (task.currentCode != task.template)
    {
        saveCode = task.currentCode;
    }
    let savedState = {passed: task.passed}

    window.localStorage.setItem(task.name, JSON.stringify(savedState))
}



export function GetTaskData() {
    if (loadedTaskData === null){
        loadedTaskData = LoadTasks(tasksStaticData);
    }
    return loadedTaskData;
}
