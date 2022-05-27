import React from "react";
import {GetTaskData} from "./TaskApi";
import {TaskCardsComponent} from "./TaskCardsComponent";
import {Typography} from "antd";

export class Home extends React.Component {

    render() {
        return (
            <div>
            <Typography.Title> Обучение JavaScript </Typography.Title>
            <TaskCardsComponent tasks={GetTaskData()}></TaskCardsComponent>
            </div>
        )
    }
}