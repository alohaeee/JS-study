import './App.css';
import React from "react";
import {Layout, Menu, Breadcrumb} from "antd";

import {
    HomeOutlined,
    EditOutlined,
} from '@ant-design/icons';
import {TaskRouteComponent} from "./TaskComponent";
import {Routes, Route, Link, BrowserRouter, useLocation} from "react-router-dom";
import {Home} from "./Home";
import {TasksCardsEditComponent, TaskRedactorComponent, TaskRedactorRouteComponent} from "./RedactorComponent";
import {matchPath} from "react-router";

const {Header, Content, Footer} = Layout;

const breadCrumbMap = {
    '/TaskRedactor': "Task Edit",
    '/TaskRedactor/Tasks': 'Tasks',
    'TaskRedactor/Tasks/:id': 'id',
    '/:id': 'id',
}
const BreadCrumbComponent = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

        let breadCrumbName = null

        // Проверим, паттерн ли это
        for (const key in breadCrumbMap) {
            const matched = matchPath(key, url);
            if (matched && matched.params) {
                const name = matched.params[breadCrumbMap[key]]
                if (breadCrumbMap[url]){
                    breadCrumbName = breadCrumbMap[url]
                }
                else if (name) {
                    breadCrumbName = name;
                }
            }
        }

        return (
            <Breadcrumb.Item key={url}>
                {breadCrumbName && <Link to={url}>{breadCrumbName}</Link>
                    || <Link to={url}>{url.slice(1, url.length)}</Link>}
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            {breadcrumbItems}
        </Breadcrumb>)
}

const items = [
    { label: <Link to="/">Home</Link>, key: '1', icon: <HomeOutlined/> }, // remember to pass the key prop
    {
        label: 'Task Edit',
        key: '2',
        icon: <EditOutlined/>,
        children: [
            { label: <Link to="TaskRedactor">New Task</Link>, key: '21' },
            { label: <Link to="/TaskRedactor/Tasks">Edit Task</Link>, key: '22' }
        ]
    }
];

class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Layout style={{minHeight: '100vh'}}>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <Menu defaultSelectedKeys={['1']}
                                  mode="horizontal" items={items}>
                            </Menu>
                        </Header>
                        <Content style={{margin: '0 16px'}}>

                            <BreadCrumbComponent></BreadCrumbComponent>
                            <div className="site-card-wrapper">
                                <Routes>
                                    <Route path="/" element={<Home></Home>}/>

                                    <Route path="/:id" element={<TaskRouteComponent/>}/>

                                    <Route path="/TaskRedactor" element={<TaskRedactorComponent/>}/>


                                    <Route path={"/TaskRedactor/Tasks"} element={<TasksCardsEditComponent/>}/>


                                    <Route path={`/TaskRedactor/Tasks/:id`}
                                           element={<TaskRedactorRouteComponent/>}/>

                                </Routes>
                            </div>


                        </Content>
                        <Footer style={{textAlign: 'center'}}>JS study</Footer>
                    </Layout>


                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
