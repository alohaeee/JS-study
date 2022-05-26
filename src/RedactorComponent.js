import React from "react";
import {Card, Col, Row, Tabs, Typography, Input, Button, Divider, Select} from "antd";
import {Link} from "react-router-dom"
import AceEditor from "react-ace";
import ReactMarkdown from "react-markdown";
import {TaskTemplate} from "./TaskTemplate";
import {tasksStaticData} from "./TasksStaticData.mjs";
import {TaskCardsComponent} from "./TaskCardsComponent";
import {useParams} from "react-router";
import {FindTask} from "./TaskApi.mjs";


function MarkdownPreviewComponent(props) {
    return (
        <div>
            <Divider>Markdown preview</Divider>
            <Typography.Paragraph style={{background: "white", borderStyle: "solid", borderWidth: "thin"}}>
                <ReactMarkdown>{props.text}</ReactMarkdown>
            </Typography.Paragraph>
        </div>
    );
}

export class TaskRedactorComponent extends React.Component {


    constructor(props) {
        super(props);

        console.log(props.card)
        if (props.card) {
            this.state = props.card
        } else {
            this.state = {
                template: "",
                test: "",
                name: "",
                description: "",
                theory: "",
                topic: ""
            }
        }
    }

    onTemplateChange = (val) => {
        this.setState({template: val})
    }
    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    onTopicChange = (e) => {
        this.setState({topic: e.target.value})
    }
    onDescriptionChange = (e) => {
        this.setState({description: e.target.value})
    }
    onTheoryChange = (e) => {
        this.setState({theory: e.target.value})
    }
    onTestChange = (val) => {
        this.setState({test: val})
    }
    onCopyToClipboard = async () => {
        console.log(this.state)
        let task = new TaskTemplate(this.state.name, this.state.description, this.state.template, this.state.test, this.state.theory)
        task = JSON.stringify(task)
        console.log(task)
        await navigator.clipboard.writeText(task)
    }
    openTask = () => {
        this.setState({topic: "dasda"});
    }

    render() {
        console.log(this.params)
        console.log(this.state.template)
        return (
            <Row>
                <Col flex="2" style={{margin: '0 16px'}}>
                    <Tabs onChange={this.onTabChange}>
                        {/*<Tabs.TabPane tab="Topic" key="topic">*/}
                        {/*    <Input onChange={this.onTopicChange} value={this.state.topic}/>*/}
                        {/*</Tabs.TabPane>*/}
                        <Tabs.TabPane tab="Name" key="name">
                            <Input onChange={this.onNameChange} value={this.state.name}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Theory" key="theory">
                            <Input.TextArea rows={12} onChange={this.onTheoryChange} value={this.state.theory}/>
                            <MarkdownPreviewComponent text={this.state.theory}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Description" key="description">
                            <Input.TextArea rows={12} onChange={this.onDescriptionChange}
                                            value={this.state.description}/>
                            <MarkdownPreviewComponent text={this.state.description}/>

                        </Tabs.TabPane>
                    </Tabs>
                </Col>
                <Col flex="3">
                    <Button onClick={this.onCopyToClipboard}>
                        Copy to clipboard
                    </Button>
                    <Typography.Title level={5}>User code template</Typography.Title>
                    <AceEditor
                        mode="javascript"
                        theme="twilight"
                        onChange={this.onTemplateChange}
                        name="UNIQUE_ID_OF_DIV"
                        value={this.state.template}
                        defaultValue={""}
                        height={400}
                        width={"auto"}
                    />
                    <Divider/>
                    <Typography.Title level={5}>Test code</Typography.Title>
                    <AceEditor
                        mode="javascript"
                        theme="twilight"
                        onChange={this.onTestChange}
                        name="UNIQUE_ID_OF_DIV"
                        value={this.state.test}
                        defaultValue={""}
                        height={400}
                        width={"auto"}
                    />
                </Col>
            </Row>

        )
    }
}

export class TasksCardsEditComponent extends React.Component {

    render() {
        return (<TaskCardsComponent tasks={tasksStaticData}>
        </TaskCardsComponent>)
    }
}

export function TaskRedactorRouteComponent() {
    const params = useParams()
    return (
        <TaskRedactorComponent card={FindTask(params.id, false)}/>
    );
}