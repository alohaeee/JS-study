import React from "react";
import {Alert, Button, Col, Divider, Row, Tabs, Typography} from "antd";

import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-twilight";


import ReactMarkdown from 'react-markdown'
import {RunTask} from "./Interpreter";
import {useParams} from "react-router-dom";
import {FindTask, SaveTask} from "./TaskApi";


const {TabPane} = Tabs;

class ErrorComponent extends React.Component {
    render() {
        const error = this.props.error;

        return (
            <div>
                <Alert showIcon message={(error.name === "AssertionError" && "Test Failed!")
                    || error.name} type="error" description={error.message}/>
            </div>
        );
    }
}

class SuccessComponent extends React.Component {
    render() {
        const title = this.props.title;
        const msg = this.props.message;
        return (
            <div>
                <Alert showIcon message={title} type="success" description={msg}/>
            </div>
        );
    }
}

export class TaskComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCode: this.props.card.currentCode,
            editorHeight: 400,
            editorWidth: "auto",
            error: null,
            activeTab: this.props.card.theory ? "theory" : "description",
            runned: false,
            task: this.props.card
        }
    }

    onChange = (newValue) => {
        this.state.task.currentCode = newValue
        this.setState({task: this.state.task});
    }

    componentWillUnmount() {
        SaveTask(this.state.task);
    }

    onCompile = () => {
        this.setState({runned: true})
        this.setState({activeTab: "output"})
        this.setState({error: null})

        this.state.task.passed = true
        try {
            RunTask(this.state.task);
        } catch (error) {
            this.state.task.passed = false;
            this.setState({error: error});
        }
        SaveTask(this.state.task);
    }

    resetTask = () => {
        this.state.task.currentCode = this.state.task.template
        this.state.task.passed = false;
        this.setState({task: this.state.task});
        SaveTask(this.state.task);
    }

    onTabChange = (activeKey) => {
        this.setState({
            activeTab: activeKey
        })
    }

    render() {
        const card = this.props.card;
        return (
            <div>
                <Row>
                    <Col flex="2">
                        <Tabs activeKey={this.state.activeTab} onChange={this.onTabChange}>
                            {
                                card.theory &&
                                <TabPane tab="Theory" key="theory">
                                    <Typography.Paragraph>
                                        <ReactMarkdown>{card.theory}</ReactMarkdown>
                                    </Typography.Paragraph>
                                </TabPane>
                            }
                            <TabPane tab="Description" key="description">
                                <Typography.Paragraph>
                                    <ReactMarkdown>{card.description}</ReactMarkdown>
                                </Typography.Paragraph>
                            </TabPane>
                            <TabPane tab="Output" key="output">
                                {this.state.error &&
                                    <ErrorComponent error={this.state.error}></ErrorComponent>
                                    || (this.state.runned === true &&
                                        <SuccessComponent title={"Success!"} message={"All tests are clear."}/>)}
                            </TabPane>

                        </Tabs>

                    </Col>
                    <Col flex="3">
                        <Button onClick={this.onCompile}>
                            Run
                        </Button>
                        <Button onClick={this.resetTask}>
                            Reset
                        </Button>
                        <AceEditor
                            mode="javascript"
                            theme="twilight"
                            onChange={this.onChange}
                            name="UNIQUE_ID_OF_DIV"
                            value={this.state.task.currentCode}
                            //height={this.state.editorHeight}
                            width={this.state.editorWidth}
                        />
                        <Divider/>
                        <AceEditor
                            mode="javascript"
                            theme="twilight"
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{$blockScrolling: true}}
                            setOptions={{readOnly: true, focus: false, highlightActiveLine: false}}
                            value={card.test}
                            height={200}
                            width={this.state.editorWidth}
                        />
                    </Col>
                </Row>
            </div>

        )
    }
}


export function TaskRouteComponent() {
    const params = useParams();
    return (
        <TaskComponent card={FindTask(params.id)}/>
    )
}

