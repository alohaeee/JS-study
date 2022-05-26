import './App.css';
import React from "react";
import {Layout, Menu, Breadcrumb} from "antd";

import {
    HomeOutlined,
    EditOutlined,
} from '@ant-design/icons';
import {TaskRouteComponent} from "./TaskComponent";
import {Route, Link, BrowserRouter, useLocation} from "react-router-dom";
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


class App extends React.Component {
    state = {
        collapsed: false,
    }


    onCollapse = async collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        //const {collapsed} = this.state;
        return (
            <BrowserRouter>
                <Layout style={{minHeight: '100vh'}}>
                    {/*<Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>*/}
                    {/*    <div className="logo"/>*/}

                    {/*</Sider>*/}
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <Menu defaultSelectedKeys={['1']}
                                  mode="horizontal">
                                <Menu.Item key="1" icon={<HomeOutlined/>}>
                                    <Link to="/">Home</Link>
                                </Menu.Item>
                                <Menu.SubMenu key="2" icon={<EditOutlined/>} title={"Task Edit"}>

                                    <Menu.Item key={"21"}>
                                        <Link to="TaskRedactor">New Task</Link>
                                    </Menu.Item>
                                    <Menu.Item key={"22"}>
                                        <Link to="/TaskRedactor/Tasks">Edit Task</Link>
                                    </Menu.Item>
                                </Menu.SubMenu>
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


                                    <Route path={`TaskRedactor/Tasks/:id`}
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
