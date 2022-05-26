import React from "react";
import {Alert, Button, Card, Col, Divider, Grid, Layout, Row, Tabs, Tree, TreeSelect, Typography} from "antd";

import ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-twilight";
import AceEditor from "react-ace";

import ReactMarkdown from 'react-markdown'
import "./Interpreter.mjs"
import {defaultInterpr} from "./Interpreter.mjs";
import {useParams} from "react-router";
import {FindTask, SaveTask} from "./TaskApi.mjs";


const { TabPane } = Tabs;

class ErrorComponent extends React.Component
{
    render() {
        const error = this.props.error;

        return (
            <div>
                <Alert showIcon message={error.name === "AssertionError" && "Test Failed!"
                    || error.name} type="error" description={error.message} />
                {/*<Typography.Title level={2} type={"danger"}>*/}
                {/*    {error.name === "AssertionError" && "Test Failed!"*/}
                {/*    || error.name}*/}
                {/*</Typography.Title>*/}
                {/*<Typography.Text>*/}
                {/*    {error.message}*/}
                {/*</Typography.Text>*/}
            </div>
        );
    }
}

class SuccessComponent extends React.Component
{
    render() {
        const title = this.props.title;
        const msg = this.props.message;
        return (
            <div>
                <Alert showIcon message={title} type="success" description={msg} />
                {/*<Typography.Title level={2} type={"success"}>*/}
                {/*    {title}*/}
                {/*</Typography.Title>*/}
                {/*<Typography.Text>*/}
                {/*    {msg}*/}
                {/*</Typography.Text>*/}
            </div>
        );
    }
}
export class TaskComponent extends React.Component {


    constructor(props) {
        super(props);

        if (this.props.card.currentCode === null) {
            this.props.card.currentCode = this.props.card.template;
        }
        this.state = {
            currentCode: this.props.card.currentCode,
            editorHeight: 400,
            editorWidth: "auto",
            error: null,
            activeTab: this.props.card.theory ? "theory" : "description",
            runned : false,
            task : this.props.card
        }
    }

    onChange = (newValue) => {
        console.log("change", newValue);
        this.state.task.currentCode = newValue
        this.setState({task: this.state.task});
    }
    componentWillUnmount(){
        SaveTask(this.state.task);
    }
    onCompile = () => {
        this.setState({runned: true})
        this.setState({activeTab: "output"})
        this.setState({error: null})

        this.state.task.passed = true
        try{
            defaultInterpr.RunTask(this.state.task);
        }
        catch (error){
            console.log(error);
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
        console.log("PASSED?")
        console.log(this.state.task.passed)
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
                                || (this.state.runned === true && <SuccessComponent title={"Success!"} message={"All tests are clear."}/>)}
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
                            // editorProps={{$blockScrolling: true}}
                            value={this.state.task.currentCode}
                            defaultValue={this.state.task.templateCode}
                            height={this.state.editorHeight}
                            width={this.state.editorWidth}
                        />
                        <Divider />
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
    const params = useParams()
    return (
        <TaskComponent card={FindTask(params.id)}></TaskComponent>
    )
}

