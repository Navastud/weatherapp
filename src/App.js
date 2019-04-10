import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col } from "antd";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import "./App.css";
const { Header, Sider, Content, Footer } = Layout;

const cities = [
  "Buenos Aires, ar",
  "Santiago, cl",
  "Bogotá, col",
  "Washington DC., us",
  "Ciudad de México, mx",
  "Madrid, es"
];

class App extends Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout id="layout-side">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Perfil</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="cloud" />
              <span>Clima</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout id="layout-body">
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content>
            <Row gutter={16}>
              <Col span={12}>
                <LocationListContainer cities={cities} />
              </Col>
              <Col span={12}>
                <ForecastExtendedContainer />
              </Col>
            </Row>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
