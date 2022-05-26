import React from "react";
import {Card, Typography} from "antd";
import ReactMarkdown from 'react-markdown'
import {Link} from "react-router-dom"
import {
    CheckOutlined
} from "@ant-design/icons";
const removeMd = require('remove-markdown');

export class TaskCardComponent extends React.Component {

    render() {
        const card = this.props.card;
        let color = null;
        if (card.passed === true) {
            color = "LightGreen"
        } else if (card.currentCode && card.currentCode !== card.template) {
            color = "LightCyan"
        }
        return (
            <Link to={card.name}>
                <Card title={card.name} bordered={true} style={{height: 180, background: color}}
                      extra={card.passed === true && <CheckOutlined/>}>
                    <Typography.Paragraph
                        ellipsis={{rows: 3, expandable: false}}> {removeMd(card.description)}
                    </Typography.Paragraph>
                </Card>
            </Link>
        )
    }
}