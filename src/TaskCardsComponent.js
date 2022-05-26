import React from "react";
import {Col, Row} from "antd";
import {TaskCardComponent} from "./TaskCardComponent";

export class TaskCardsComponent extends React.Component {
    render() {
        const tasks = this.props.tasks;
        return (
            <Row gutter={[18, 30]}>
                {tasks.map((card, index) =>
                    <Col key={`col${index}`} span={"6"}>
                        <TaskCardComponent card={card} key={`card${index}`}/>
                    </Col>
                )}
            </Row>
        )
    }
}